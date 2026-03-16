import { PLATFORMS, type Platform } from "./platforms"

// Data-driven prompt improvements based on 2025-2026 viral content research:
// - Hooks in first 2 seconds lift performance across all platforms (HootSuite 2026)
// - Posts built like "search results" (specific question + obvious answer in hook) go viral
// - Algorithm rewards: saves > shares > comments > likes > views
// - LinkedIn: conversational > corporate, "see more" clicks boost reach
// - TikTok: main keyword in first 30 caption chars, 15-60 sec sweet spot
// - Reels: 8-19 seconds sweet spot, natural/relatable > heavily scripted
// - Engagement quality > pure impressions across all platforms

const VIRAL_FRAMEWORK = `
## WHAT MAKES CONTENT GO VIRAL IN 2026 (apply to every post)
- The hook must work in 2 seconds or less — front-load the payoff
- Write like a search result: tackle a specific question head-on
- Use the exact language your audience actually uses (not industry jargon)
- Optimize for saves and shares, not views — the algorithm rewards depth
- Be conversational and relatable, never corporate or robotic
- Include a specific number, stat, or framework when possible (specificity = credibility)
- Make variation A use a "bold claim" hook and variation B use a "question" hook
`

export function buildRepurposePrompt(
  sourceContent: string,
  selectedPlatforms: Platform[]
): string {
  const platformInstructions = selectedPlatforms
    .map((p) => {
      const config = PLATFORMS[p]
      return `
### ${config.name} (max ${config.charLimit} chars)
**Tone:** ${config.tone}
**Format rules:** ${config.formatRules}
Generate 2 variations (A = bold claim hook, B = question hook).`
    })
    .join("\n")

  return `You are an elite content repurposing strategist. Your job is to transform source content into platform-native posts that feel like they were written by someone who lives on that platform — not robotic AI rewrites.

${VIRAL_FRAMEWORK}

## RULES
1. Extract the CORE insight, story, or value from the source content
2. TRANSFORM the message for each platform's audience and culture — never copy-paste
3. Every post must have a scroll-stopping hook in the FIRST LINE (this is the most important rule)
4. Stay within character limits strictly
5. Variation A: use a bold claim or surprising stat as the hook
6. Variation B: use a compelling question or "what if" as the hook
7. End every post with a clear micro-CTA (save this, share with someone, drop a comment)
8. Output ONLY valid JSON — no markdown, no code fences, no explanation

## SOURCE CONTENT
${sourceContent}

## PLATFORM INSTRUCTIONS
${platformInstructions}

## OUTPUT FORMAT
Return a JSON object with this exact structure:
{
  "platforms": {
    "<platform_id>": {
      "variation_a": "<full post text>",
      "variation_b": "<full post text>"
    }
  }
}

Platform IDs to use: ${selectedPlatforms.join(", ")}

Return ONLY the JSON object. No other text.`
}

export function buildGeneratePrompt(
  topic: string,
  niche: string,
  selectedPlatforms: Platform[]
): string {
  const platformInstructions = selectedPlatforms
    .map((p) => {
      const config = PLATFORMS[p]
      return `
### ${config.name} (max ${config.charLimit} chars)
**Tone:** ${config.tone}
**Format rules:** ${config.formatRules}
Generate 2 variations (A = bold claim hook, B = question hook).`
    })
    .join("\n")

  return `You are an elite social media content strategist. Your job is to create original, high-performing posts from a topic idea — posts that feel native to each platform and drive engagement.

${VIRAL_FRAMEWORK}

## RULES
1. Create genuinely valuable content — not generic motivational fluff
2. Every post must have a scroll-stopping hook in the FIRST LINE (most important rule)
3. Include specific details, numbers, or frameworks (specificity = credibility)
4. Stay within character limits strictly
5. Variation A: use a bold claim or surprising stat as the hook
6. Variation B: use a compelling question or "what if" as the hook
7. End every post with a clear micro-CTA (save this, share with someone, drop a comment)
8. Output ONLY valid JSON — no markdown, no code fences, no explanation

## TOPIC
${topic}

## NICHE/AUDIENCE
${niche || "General audience — creators, entrepreneurs, professionals"}

## PLATFORM INSTRUCTIONS
${platformInstructions}

## OUTPUT FORMAT
Return a JSON object with this exact structure:
{
  "platforms": {
    "<platform_id>": {
      "variation_a": "<full post text>",
      "variation_b": "<full post text>"
    }
  }
}

Platform IDs to use: ${selectedPlatforms.join(", ")}

Return ONLY the JSON object. No other text.`
}
