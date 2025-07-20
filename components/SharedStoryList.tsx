import React from 'react'
import SharedStoryCard from '@/components/SharedStoryCard'

interface SharedStory {
  id: number
  name: string
  email: string
  title: string
  description: string
}

export default function SharedStoryList({ stories }: { stories: SharedStory[] }) {
  if (!stories.length) {
    return <p className="text-center text-gray-500 dark:text-gray-400">No shared stories yet.</p>
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {stories.map((story) => (
        <SharedStoryCard key={story.id} story={story} />
      ))}
    </div>
  )
}
