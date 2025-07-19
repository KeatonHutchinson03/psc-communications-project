# PSC Impact Stories Web Application

A single-page web application built to showcase impactful stories supported by the **Pittsburgh Supercomputing Center (PSC)**. This project is part of the **PSC Impact Stories** initiative - a series of short features highlighting how PSC’s computing resources have helped researchers solve real-world problems.

---

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Content Management:** [Contentlayer](https://contentlayer.dev/)
- **Image Optimization:** Next.js `<Image>` component
- **Deployment (Optional):** [Vercel](https://vercel.com/)

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
