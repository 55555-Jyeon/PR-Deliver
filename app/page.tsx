import AuthLoginButton from "./_components/auth-login-button";
import PageDescription from "./_components/description";

export default function Home() {
  return (
    <main
      className="absolute w-full flex-center flex-col"
      style={{ height: `calc(100vh - 180px)` }}
    >
      <PageDescription />
      <AuthLoginButton />
    </main>
  );
}
