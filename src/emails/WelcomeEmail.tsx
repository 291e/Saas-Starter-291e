// emails/WelcomeEmail.tsx
import { Html, Body, Container, Text } from "@react-email/components";

export default function WelcomeEmail({ userName }: { userName: string }) {
  return (
    <Html>
      <Body>
        <Container>
          <Text>
            안녕하세요, {userName}님! Saas Start Kit에 오신 것을 환영합니다 🎉
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
