# LaunchStack Repurpose — AI Content Repurposing Engine

Turn one piece of content into posts for every platform — in seconds, not hours.

## Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/launchstack-repurpose.git
cd launchstack-repurpose

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.local.example .env.local
# Edit .env.local and add your OpenAI API key

# 4. Run locally
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Environment Variables

The only required variable for Phase 1 is:

```
OPENAI_API_KEY=sk-your-key-here
```

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Add `OPENAI_API_KEY` as an environment variable
4. Click Deploy

Your app will be live in ~60 seconds.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **AI:** OpenAI GPT-4o-mini
- **Icons:** Lucide React
- **Hosting:** Vercel

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Landing page
│   ├── dashboard/page.tsx    # Logged-in dashboard
│   └── api/
│       ├── repurpose/        # Repurpose existing content
│       └── generate/         # Generate from topic
├── components/
│   ├── landing/              # Landing page sections
│   ├── dashboard/            # Dashboard components
│   └── shared/               # Shared components
└── lib/
    ├── openai.ts             # OpenAI client
    ├── prompts.ts            # AI prompt engineering
    ├── platforms.ts          # Platform configs
    └── utils.ts              # Utilities
```
