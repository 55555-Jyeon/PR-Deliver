"use client";

import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { UserDashboardOptionsType } from "@/constants/type";
import { USER_DASHBOARD_OPTIONS } from "@/constants/user/main-dashboard";
import { getSessionStorageObject } from "@/utils/storage";
import { UserInfoType } from "./type";

const UserDashboard = () => {
    const router = useRouter();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const authToken = Cookies.get("auth_token");
    const userInfo = getSessionStorageObject("userInfo") as UserInfoType;
    useEffect(() => {
        if (!authToken || !userInfo) {
            // 인증 정보가 없을 경우 메인 페이지로 리다이렉트
            router.push("/");
        }
    }, []);

    const handleOptionClick = (option: UserDashboardOptionsType) => {
        if (typeof option.url === "function" && userInfo.memberId) {
            router.push(option.url(String(userInfo.memberId)));
        } else if (typeof option.url === "string") {
            router.push(option.url);
        }
    };

    return (
        <div
            className="absolute w-full flex-center flex-col"
            style={{ height: "calc(100vh - 180px)" }}
        >
            <div className="flex-center flex-row">
                {USER_DASHBOARD_OPTIONS.map((option, index) => (
                    <div
                        key={option.title}
                        onClick={() => handleOptionClick(option)}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className={`w-[244px] h-[300px] flex-center flex-col mr-[100px] border border-GREY-20 rounded-2xl cursor-pointer transition-all duration-300 ${
                            hoveredIndex === index
                                ? "border-BRAND-50 shadow-[4px_4px_10px_rgba(128,90,213,0.2)]"
                                : ""
                        }`}
                    >
                        <Image
                            width={128}
                            height={128}
                            src={option.icon}
                            alt={option.title}
                        />
                        <h1 className="text-lg font-bold mt-9 mb-[14px]">
                            {option.title}
                        </h1>
                        <div className="relative flex-center">
                            <p
                                className={`text-sm transition-opacity duration-300 ${
                                    hoveredIndex === index
                                        ? "opacity-0"
                                        : "opacity-100"
                                }`}
                            >
                                {option.subText}
                            </p>
                            <Image
                                width={36}
                                height={36}
                                src="/icons/next-arrow.svg"
                                alt="go to selected page"
                                className={`absolute transition-opacity duration-300 mt-4 ${
                                    hoveredIndex === index
                                        ? "opacity-100"
                                        : "opacity-0"
                                }`}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default UserDashboard;
