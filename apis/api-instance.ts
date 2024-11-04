import Cookies from "js-cookie";
import { ApiInstanceProps } from "./type";

export const API_URI = process.env.NEXT_PUBLIC_API_URL;

export const ApiInstance = async ({
    endPoint,
    method,
    body,
}: ApiInstanceProps) => {
    const token = Cookies.get("auth_token");
    if (token) {
        const options: RequestInit = {
            method: method,
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
            credentials: "include",
        };

        if (
            body &&
            (method === "POST" || method === "PUT" || method === "PATCH")
        ) {
            options.body = JSON.stringify(body);
        }

        const response = await fetch(`${API_URI}/${endPoint}`, options);

        return response;
    }
};
