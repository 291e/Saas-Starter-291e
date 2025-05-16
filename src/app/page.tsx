import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          SaaS Starter Kit
        </h1>
        <p className="text-center mb-8">
          현대적인 SaaS 애플리케이션을 위한 스타터 키트
        </p>
        <div className="flex justify-center gap-4">
          <Button>
            <Link href="/auth/login">시작하기 </Link>
          </Button>

          <Link href="/docs">
            <Button variant="outline">문서 보기</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
