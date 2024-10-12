import { ApiInstance } from "./api-instance";

export type PostFetchMessengerProps = {
    repositoryId: number;
    messengerType: string;
    webhookUrl: string;
};

export const postFetchMessenger = async ({
    repositoryId,
    messengerType,
    webhookUrl,
}: PostFetchMessengerProps) => {
    const response = await ApiInstance({
        endPoint: "messengers",
        method: "POST",
        body: {
            repositoryId,
            messengerType,
            webhookUrl,
        },
    });
    return response?.json();
};
