"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { getUserInfo, postFetchAuth } from "@/apis/auth";
import { useUserStore } from "@/libs/zustand/user";

export default function OAuthCallback() {
    const router = useRouter();
    const { setUser } = useUserStore();

    useEffect(() => {
        const handleCallback = async () => {
            const urlParams = new URLSearchParams(window.location.search);
            const code = urlParams.get("code");

            if (code) {
                try {
                    const response = await postFetchAuth(code);
                    if (response) {
                        if (!response.ok) {
                            throw new Error("Failed to get token");
                        }
                        const data = await response.json();
                        if (data.accessToken) {
                            Cookies.set("auth_token", data.accessToken, {
                                expires: 7,
                            });
                            const userInfo = await getUserInfo();
                            if (userInfo && userInfo.data) {
                                setUser(
                                    userInfo.data.memberId,
                                    userInfo.data.login
                                );
                                console.log("userInfo", userInfo);
                            }
                        }
                    }

                    router.push("/");
                } catch (error) {
                    console.error("Error during token exchange:", error);
                }
            }
        };

        handleCallback();
    }, [router]);

    return <div>처리 중...</div>;
}
