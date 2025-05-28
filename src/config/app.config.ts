export const AppConfig = {
  appName: "올인원 SaaS",

  // 인증 관련 설정
  auth: {
    enabled: true,
    providers: {
      credentials: true, // 이메일/비밀번호 로그인
      google: true, // 구글 소셜 로그인
      naver: true, // 네이버 소셜 로그인
    },
    requireEmailVerification: true,
    passwordMinLength: 8,
    sessionMaxAge: 30 * 24 * 60 * 60, // 30일
  },

  // 결제 관련 설정
  payment: {
    enabled: true,
    provider: "toss", // stripe, toss 등
    currency: "KRW",
    plans: {
      free: {
        name: "무료",
        price: 0,
        features: ["기본 기능", "1GB 저장공간"],
      },
      test: { name: "test", price: 1000, features: ["테스트"] },
      pro: {
        name: "프로",
        price: 9900,
        features: ["모든 기능", "10GB 저장공간", "우선 지원"],
      },
      enterprise: {
        name: "엔터프라이즈",
        price: 29900,
        features: ["모든 기능", "무제한 저장공간", "전담 지원", "API 액세스"],
      },
    },
  },

  // 기타 설정
  enableAIChatbot: true,
  enableI18n: true,
  supportLanguages: ["ko", "en"],
  defaultLanguage: "ko",
  // 향후 플랜, 요금제, 관리자 연락처 등도 추가 가능
};
