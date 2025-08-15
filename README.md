# Precious Memories

A modern, responsive personal portfolio website built with Next.js, showcasing personal projects and games with an elegant design philosophy: "Life is short, play more."

## Features

-   🎨 **Modern Design**: Clean, minimalist interface with smooth animations and hover effects
-   🔍 **Smart Search**: Command palette with keyboard shortcuts (Ctrl/Cmd + K) to quickly find and navigate to projects
-   🌓 **Theme Support**: Light, dark, and system theme modes with seamless switching
-   📱 **Responsive Layout**: Fully responsive grid layout that works perfectly on all devices
-   ⚡ **Performance Optimized**: Built with Next.js 15 and optimized for speed and SEO
-   🎯 **Interactive Cards**: Project cards with hover effects and direct navigation to external links

## Tech Stack

-   **Framework**: Next.js 15 with App Router
-   **Styling**: Tailwind CSS with custom design system
-   **UI Components**: shadcn/ui component library
-   **Icons**: Lucide React icons
-   **Theme**: next-themes for theme management
-   **TypeScript**: Full type safety throughout the application

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

-   `/src/components` - Reusable UI components
-   `/src/data` - Project data and configurations
-   `/src/types` - TypeScript type definitions
-   `/src/assets` - Static assets including images
-   `/src/app` - Next.js app router pages and layouts

## Customization

To add your own projects, modify the `projects` array in `/src/data/projects.ts`. Each project should include:

-   Title and description
-   Preview image (imported from `/src/assets/images/`)
-   External link
-   Tags for categorization

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
