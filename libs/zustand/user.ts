import { createStore } from "zustand";

type UserState = {
    userId: number | undefined;
    login: string | null;
    setUser: (userId: number, login: string) => void;
    setUserId: (login: string) => void;
};

export const userStore = createStore<UserState>((set) => ({
    userId: undefined,
    login: null,
    setUser: (userId: number, login: string) => set({ userId, login }),
    setUserId: (login: string) => set({ login }),
}));

export const useUserStore = () => userStore.getState();
