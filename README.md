# ROI Agency

A modern Next.js 14+ application built with the App Router, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React, Radix UI Icons
- **Forms**: React Hook Form with Zod validation
- **Theming**: next-themes
- **Utilities**: class-variance-authority, clsx, tailwind-merge
- **Components**: Vaul (drawer component)

## Getting Started

### Prerequisites

- Node.js 20.11.1+ (see `.nvmrc`)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
src/
├── app/           # App Router pages and layouts
├── components/    # Reusable components
│   └── ui/       # shadcn/ui components
├── lib/           # Utility functions and configurations
└── ...
```

## Configuration Files

- `.nvmrc` - Node.js version specification
- `.editorconfig` - Editor configuration
- `.prettierrc` - Prettier formatting rules
- `components.json` - shadcn/ui configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.ts` - Tailwind CSS configuration

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
