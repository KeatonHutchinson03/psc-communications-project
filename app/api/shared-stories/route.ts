import { promises as fs } from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

const filePath = path.join(process.cwd(), 'data', 'sharedstories.json')

export async function GET() {
  const isProd = process.env.VERCEL_ENV === 'production'

  if (isProd) {
    const { kv } = await import('@vercel/kv')
    const keys = await kv.keys('story:*')
    const stories = await Promise.all(keys.map((key) => kv.get(key)))
    const parsedStories = stories.filter((s): s is string => s !== null).map((s) => JSON.parse(s))
    return NextResponse.json(parsedStories)
  } else {
    const json = await fs.readFile(filePath, 'utf-8')
    const stories = JSON.parse(json)
    return NextResponse.json(stories)
  }
}

export async function POST(request: Request) {
  const isProd = process.env.VERCEL_ENV === 'production'
  const story = await request.json()

  // Assign a unique ID before storing
  const storyWithId = {
    id: Date.now(), // simple unique ID based on timestamp
    ...story,
  }

  if (isProd) {
    const { kv } = await import('@vercel/kv')
    const key = `story:${storyWithId.id}`
    await kv.set(key, JSON.stringify(storyWithId))
    return NextResponse.json({ success: true })
  } else {
    const json = await fs.readFile(filePath, 'utf-8')
    const existing = JSON.parse(json)
    existing.push(storyWithId)
    await fs.writeFile(filePath, JSON.stringify(existing, null, 2))
    return NextResponse.json({ success: true })
  }
}
