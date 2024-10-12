import { MyRepositoryListType } from "@/type/user";
import { ApiInstance } from "./api-instance";
import { RepositoryData } from "./type";

export const postFetchRepository = async (fullName: string) => {
    const response = await ApiInstance({
        endPoint: `repositories?fullName=${fullName}`,
        method: "POST",
    });

    return response;
};

/**
 * @getMyRepositoryList 특정 사용자의 레포지토리 목록을 가져오는 함수
 *
 * @param {string} owner - 레포지토리 소유자의 github ID
 * @returns {Promise<MyRepositoryListType[]>} 해당 사용자의 레포지토리 목록 타입의 배열을 포함한 Promise를 반환
 * @throws {Error} 유저의 레포지토리 목록을 가져오지 못할 경우 에러를 발생
 */
export const getMyRepositoryList = async (
    owner: string
): Promise<RepositoryData> => {
    const response = await ApiInstance({
        endPoint: `repositories?ownerLogin=${owner}`,
        method: "GET",
    });

    if (!response) {
        throw new Error(
            "이런! 유저의 repository 목록을 가져오는데 실패했어요...🥹"
        );
    }

    const data = await response.json();
    return data as RepositoryData;
};
