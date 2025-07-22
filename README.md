# PSC Impact Stories Web Application

A single-page web application built to showcase impactful stories supported by the **Pittsburgh Supercomputing Center (PSC)**. This project is part of the **PSC Impact Stories** initiative - a series of short features highlighting how PSC’s computing resources have helped researchers solve real-world problems.

---

## 📸 Demo

![PSC Impact Stories Screenshot](./public/static/images/demo-screenshot.png)

You can see the live version here: [psc-communications-project.vercel.app](https://psc-communications-project.vercel.app)

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Framework:** [React](https://react.dev)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Image Optimization:** Next.js `<Image>` component
- **Deployment:** [Vercel](https://vercel.com/)

## 📌 Why This Tech Stack Was Chosen

- **Next.js**: Enables fast performance through static generation and server-side rendering, ideal for SEO and scalable content delivery.
- **React**: Component-based JavaScript library for building interactive UIs, enabling reusable code, fast updates through a virtual DOM, and a seamless user experience.
- **TypeScript**: Adds type safety and improves code reliability, making development more maintainable and collaborative.
- **Tailwind CSS**: Utility-first CSS framework that speeds up development and ensures consistent, responsive design across devices.
- **Next.js `<Image>` component**: Automatically optimizes images for performance, accessibility, and responsive delivery.
- **Vercel**: Seamless deployment platform for Next.js with features like preview deployments, global CDN, and GitHub integration.

---

## 🧰 1. Setup Instructions

### Prerequisites

- Node.js 18 or later
- Yarn (recommended)
- Git

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/KeatonHutchinson03/psc-communications-project.git
   cd psc-communications-project

   ```

2. **Install Dependencies**

   ```bash
   yarn install
   ```

3. **Fix Registry issues (if needed)**

   ```bash
   yarn config set npmRegistryServer https://registry.yarnpkg.com
   ```

4. **Run Development Server (locally)**

   ```bash
   yarn dev

   ```

   - site can be found on http://localhost:3000

5. **Run on Vercel**
   - Push code to github
   - Go to https://vercel.com and create an account
   - Import GitHub repo with Next.js as the framework
   - set yarn install as the install command with yarn build as the build command
   - Vercel will now build and deploy your site on a public URL!
   - Go to project in Vercel and click on storage tab
   - Find REDIS KV and connect project to REDIS KV for storage and sign in with GitHub
   - Run command to pull latest environment variable
   ```bash
   vercel env pull .env.development.local
   ```
   - Install Upstash Redis SDK locally
   ```bash
   yarn add @upstash/redis
   ```
   - Create shared-stories database within vercel storage tab for project
   - Setup for Vercel deployment is now correct and ready to view!

## 📁 Project Structure

```
psc-communications-project/
├── app/
│ ├── layout.tsx
│ ├── Main.tsx
│ ├── not-found.tsx
│ ├── page.tsx
│ ├── sitemap.ts
│ └── theme-providers.tsx
├── components/
│ ├── social-icons/
│ ├── Footer.tsx
│ ├── Header.tsx
│ ├── Image.tsx
│ ├── IntroSection.tsx
│ ├── LayoutWrapper.tsx
│ ├── Link.tsx
│ ├── MobileNav.tsx
│ ├── PageTitle.tsx
│ ├── SearchButton.tsx
│ ├── SectionContainer.tsx
│ ├── StoryCard.tsx
│ ├── StoryList.tsx
│ ├── SharedStoryCard.tsx
│ ├── SharedStoryList.tsx
│ └── ThemeSwitch.tsx
├── css/
│ ├── prism.css
│ └── tailwind.css
├── api/
│ ├── shared-stories/
│ │ └── route.ts
├── data/
│ ├── headerNavLinks.ts
│ ├── siteMetadata.js
│ ├── sharedstories.json
│ └── stories.json
├── public/
│ └── static/
├── schemas/
│ └── Stories.ts
├── types/
│ └── story.ts
```

## How It Works

### Core Structure Explained with Workflow

- **`app/`**

  - Contains main app-level components and routing logic.
  - `layout.tsx`: Sets up the overall page layout and integrates theme providers.
  - `page.tsx`: Homepage entry point, fetching and rendering stories dynamically.
  - `Main.tsx`: Handles the core content area.
  - `not-found.tsx`: Displays a user-friendly 404 page for unknown routes.
  - `sitemap.ts`: Generates the sitemap for SEO purposes.

- **`api/shared-stories`**

  - `route.ts` controls API routing for collecting json objects from form submission for Shared Stories section of webpage

- **`components/`**

  - Reusable UI components building the page structure and user interface.
  - `Header.tsx` & `Footer.tsx`: Manage consistent site header and footer.
  - `StoryCard.tsx` & `StoryList.tsx`: Display individual stories and lists of stories.
  - `SharedStoryCard.tsx` & `SharedStoryList.tsx`: Display individual shared stories and lists of shared stories.
  - `ThemeSwitch.tsx`: Allows users to toggle light/dark modes.
  - `MobileNav.tsx`: Handles navigation on mobile devices.
  - Other components like `IntroSection.tsx`, `SearchButton.tsx`, and `PageTitle.tsx` provide modular page sections and interactions.

- **`data/`**

  - Contains static data and configuration files.
  - `stories.json`: Holds the content data for all impact stories.
  - `sharedstories.json`: Holds the content data for all shared stories.
  - `headerNavLinks.ts`: Defines navigation links in the header.
  - `siteMetadata.js`: Contains metadata such as site title, description, and author info.

- **`schemas/` & `types/`**

  - Define TypeScript types and validation schemas to ensure consistent data handling.

- **`css/`**

  - Global styles and syntax highlighting themes, primarily managed with Tailwind CSS and Prism.

- **`public/`**
  - Hosts static assets like images

### Data Flow Summary

- At build or runtime, stories are loaded from `data/stories.json`.
- The `StoryList.tsx` component renders these stories as clickable story cards via `StoryCard.tsx`
- Users interact with UI elements such as theme switching via `ThemeSwitch.tsx`, navigation via `MobileNav.tsx`, and search via `SearchButton.tsx`
- (local development) `route.ts` informs form for shared story card to route to write to a json file for usage
  = (Vercel development) `route.ts` informs form for shared story card to connect to backend API to store json information in KV lightweight database thru Vercel for usage
- The `SharedStoryList.tsx` component renders these stories as clickable shared story cards via `SharedStoryCard.tsx`
- Pages are dynamically composed using React components in `app/` and `components/`.
- Global theming and layout are managed via `theme-providers.tsx` and `layout.tsx`.
