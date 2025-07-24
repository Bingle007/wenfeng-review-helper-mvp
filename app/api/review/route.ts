import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

export async function POST(req: NextRequest) {
  const { text, format } = await req.json();
  const prompt = `请使用「${format}」点评结构对以下文章生成点评：\n\n${text}`;
  const chat = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }],
  });
  return NextResponse.json({ result: chat.choices[0].message.content });
}