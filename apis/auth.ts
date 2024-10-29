import { UserInfoType } from "@/type/user";
import { API_URI, ApiInstance } from "./api-instance";
import { setSessionStorageObject } from "@/utils/storage";

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

/**
 * @function getUserInfo 현재 로그인한 사용자의 정보를 가져오는 함수
 * @returns {Promise<UserInfoType>} 사용자 정보 타입의 Promise를 반환
 * @throws {Error} 로그인한 회원의 정보를 가져오지 못할 경우 에러를 발생
 *
 * @example
 * async function fetchUser() {
 *     try {
 *         const userInfo = await getUserInfo();
 *     } catch {
 *         throw new Error("회원 정보를 가져오는데 실패했습니다.")
 *     }
 * }
 */
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

    return data as UserInfoType;
};
