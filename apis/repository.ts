import { ApiInstance } from "./api-instance";

export const postFetchRepository = async (fullName: string) => {
    const response = await ApiInstance({
        endPoint: `repositories?fullName=${fullName}`,
        method: "POST",
    });

    return response;
};
