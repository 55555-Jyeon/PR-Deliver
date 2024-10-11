import { createStore } from "zustand";

/**
 * 사용자 상태를 정의하는 타입
 * @typedef {Object} UserState
 * @property {number | undefined} userId - 사용자의 ID (로그인하지 않은 경우 undefined)
 * @property {string | null} login - 사용자의 로그인 이름 (로그인하지 않은 경우 null)
 * @property {Function} setUser - 사용자 ID와 로그인 이름을 설정하는 함수
 * @property {Function} setUserId - 로그인 이름을 설정하는 함수
 */
type UserState = {
    userId: number | undefined;
    login: string | null;
    setUser: (userId: number, login: string) => void;
    setUserId: (login: string) => void;
};

/**
 * 사용자 상태를 관리하는 zustand store
 * @returns {UserState} 사용자 상태와 상태 변경 메서드를 포함
 */
export const userStore = createStore<UserState>((set) => ({
    userId: undefined,
    login: null,
    setUser: (userId: number, login: string) => set({ userId, login }),
    setUserId: (login: string) => set({ login }),
}));

/**
 * 사용자 상태를 가져오는 훅
 * @returns {UserState} 현재 사용자 상태를 반환
 */
export const useUserStore = () => userStore.getState();
