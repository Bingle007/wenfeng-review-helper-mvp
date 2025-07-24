import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI();

export async function POST(req: Request) {
  const { content } = await req.json();

  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: "你是一位文风分析专家。" },
      { role: "user", content: `请分析下面文章的文风：\n${content}` }
    ],
    temperature: 0.7
  });

  return NextResponse.json({ style: completion.choices[0].message.content });
}