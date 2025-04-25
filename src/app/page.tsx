import { RouterBtn } from "@/components/common/RouterBtn";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="max-w-xl mx-auto py-16 px-6 space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-2 border-2 border-blue-300">
          Yeshua Tools
        </h1>
        <p className="text-muted-foreground">
          말씀을 더 쉽고 깊이 있게 접할 수 있도록 돕는 도구들입니다.
        </p>
      </section>

      <section className="space-y-3">
        <RouterBtn label="📖 성경 구절 검색" href="/search" />
        <RouterBtn
          label="🧠 AI 말씀 추천 (준비 중)"
          href="/recommend"
          disabled
        />
        <RouterBtn
          label="✍️ 말씀 필사 도우미 (준비 중)"
          href="/handwriting"
          disabled
        />
        <RouterBtn
          label="💬 예수님과의 대화 (준비 중)"
          href="/talktojesus"
          disabled
        />
      </section>
    </main>
  );
}
