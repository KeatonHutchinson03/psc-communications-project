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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    description: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Log submission to console
    console.log('New story submission:', formData)

    // Optional: reset form
    setFormData({ name: '', email: '', title: '', description: '' })

    // You can optionally show a thank you message or notification here
    alert('Thank you for your submission!')

    // In a real app, you’d send this to an API or backend to store
  }

  return (
    <>
      <Header onSelectStory={setSelectedStory} />

      <main className="mx-auto max-w-5xl space-y-8 px-4 py-8">
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

        {/* Call to Action Section */}
        <section className="mt-12 rounded border border-gray-300 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
          <h3 className="mb-4 text-3xl font-semibold text-gray-900 dark:text-gray-100">
            Share Your Impact Story
          </h3>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Explore more stories or submit your own impact story to inspire others.
          </p>

          <form onSubmit={handleSubmit} className="max-w-lg space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              required
              className="w-full rounded border border-gray-300 p-2 dark:bg-gray-900 dark:text-white"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              required
              className="w-full rounded border border-gray-300 p-2 dark:bg-gray-900 dark:text-white"
            />
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Story Title"
              required
              className="w-full rounded border border-gray-300 p-2 dark:bg-gray-900 dark:text-white"
            />
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Short Description"
              rows={4}
              required
              className="w-full rounded border border-gray-300 p-2 dark:bg-gray-900 dark:text-white"
            />

            <button
              type="submit"
              className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Submit Story
            </button>
          </form>
        </section>
      </main>
    </>
  )
}
