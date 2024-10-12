export type ApiInstanceProps = {
    endPoint: string;
    method: "GET" | "POST" | "PATCH" | "DELETE" | "PUT";
    body?: unknown;
};
