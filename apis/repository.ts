import { MyRepositoryListType } from "@/type/user";
import { ApiInstance } from "./api-instance";

export const postFetchRepository = async (fullName: string) => {
    const response = await ApiInstance({
        endPoint: `repositories?fullName=${fullName}`,
        method: "POST",
    });

    return response;
};

export const getMyRepositoryList = async (
    owner: string
): Promise<MyRepositoryListType[]> => {
    const response = await ApiInstance({
        endPoint: `/repositories?ownerLogin=${owner}`,
        method: "GET",
    });

    if (!response) {
        throw new Error(
            "이런! 유저의 repository 목록을 가져오는데 실패했어요...🥹"
        );
    }

    const data = await response.json();
    return data as MyRepositoryListType[];
};
