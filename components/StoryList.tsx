// components/StoryList.tsx
import React from 'react'
import StoryCard from './StoryCard'

type Story = {
  id: number
  title: string
  description: string
  researcher: string
  tags: string[]
}

type StoryListProps = {
  stories: Story[]
}

export default function StoryList({ stories }: StoryListProps) {
  // Log all the story IDs to check for uniqueness and existence

  if (!stories.length) {
    return <p className="text-center text-gray-500 dark:text-gray-400">No stories found.</p>
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {stories.map((story) => (
        <StoryCard key={story.id} story={story} />
      ))}
    </div>
  )
}
