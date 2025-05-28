// emails/WelcomeEmail.tsx
import { Html } from "@react-email/components";

interface WelcomeEmailProps {
  userName: string;
}

export default function WelcomeEmail({ userName }: WelcomeEmailProps) {
  return (
    <Html>
      <h1>안녕하세요, {userName}님!</h1>
      <p>회원가입을 환영합니다.</p>
      <p>지금 바로 로그인해서 서비스를 이용해보세요.</p>
    </Html>
  );
}
