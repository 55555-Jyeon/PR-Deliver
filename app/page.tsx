"use client";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getSessionStorageObject } from "@/utils/storage";
import AuthLoginButton from "./_components/auth-login-button";
import MainDescription from "./_components/description";
import { UserInfoType } from "./user-dashboard/type";

export default function Home() {
    const router = useRouter();
    const [token, setToken] = useState<string | undefined>("");

    useEffect(() => {
        const userInfo = getSessionStorageObject("userInfo") as UserInfoType;
        const fetchUserInfo = async () => {
            try {
                const authToken = Cookies.get("auth_token");
                setToken(authToken);

                if (token && userInfo) {
                    router.push("/user-dashboard");
                } else {
                    router.push("/");
                }
            } catch {
                throw new Error("Failed to fetch user info");
            }
        };
        fetchUserInfo();
    }, []);

    return (
        <main
            className="absolute w-full flex-center flex-col"
            style={{ height: "calc(100vh - 180px)" }}
        >
            <>
                <MainDescription />
                <AuthLoginButton />
            </>
        </main>
    );
}
