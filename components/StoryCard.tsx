// components/StoryCard.tsx
import React from 'react'

interface Story {
  id: number
  title: string
  description: string
  researcher: string
  tags: string[]
}

const StoryCard = ({ story }: { story: Story }) => {
  return (
    <div className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg dark:bg-gray-900">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{story.title}</h2>
      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">By {story.researcher}</p>
      <p className="mb-4 text-gray-700 dark:text-gray-300">{story.description}</p>
      <div className="flex flex-wrap gap-2">
        {story.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800 dark:bg-blue-800 dark:text-blue-100"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default StoryCard
