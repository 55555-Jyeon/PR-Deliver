"use client";

import { ShortenText } from "@/utils/shorten-text";
import { deleteFetchRepository, getMyRepositoryList } from "@/apis/repository";
import { useEffect, useState } from "react";
import { RepositoryData } from "@/apis/type";
import { getSessionStorageObject } from "@/utils/storage";
import { UserInfoType } from "@/app/user-dashboard/type";

const FetchRepositoryList = () => {
    const [repositories, setRepositories] = useState<RepositoryData>();

    useEffect(() => {
        const userInfo = getSessionStorageObject("userInfo") as UserInfoType;

        const fetchMyRepositories = async () => {
            if (userInfo) {
                try {
                    const data = await getMyRepositoryList(userInfo.login);
                    setRepositories(data);
                } catch {
                    throw new Error(
                        "회원의 repository 목록을 가져오는데 실패했어요...🫠"
                    );
                }
            }
        };
        fetchMyRepositories();
    }, []);

    if (!repositories) return <div>데이터가 없습니다</div>;

    const handleDelete = async () => {
        await deleteFetchRepository(43);
    };

    return (
        <>
            {repositories.data.map((repo, index) => (
                <li
                    key={index}
                    className="w-full h-[68px] flex-items bg-SYSTEM-white rounded-[12px] px-6 my-3 text-SYSTEM-black"
                >
                    <p className="flex-[3]">{ShortenText(repo.fullName, 50)}</p>
                    <p className="flex-[1.5]">{repo.ownerLogin}</p>
                    {/* <p className="flex-[1.5]">{repo.assignee}</p> */}
                    <button onClick={handleDelete}>삭제</button>
                </li>
            ))}
        </>
    );
};

export default FetchRepositoryList;
