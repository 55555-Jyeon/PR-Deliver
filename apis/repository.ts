import { ApiInstance } from "./api-instance";

export const postFetchRepository = async (fullName: string) => {
    const response = await ApiInstance({
        endPoint: `repositories?fullName=${fullName}`,
        method: "POST",
    });

    return response;
};

export const getFetchRepository = async (ownerLogin: string) => {
    const response = await ApiInstance({
        endPoint: `repositories?ownerLogin=${ownerLogin}`,
        method: "GET",
    });

    return response?.json();
};
