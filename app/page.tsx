'use client'

import { useState, useEffect } from 'react'
import stories from '../data/stories.json'
import Header from '@/components/Header'
import StoryList from '@/components/StoryList'
import IntroSection from '@/components/IntroSection'
import SharedStoryList from '@/components/SharedStoryList'

interface Story {
  id: number
  title: string
  description: string
  researcher: string
  tags: string[]
}

interface SharedStory {
  id: number
  name: string
  email: string
  title: string
  description: string
}
export default function Page() {
  const [selectedStories, setSelectedStories] = useState<Story[]>([])
  const [sharedStories, setSharedStories] = useState<SharedStory[]>([])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    description: '',
  })
  const [loading, setLoading] = useState(true)

  // Move fetchSharedStories outside useEffect so handleSubmit can call it
  const fetchSharedStories = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/shared-stories')
      const data = await res.json()
      setSharedStories(data)
    } catch (err) {
      console.error('Failed to load shared stories', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchSharedStories()
  }, [])

  const handleSelectStory = (story: Story) => {
    setSelectedStories((prev) => {
      if (prev.find((s) => s.id === story.id)) return prev
      return [...prev, story]
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Updated handleSubmit that posts formData and refreshes shared stories after submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch('/api/shared-stories', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })

    if (res.ok) {
      alert('Thank you for your submission!')
      setFormData({ name: '', email: '', title: '', description: '' })
      fetchSharedStories() // refresh stories below the form
    } else {
      alert('Error submitting story')
    }
  }

  return (
    <>
      <Header onSelectStory={handleSelectStory} selectedStories={selectedStories} />

      <main className="mx-auto max-w-5xl space-y-8 px-4 py-8">
        <IntroSection />

        <h2 className="text-center text-4xl font-bold text-gray-900 dark:text-gray-100">
          PSC Impact Stories
        </h2>

        {selectedStories.length > 0 ? (
          <StoryList stories={selectedStories} />
        ) : (
          <StoryList stories={stories} />
        )}

        {selectedStories.length > 0 && (
          <div className="text-center">
            <button
              onClick={() => setSelectedStories([])}
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

        {sharedStories.length > 0 && (
          <section className="mt-12">
            <h2 className="text-center text-4xl font-bold text-gray-900 dark:text-gray-100">
              Shared Stories
            </h2>

            {loading ? <p>Loading...</p> : <SharedStoryList stories={sharedStories} />}
          </section>
        )}
      </main>
    </>
  )
}
