import { ApiInstance } from "./api-instance";

export type PostFetchMessengerProps = {
    repositoryId: number | undefined;
    messengerType: string | null;
    webhookUrl: string | null;
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

export const getFetchEnc = async (token: string) => {
    const response = await ApiInstance({
        endPoint: `messengers/applies?encryptedWebhookUrl=${token}`,
        method: "GET",
    });

    if (!response) return;

    const data = await response.json();

    return data;
};
