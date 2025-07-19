# PSC Impact Stories Web Application

A single-page web application built to showcase impactful stories supported by the **Pittsburgh Supercomputing Center (PSC)**. This project is part of the **PSC Impact Stories** initiative - a series of short features highlighting how PSC’s computing resources have helped researchers solve real-world problems.

---

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Image Optimization:** Next.js `<Image>` component
- **Deployment:** [Vercel](https://vercel.com/)

## 📌 Why This Tech Stack Was Chosen

- **Next.js**: Enables fast performance through static generation and server-side rendering, ideal for SEO and scalable content delivery.
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
│ └── ThemeSwitch.tsx
├── css/
│ ├── prism.css
│ └── tailwind.css
├── data/
│ ├── headerNavLinks.ts
│ ├── siteMetadata.js
│ └── stories.json
├── public/
│ └── static/
│ └── search.json
├── schemas/
│ └── Stories.ts
├── types/
│ └── story.ts
```
