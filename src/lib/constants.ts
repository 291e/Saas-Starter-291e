// 글로벌 상수
export const SITE_NAME = "SaaS Start Kit";
export const PRIMARY_COLOR = "#6366f1"; // Tailwind indigo-500
export const DESCRIPTION =
  "빠르게 구축하는 SaaS의 미래. Next.js, TypeScript, Prisma로 구성된 완전한 솔루션.";

export const NAV_LINKS = [
  { href: "#features", label: "기능" },
  { href: "#pricing", label: "요금제" },
  { href: "/docs", label: "문서" },
  { href: "/blog", label: "블로그" },
  { href: "#faq", label: "FAQ" },
];

export const TECH_STACK = [
  "Next.js 15",
  "TypeScript",
  "Prisma ORM",
  "shadcn/ui",
  "Tailwind CSS",
  "NextAuth.js",
];

// 문제점 섹션 데이터
export const PROBLEMS = [
  {
    icon: "Clock",
    title: "개발 시간 부족",
    description:
      "기본 기능 구현에만 몇 달이 걸려 핵심 비즈니스 로직에 집중할 시간이 없어요.",
    gradient: "from-red-500 to-orange-500",
  },
  {
    icon: "Code2",
    title: "복잡한 설정",
    description:
      "인증, 결제, 이메일 등 매번 반복되는 설정들을 처음부터 구현해야 해요.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: "DollarSign",
    title: "높은 초기 비용",
    description:
      "프로젝트 시작 전에 이미 많은 개발 비용과 시간이 투자되어야 해요.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: "AlertTriangle",
    title: "보안 걱정",
    description:
      "사용자 데이터 보안과 인증 시스템을 안전하게 구현하기가 어려워요.",
    gradient: "from-yellow-500 to-amber-500",
  },
  {
    icon: "Zap",
    title: "확장성 문제",
    description:
      "처음엔 간단했던 코드가 사용자가 늘어나면서 관리하기 어려워져요.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: "Users",
    title: "팀 협업 어려움",
    description:
      "프로젝트 구조가 명확하지 않아 팀원들과 효율적으로 작업하기 힘들어요.",
    gradient: "from-indigo-500 to-blue-500",
  },
];

// 솔루션 섹션 데이터
export const SOLUTIONS = [
  {
    id: 1,
    icon: "Zap",
    title: "즉시 시작 가능",
    description: "완전히 설정된 개발 환경으로 5분 안에 SaaS 개발을 시작하세요.",
    size: "large", // 2x2
    gradient: "from-blue-500 to-cyan-500",
    features: ["Next.js 15", "TypeScript", "ESLint 설정", "Prettier 설정"],
  },
  {
    id: 2,
    icon: "Shield",
    title: "보안 내장",
    description: "업계 표준 보안이 미리 구현되어 있습니다.",
    size: "medium", // 1x2
    gradient: "from-green-500 to-emerald-500",
    features: ["JWT 인증", "CSRF 보호", "Rate Limiting"],
  },
  {
    id: 3,
    icon: "Database",
    title: "데이터베이스 준비",
    description: "Prisma ORM으로 완벽하게 설정된 데이터베이스",
    size: "medium", // 1x2
    gradient: "from-purple-500 to-pink-500",
    features: ["PostgreSQL", "Migration", "Seeding"],
  },
  {
    id: 4,
    icon: "CreditCard",
    title: "결제 통합",
    description: "Stripe 결제 시스템이 바로 사용 가능합니다.",
    size: "small", // 1x1
    gradient: "from-orange-500 to-red-500",
    features: ["구독 결제", "일회성 결제"],
  },
  {
    id: 5,
    icon: "Mail",
    title: "이메일 자동화",
    description: "React Email과 Resend로 구성된 시스템",
    size: "small", // 1x1
    gradient: "from-indigo-500 to-blue-500",
    features: ["템플릿", "자동 발송"],
  },
  {
    id: 6,
    icon: "Users",
    title: "사용자 관리",
    description: "완전한 사용자 관리 시스템",
    size: "medium", // 2x1
    gradient: "from-pink-500 to-rose-500",
    features: ["회원가입", "로그인", "프로필 관리", "권한 관리"],
  },
];

// 기술 스택 데이터
export const TECH_STACK_ITEMS = [
  { name: "Next.js 15", icon: "⚡" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Prisma ORM", icon: "🗄️" },
  { name: "NextAuth.js", icon: "🔐" },
  { name: "Stripe", icon: "💳" },
  { name: "Resend", icon: "📧" },
  { name: "React Email", icon: "✉️" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Vercel", icon: "▲" },
  { name: "shadcn/ui", icon: "🎯" },
  { name: "Framer Motion", icon: "🎬" },
];

// 요금제 섹션 데이터
export const PRICING_PLANS = [
  {
    name: "스타터",
    description: "개인 개발자를 위한 무료 플랜",
    price: "무료",
    period: "",
    highlight: false,
    icon: "Star",
    features: [
      "기본 UI 컴포넌트",
      "사용자 인증 (이메일/비밀번호)",
      "데이터베이스 설정",
      "기본 이메일 템플릿",
      "커뮤니티 지원",
    ],
    buttonText: "무료로 시작",
    gradient: "from-gray-500 to-slate-500",
  },
  {
    name: "프로",
    description: "성장하는 스타트업을 위한 완전한 솔루션",
    price: "49,000",
    period: "/월",
    highlight: true,
    icon: "Zap",
    badge: "인기",
    features: [
      "모든 스타터 기능 포함",
      "소셜 로그인 (Google, GitHub 등)",
      "결제 시스템 (Stripe 통합)",
      "고급 이메일 자동화",
      "관리자 대시보드",
      "프리미엄 컴포넌트",
      "우선 기술 지원",
    ],
    buttonText: "프로 플랜 시작",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    name: "엔터프라이즈",
    description: "대규모 팀과 기업을 위한 맞춤형 솔루션",
    price: "상담",
    period: "",
    highlight: false,
    icon: "Crown",
    features: [
      "모든 프로 기능 포함",
      "화이트라벨 솔루션",
      "맞춤형 개발 지원",
      "전용 서버 지원",
      "24/7 전담 지원",
      "온사이트 교육",
      "SLA 보장",
    ],
    buttonText: "영업팀 문의",
    gradient: "from-purple-500 to-pink-500",
  },
];

// 작동 방식 섹션 데이터
export const HOW_IT_WORKS_STEPS = [
  {
    id: 1,
    icon: "Download",
    title: "다운로드 & 설치",
    description: "GitHub에서 프로젝트를 클론하고 의존성을 설치합니다.",
    details: [
      "git clone 명령어로 저장소 복제",
      "npm install 또는 yarn install 실행",
      "환경 변수 설정 (.env 파일)",
      "데이터베이스 연결 확인",
    ],
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
  },
  {
    id: 2,
    icon: "Settings",
    title: "커스터마이징",
    description: "브랜딩, 기능, 설정을 프로젝트에 맞게 수정합니다.",
    details: [
      "로고 및 브랜딩 변경",
      "필요한 기능 활성화/비활성화",
      "결제 설정 (Stripe 키 등)",
      "이메일 템플릿 커스터마이징",
    ],
    gradient: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
  },
  {
    id: 3,
    icon: "Rocket",
    title: "배포 & 런칭",
    description: "프로덕션 환경에 배포하고 SaaS를 런칭합니다.",
    details: [
      "Vercel 또는 다른 플랫폼에 배포",
      "도메인 연결 및 SSL 설정",
      "데이터베이스 마이그레이션",
      "모니터링 및 분석 설정",
    ],
    gradient: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-950/20",
  },
];
