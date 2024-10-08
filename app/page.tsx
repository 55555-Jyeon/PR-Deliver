"use client";

import { useEffect, useState } from "react";
import AuthLoginButton from "./_components/auth-login-button";
import MainDescription from "./_components/description";
import UserDashboard from "./_components/user-dashboard";
import Cookies from "js-cookie";

export default function Home() {
    const [token, setToken] = useState<string | undefined>("");

    useEffect(() => {
        setToken(Cookies.get("auth_token"));
    }, []);

    return (
        <main
            className="absolute w-full flex-center flex-col"
            style={{ height: `calc(100vh - 180px)` }}
        >
            {token ? (
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
