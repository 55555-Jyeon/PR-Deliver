import { getMyRepositoryList } from "@/apis/repository";
import { useUserStore } from "@/libs/zustand/user";
import { MyRepositoryListType } from "@/type/user";
import { useEffect, useState } from "react";

/**
 * My Repository 정보를 받아오는 커스텀 훅
 *
 * @returns {Object} 내 레포지토리 정보를 담은 객체
 * @property {MyRepositoryListType[]} repoInfo - 사용자의 레포지토리 정보 배열
 *
 * @throws {Error} 로그인 정보가 없는 경우 에러를 발생
 */

export const useRepository = () => {
    const [repoInfo, setRepoInfo] = useState<MyRepositoryListType[]>([]);
    const { login } = useUserStore();

    useEffect(() => {
        const fetchRepository = async () => {
            if (!login) {
                throw new Error("유저 정보를 받아오지 못했습니다.");
            }
            const response = await getMyRepositoryList(login);
            setRepoInfo(response.data);
        };
        fetchRepository();
    }, [login]);

    return { repoInfo };
};
