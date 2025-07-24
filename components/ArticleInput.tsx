'use client';
import { useState } from 'react';

export default function ArticleInput({ onChange }: any) {
  const [content, setContent] = useState('');
  return (
    <div>
      <textarea
        className="w-full p-2 border rounded"
        rows={6}
        placeholder="粘贴文章内容或链接"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
          onChange?.(e.target.value);
        }}
      />
    </div>
  );
}