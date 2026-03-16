import { NextRequest, NextResponse } from "next/server"
import { generateContent } from "@/lib/openai"
import { buildRepurposePrompt } from "@/lib/prompts"
import type { Platform } from "@/lib/platforms"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { content, platforms } = body as {
      content: string
      platforms: Platform[]
    }

    if (!content || !content.trim()) {
      return NextResponse.json(
        { error: "Content is required" },
        { status: 400 }
      )
    }

    if (!platforms || platforms.length === 0) {
      return NextResponse.json(
        { error: "At least one platform must be selected" },
        { status: 400 }
      )
    }

    if (content.length > 10000) {
      return NextResponse.json(
        { error: "Content must be under 10,000 characters" },
        { status: 400 }
      )
    }

    const prompt = buildRepurposePrompt(content, platforms)
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
      mode: "repurpose",
    })
  } catch (error: unknown) {
    console.error("Repurpose API error:", error)
    const message =
      error instanceof Error ? error.message : "Internal server error"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
