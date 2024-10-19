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

export const postFetchEnc = async (token: string | null) => {
    if (!token) {
        throw new Error("URL이 없습니다.");
    }

    const response = await ApiInstance({
        endPoint: `messengers/applies?encryptedWebhookUrl=${token}`,
        method: "POST",
    });

    if (!response) {
        throw new Error("메신저 활성화에 실패했습니다.");
    }

    return response;
};
