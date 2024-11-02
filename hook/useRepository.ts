import { useEffect, useState } from "react";
import { getMyRepositoryList } from "@/apis/repository";
import { UserInfoType } from "@/app/user-dashboard/type";
import { MyRepositoryListType } from "@/type/user";
import { getSessionStorageObject } from "@/utils/storage";

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
    const [isLoading, setIsLoading] = useState(false);
    const userInfo = getSessionStorageObject("userInfo") as UserInfoType;

    useEffect(() => {
        const fetchRepository = async () => {
            if (!userInfo) {
                throw new Error("유저 정보를 받아오지 못했습니다.");
            }
            setIsLoading(true);
            try {
                const response = await getMyRepositoryList(userInfo?.login);
                setRepoInfo(response.data);
                setIsLoading(false);
            } catch (error) {
                throw new Error(
                    "레포지토리를 불러오는 중 오류가 발생했습니다."
                );
            }
        };
        fetchRepository();
    }, [userInfo?.login]);

    return { repoInfo, isLoading };
};
