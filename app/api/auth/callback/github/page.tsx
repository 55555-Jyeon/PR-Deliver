"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { getUserInfo, postFetchAuth } from "@/apis/auth";
import { setSessionStorageObject } from "@/utils/storage";

export default function OAuthCallback() {
    const router = useRouter();

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
                                setSessionStorageObject(
                                    "userInfo",
                                    userInfo.data
                                );
                                router.push("/user-dashboard");
                            }
                        }
                    }
                } catch (error) {
                    console.error("Error during token exchange:", error);
                }
            }
        };

        handleCallback();
    }, []);

    return <div>처리 중...</div>;
}
