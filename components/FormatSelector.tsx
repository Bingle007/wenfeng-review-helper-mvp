'use client';
export default function FormatSelector({ onSelect }: any) {
  return (
    <div className="space-x-2">
      <label>点评格式：</label>
      <select className="border px-2 py-1 rounded" onChange={(e) => onSelect?.(e.target.value)}>
        <option value="见感思行">见感思行</option>
        <option value="三段式">三段式</option>
        <option value="SWOT">SWOT</option>
      </select>
    </div>
  );
}