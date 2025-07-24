import { NextResponse } from "next/server";
import OpenAI from "openai";
import { formatTemplates } from "@/lib/prompts";

const openai = new OpenAI();

export async function POST(req: Request) {
  const { content, style, format } = await req.json();

  const formatPrompt = formatTemplates[format] || "请点评这篇文章。";

  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: `你是一位点评专家，具备以下文风特征：${style}` },
      { role: "user", content: `${formatPrompt}\n文章内容如下：\n${content}` }
    ],
    temperature: 0.8
  });

  return NextResponse.json({ review: completion.choices[0].message.content });
}