'use client'

import { useState } from 'react'
import stories from '../data/stories.json'
import Header from '@/components/Header'
import StoryList from '@/components/StoryList'
import IntroSection from '@/components/IntroSection'

interface Story {
  id: number
  title: string
  description: string
  researcher: string
  tags: string[]
}

export default function Page() {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null)

  return (
    <>
      {/* Pass the setter as prop to Header */}
      <Header onSelectStory={setSelectedStory} />

      <main className="mx-auto max-w-5xl space-y-8 px-4 py-8">
        <h1 className="text-center text-4xl font-bold text-gray-900 dark:text-gray-100">
          Introduction
        </h1>
        <IntroSection />

        <h2 className="text-center text-4xl font-bold text-gray-900 dark:text-gray-100">
          PSC Impact Stories
        </h2>

        {selectedStory ? <StoryList stories={[selectedStory]} /> : <StoryList stories={stories} />}

        {selectedStory && (
          <div className="text-center">
            <button
              onClick={() => setSelectedStory(null)}
              className="mt-4 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Show All Stories
            </button>
          </div>
        )}
      </main>
    </>
  )
}
