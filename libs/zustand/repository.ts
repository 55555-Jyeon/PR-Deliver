import { create } from "zustand";

type RepositoryState = {
    repositoryId: number;
    fullName: string;
    ownerLogin: string;
    webHookUrl: string;
    isActiveWebhook: boolean;

    setRepository: (repo: Omit<RepositoryState, "setRepository">) => void;
    toggleWebhookStatus: () => void;
};

export const useRepositoryStore = create<RepositoryState>((set) => ({
    repositoryId: 0,
    fullName: "",
    ownerLogin: "",
    webHookUrl: "",
    isActiveWebhook: false,

    setRepository: (repo) =>
        set({
            repositoryId: repo.repositoryId,
            fullName: repo.fullName,
            ownerLogin: repo.ownerLogin,
            webHookUrl: repo.webHookUrl,
            isActiveWebhook: repo.isActiveWebhook,
        }),
    toggleWebhookStatus: () =>
        set((state) => ({
            isActiveWebhook: !state.isActiveWebhook,
        })),
}));
