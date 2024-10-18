"use client";

import { ShortenText } from "@/utils/shorten-text";
import { deleteFetchRepository, getMyRepositoryList } from "@/apis/repository";
import { useUserStore } from "@/libs/zustand/user";
import { useEffect, useState } from "react";
import { RepositoryData } from "@/apis/type";

const FetchRepositoryList = () => {
    const [repositories, setRepositories] = useState<RepositoryData>();
    const { login } = useUserStore();

    useEffect(() => {
        const fetchMyRepositories = async () => {
            if (login) {
                try {
                    const data = await getMyRepositoryList(login);
                    console.log(data);
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

    const handleDeleteRepository = async () => {
        await deleteFetchRepository(27);
    };

    if (!repositories) return <div>데이터가 없습니다</div>;

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
                    <button onClick={handleDeleteRepository}>삭제</button>
                </li>
            ))}
        </>
    );
};

export default FetchRepositoryList;
