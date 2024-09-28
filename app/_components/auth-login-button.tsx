"use client";

import Image from "next/image";
import { useState } from "react";

const AuthLoginButton = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        setIsLoading(true);

        try {
            const response = await fetch("");
            const data = await response.json();

            if (data.url) {
                window.location.href = data.url;
            } else {
                throw new Error("깃허브 OAuth URL 가져오기 실패");
            }
        } catch (error) {
            console.error("깃 허브 로그인 실패", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div
            onClick={handleLogin}
            className="w-[416px] h-[52px] bg-SYSTEM-black rounded-[10px] flex-center cursor-pointer"
        >
            <Image
                priority
                src={"/light/icons/github.svg"}
                width={24}
                height={24}
                alt="github login"
            />
            <p className="text-[14px] text-SYSTEM-white ml-2.5">
                {isLoading ? "로딩중..." : "깃허브로 로그인하기"}
            </p>
        </div>
    );
};
export default AuthLoginButton;
