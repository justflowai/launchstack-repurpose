import { NextRequest, NextResponse } from "next/server"
import { generateContent } from "@/lib/openai"
import { buildGeneratePrompt } from "@/lib/prompts"
import type { Platform } from "@/lib/platforms"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { topic, niche, platforms } = body as {
      topic: string
      niche?: string
      platforms: Platform[]
    }

    if (!topic || !topic.trim()) {
      return NextResponse.json(
        { error: "Topic is required" },
        { status: 400 }
      )
    }

    if (!platforms || platforms.length === 0) {
      return NextResponse.json(
        { error: "At least one platform must be selected" },
        { status: 400 }
      )
    }

    if (topic.length > 2000) {
      return NextResponse.json(
        { error: "Topic must be under 2,000 characters" },
        { status: 400 }
      )
    }

    const prompt = buildGeneratePrompt(topic, niche || "", platforms)
    const result = await generateContent(prompt)

    let parsed
    try {
      parsed = JSON.parse(result)
    } catch {
      return NextResponse.json(
        { error: "Failed to parse AI response. Please try again." },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      data: parsed,
      mode: "generate",
    })
  } catch (error: unknown) {
    console.error("Generate API error:", error)
    const message =
      error instanceof Error ? error.message : "Internal server error"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
