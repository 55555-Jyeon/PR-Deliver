"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const API_URI = process.env.NEXT_PUBLIC_API_URL;

const GitHubCallbackPage = () => {
    const router = useRouter;
    const searchParams = useSearchParams();

    useEffect(() => {
        const code = searchParams.get("code");

        if (code) {
            handleGitHubCallback(code);
        }
    }, [searchParams]);

    const handleGitHubCallback = async (code: string) => {
        try {
            const response = await fetch(`${API_URI}/oauth2/success`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ code }),
                credentials: "include",
            });

            if (!response.ok) {
                throw new Error("토큰 요청 실패");
            }

            const data = await response.json();

            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <div>로그인 처리 중</div>
        </div>
    );
};
export default GitHubCallbackPage;
