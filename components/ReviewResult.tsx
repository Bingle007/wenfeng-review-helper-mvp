'use client';
import { useState } from 'react';

export default function ReviewResult() {
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState('');
  const [format, setFormat] = useState('见感思行');

  async function handleReview() {
    setLoading(true);
    const res = await fetch('/api/review', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, format }),
    });
    const data = await res.json();
    setResult(data.result || '无返回内容');
    setLoading(false);
  }

  return (
    <div className="space-y-2">
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleReview}
        disabled={loading}
      >
        {loading ? '生成中...' : '生成点评'}
      </button>
      <pre className="whitespace-pre-wrap bg-gray-100 p-3 rounded">{result}</pre>
    </div>
  );
}