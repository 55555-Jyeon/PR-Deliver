import AuthLoginButton from "./_components/auth-login-button";
import MainDescription from "./_components/description";
import UserDashboard from "./_components/user-dashboard";

export default function Home() {
  const isLoggedIn = true;

  return (
    <main
      className="absolute w-full flex-center flex-col"
      style={{ height: `calc(100vh - 180px)` }}
    >
      {isLoggedIn ? (
        <UserDashboard />
      ) : (
        <>
          <MainDescription />
          <AuthLoginButton />
        </>
      )}
    </main>
  );
}
