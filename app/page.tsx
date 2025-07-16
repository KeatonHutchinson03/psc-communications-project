// app/page.tsx
import stories from './data/stories.json'
import StoryList from '@/components/StoryList'

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl space-y-8 px-4 py-8">
      <h1 className="text-center text-4xl font-bold text-gray-900 dark:text-gray-100">
        PSC Impact Stories
      </h1>
      <StoryList stories={stories} />
    </main>
  )
}
