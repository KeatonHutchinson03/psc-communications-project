import React from 'react'

interface SharedStory {
  id: number
  name: string
  email: string
  title: string
  description: string
}

const SharedStoryCard = ({ story }: { story: SharedStory }) => {
  return (
    <div className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg dark:bg-gray-900">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{story.title}</h2>
      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">By {story.name}</p>
      <p className="mb-4 text-gray-700 dark:text-gray-300">{story.description}</p>
    </div>
  )
}

export default SharedStoryCard
