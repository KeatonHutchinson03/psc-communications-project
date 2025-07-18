'use client'

import { useState } from 'react'
import stories from '@/data/stories.json'

interface Story {
  id: number
  title: string
  description: string
  researcher: string
  tags: string[]
}

const SearchButton = ({ onSelectStory }: { onSelectStory: (story: Story) => void }) => {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const filteredStories = stories.filter((story) => {
    const q = query.toLowerCase()
    return (
      story.title.toLowerCase().includes(q) ||
      story.description.toLowerCase().includes(q) ||
      story.researcher.toLowerCase().includes(q) ||
      story.tags.some((tag) => tag.toLowerCase().includes(q))
    )
  })

  return (
    <>
      <button
        aria-label="Search"
        onClick={() => setIsOpen(true)}
        className="hover:text-primary-500 dark:hover:text-primary-400 p-2 text-gray-900 dark:text-gray-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-start justify-center bg-black p-4">
          <div className="w-full max-w-xl rounded-lg bg-white p-4 dark:bg-gray-900">
            <div className="mb-2 flex items-center justify-between">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search impact stories..."
                className="w-full rounded border border-gray-300 p-2 dark:bg-gray-800 dark:text-white"
              />
              <button onClick={() => setIsOpen(false)} className="ml-2 text-sm text-red-500">
                Close
              </button>
            </div>

            <ul className="max-h-64 space-y-2 overflow-y-auto">
              {filteredStories.map((story) => (
                <li key={story.id}>
                  <button
                    onClick={() => {
                      onSelectStory(story)
                      setIsOpen(false)
                    }}
                    className="w-full rounded p-2 text-left hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <p className="font-semibold">{story.title}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{story.description}</p>
                    <p className="text-xs text-gray-500 italic dark:text-gray-400">
                      by {story.researcher}
                    </p>
                  </button>
                </li>
              ))}
              {filteredStories.length === 0 && <li>No results found.</li>}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export default SearchButton
