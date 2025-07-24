"use client";
import { useState } from "react";

export default function ArticleInput() {
  const [content, setContent] = useState("");

  return (
    <div>
      <label className="block font-medium mb-1">输入文章内容：</label>
      <textarea
        rows={6}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="粘贴文章内容或链接..."
        className="w-full p-2 border rounded"
      />
    </div>
  );
}