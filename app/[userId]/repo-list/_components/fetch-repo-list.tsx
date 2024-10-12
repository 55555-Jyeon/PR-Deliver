"use client";

import { ShortenText } from "@/utils/shorten-text";
import { getMyRepositoryList } from "@/apis/repository";
import { useUserStore } from "@/libs/zustand/user";
import { MyRepositoryListType } from "@/type/user";
import { useEffect, useState } from "react";

const FetchRepositoryList = () => {
    const [repositories, setRepositories] = useState<MyRepositoryListType[]>(
        []
    );
    const { login } = useUserStore();

    useEffect(() => {
        const fetchMyRepositories = async () => {
            if (login) {
                try {
                    const data = await getMyRepositoryList(login);
                    setRepositories(Array.isArray(data) ? data : []);
                } catch {
                    throw new Error(
                        "회원의 repository 목록을 가져오는데 실패했어요...🫠"
                    );
                }
            }
        };
        fetchMyRepositories();
    }, [login]);

    return (
        <>
            {repositories.map((repo, index) => (
                <li
                    key={index}
                    className="w-full h-[68px] flex-items bg-SYSTEM-white rounded-[12px] px-6 my-3 text-SYSTEM-black"
                >
                    <p className="flex-[3]">{ShortenText(repo.fullName, 50)}</p>
                    <p className="flex-[1.5]">{repo.ownerLogin}</p>
                    {/* <p className="flex-[1.5]">{repo.assignee}</p> */}
                </li>
            ))}
        </>
    );
};

export default FetchRepositoryList;
