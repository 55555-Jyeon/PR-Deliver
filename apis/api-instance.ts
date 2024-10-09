import Cookies from "js-cookie";
import { ApiInstanceProps } from "./type";

export const API_URI = process.env.NEXT_PUBLIC_API_URL;

export const ApiInstance = async ({ endPoint, method }: ApiInstanceProps) => {
    const token = Cookies.get("token");
    if (token) {
        const response = await fetch(`${API_URI}/${endPoint}`, {
            method: method,
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
            credentials: "include",
        });

        return response;
    }
};
