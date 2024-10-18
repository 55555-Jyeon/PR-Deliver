import { create } from "zustand";

type RepositoryState = {
    repositoryId: number | undefined;
    fullName: string | null;
    ownerLogin: string | null;
    webhookUrl: string | null;
    isActiveWebhook: boolean;

    setRepository: (repo: Omit<RepositoryState, "setRepository">) => void;
    toggleWebhookStatus: () => void;
};

export const useRepositoryStore = create<RepositoryState>((set) => ({
    repositoryId: undefined,
    fullName: null,
    ownerLogin: null,
    webhookUrl: null,
    isActiveWebhook: false,

    setRepository: (repo) =>
        set({
            repositoryId: repo.repositoryId,
            fullName: repo.fullName,
            ownerLogin: repo.ownerLogin,
            webhookUrl: repo.webhookUrl,
            isActiveWebhook: repo.isActiveWebhook,
        }),
    toggleWebhookStatus: () =>
        set((state) => ({
            isActiveWebhook: !state.isActiveWebhook,
        })),
}));
