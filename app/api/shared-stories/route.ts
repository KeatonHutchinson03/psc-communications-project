import { promises as fs } from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

const filePath = path.join(process.cwd(), 'data', 'sharedstories.json')

export async function GET() {
  const isProd = process.env.VERCEL_ENV === 'production'

  if (isProd) {
    const { kv } = await import('@vercel/kv')

    // Get all keys starting with 'story:'
    const keys = await kv.keys('story:*')

    // Fetch all stories by keys in parallel
    const stories = await Promise.all(
      keys.map(async (key) => {
        const val = await kv.get(key)
        if (val === null) return null
        // If val is a string, parse it; else assume already parsed
        return typeof val === 'string' ? JSON.parse(val) : val
      })
    )

    // Filter out any nulls (in case some keys had no value)
    const filteredStories = stories.filter((story) => story !== null)

    return NextResponse.json(filteredStories)
  } else {
    // Non-production: read stories from local JSON file
    const json = await fs.readFile(filePath, 'utf-8')
    const stories = JSON.parse(json)
    return NextResponse.json(stories)
  }
}

export async function POST(request: Request) {
  const isProd = process.env.VERCEL_ENV === 'production'
  const story = await request.json()

  // Assign a unique ID based on timestamp
  const storyWithId = {
    id: Date.now(),
    ...story,
  }

  if (isProd) {
    const { kv } = await import('@vercel/kv')
    const key = `story:${storyWithId.id}`
    // Store the story as JSON string for consistency
    await kv.set(key, JSON.stringify(storyWithId))
    return NextResponse.json({ success: true })
  } else {
    // Non-production: add to local JSON file
    const json = await fs.readFile(filePath, 'utf-8')
    const existing = JSON.parse(json)
    existing.push(storyWithId)
    await fs.writeFile(filePath, JSON.stringify(existing, null, 2))
    return NextResponse.json({ success: true })
  }
}
