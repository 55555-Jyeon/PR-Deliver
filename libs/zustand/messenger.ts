import { create } from "zustand";

type messengerState = {
    messengerWebhookUrl: string | null;
    setWebhookUrl: (webhookUrl: string) => void;
};

export const useMessengerStore = create<messengerState>((set) => ({
    messengerWebhookUrl: null,
    setWebhookUrl: (messengerWebhookUrl: string) =>
        set({ messengerWebhookUrl }),
}));
