import { UserInfoType } from "@/type/user";
import { API_URI, ApiInstance } from "./api-instance";
import { userStore } from "@/libs/zustand/user";

export const postFetchAuth = async (code: string) => {
    const response = await fetch(`${API_URI}/oauth2/success?code=${code}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    });
    return response;
};

export const getUserInfo = async (): Promise<UserInfoType> => {
    const response = await ApiInstance({
        endPoint: "members/me",
        method: "GET",
    });

    if (!response) {
        throw new Error(
            "이런! 로그인한 회원의 정보를 가져오는데 실패했어요...🥹"
        );
    }

    const data = await response.json();
    const { userId, login } = data;
    userStore.getState().setUser(userId, login);
    console.log("userId", userId); // 안 찍힘

    return data as UserInfoType;
};
