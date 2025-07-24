export default function FormatSelector() {
  return (
    <div>
      <label className="block font-medium mb-1">选择点评格式：</label>
      <select className="w-full p-2 border rounded">
        <option>见感思行</option>
        <option>三段式</option>
        <option>金字塔结构</option>
      </select>
    </div>
  );
}