"use client";
import Image from "next/image";

const API_URI = process.env.NEXT_PUBLIC_API_URL;

const AuthLoginButton = () => {
    const handleClick = () => {
        window.location.href = `${API_URI}/oauth2/authorization/github`;
    };

    return (
        <div
            onClick={handleClick}
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
                깃허브로 로그인하기
            </p>
        </div>
    );
};
export default AuthLoginButton;
