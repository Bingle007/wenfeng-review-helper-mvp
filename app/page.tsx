import ArticleInput from "@/components/ArticleInput";
import FormatSelector from "@/components/FormatSelector";
import ReviewResult from "@/components/ReviewResult";

export default function HomePage() {
  return (
    <main className="p-6 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">文风点评助手</h1>
      <ArticleInput />
      <FormatSelector />
      <ReviewResult />
    </main>
  );
}