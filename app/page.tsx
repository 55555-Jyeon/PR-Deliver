"use client";

import { useEffect, useState } from "react";
import AuthLoginButton from "./_components/auth-login-button";
import MainDescription from "./_components/description";
import UserDashboard from "./_components/user-dashboard";
import Cookies from "js-cookie";
import { useUserStore } from "@/libs/zustand/user";
import { getUserInfo } from "@/apis/auth";

export default function Home() {
    const [token, setToken] = useState<string | undefined>("");
    const { login, setUser, setUserId } = useUserStore();

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const authToken = Cookies.get("auth_token");
                setToken(authToken);

                if (authToken && !login) {
                    const userInfo = await getUserInfo();
                    setUser(userInfo.data.memberId, userInfo.data.login);
                    setUserId(userInfo.data.login);
                }
            } catch (error) {
                console.error("Failed to fetch user info:", error);
            }
        };

        fetchUserInfo();
    }, [login]);

    return (
        <main
            className="absolute w-full flex-center flex-col"
            style={{ height: `calc(100vh - 180px)` }}
        >
            {token && login ? (
                <UserDashboard userId={login} />
            ) : (
                <>
                    <MainDescription />
                    <AuthLoginButton />
                </>
            )}
        </main>
    );
}
