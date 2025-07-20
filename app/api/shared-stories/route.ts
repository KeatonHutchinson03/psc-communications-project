import { promises as fs } from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

const filePath = path.join(process.cwd(), 'data', 'sharedstories.json')

export async function GET() {
  const data = await fs.readFile(filePath, 'utf-8')
  return NextResponse.json(JSON.parse(data))
}

export async function POST(request: Request) {
  const newStory = await request.json()

  const data = await fs.readFile(filePath, 'utf-8')
  const stories = JSON.parse(data)

  const newEntry = {
    id: Date.now(), // or use uuid
    ...newStory,
  }

  stories.push(newEntry)
  await fs.writeFile(filePath, JSON.stringify(stories, null, 2))

  return NextResponse.json(newEntry, { status: 201 })
}
