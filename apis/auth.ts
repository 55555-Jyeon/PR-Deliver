import { API_URI } from "./api-instance";

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
