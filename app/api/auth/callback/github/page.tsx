"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const API_URI = process.env.NEXT_PUBLIC_API_URL;

export default function OAuthCallback() {
    const router = useRouter();

    useEffect(() => {
        const handleCallback = async () => {
            const urlParams = new URLSearchParams(window.location.search);
            const code = urlParams.get("code");

            if (code) {
                try {
                    const response = await fetch(
                        `${API_URI}/oauth2/success?code=${code}`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            credentials: "include",
                        }
                    );

                    if (!response.ok) {
                        throw new Error("Failed to get token");
                    }

                    const data = await response.json();

                    if (data.accessToken) {
                        Cookies.set("auth_token", data.accessToken, {
                            expires: 7,
                        });
                    }

                    router.push("/repository");
                } catch (error) {
                    console.error("Error during token exchange:", error);
                }
            }
        };

        handleCallback();
    }, [router]);

    return <div>처리 중...</div>;
}
