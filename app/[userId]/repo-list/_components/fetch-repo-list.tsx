"use client";

import { ShortenText } from "@/utils/shorten-text";
import { getMyRepositoryList } from "@/apis/repository";
import { useUserStore } from "@/libs/zustand/user";
import { useEffect, useState } from "react";
import { RepositoryData } from "@/apis/type";
import EmptyRepoList from "./empty-repo-list";

const FetchRepositoryList = () => {
    const [repositories, setRepositories] = useState<RepositoryData>();
    const { login } = useUserStore();

    /*     useEffect(() => {
        const fetchMyRepositories = async () => {
            if (login) {
                try {
                    const data = await getMyRepositoryList(login);
                    setRepositories(data);
                } catch {
                    throw new Error(
                        "회원의 repository 목록을 가져오는데 실패했어요...🫠"
                    );
                }
            }
        };
        fetchMyRepositories();
    }, []); */

    const sampleData = [];

    if (!repositories) return <EmptyRepoList />;
    return (
        <ul className="grid grid-cols-4 grid-rows-6 gap-4">
            {repositories.data.map((repo, index) => (
                <li
                    key={index}
                    className="w-[308px] h-[94px] rounded-[10px] p-5 bg-SYSTEM-white border border-GREY-20 flex flex-col items-start justify-between"
                >
                    <span className="w-fit px-2.5 py-[6px] rounded-full text-[14px] font-semibold text-GREY-90 bg-GREY-10">
                        {repo.ownerLogin}
                    </span>
                    <p className="text-[13px] font-normal text-GREY-80">
                        {ShortenText(repo.fullName, 50)}
                    </p>
                </li>
            ))}
        </ul>
    );
};

export default FetchRepositoryList;
