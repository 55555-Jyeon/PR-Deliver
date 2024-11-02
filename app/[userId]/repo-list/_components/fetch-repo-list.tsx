"use client";

import { useEffect, useState } from "react";
import { RepositoryData } from "@/apis/type";
import { deleteFetchRepository, getMyRepositoryList } from "@/apis/repository";
import { getSessionStorageObject } from "@/utils/storage";
import { ShortenText } from "@/utils/shorten-text";
import { UserInfoType } from "@/app/user-dashboard/type";
import EmptyRepoList from "./empty-repo-list";

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

    // const handleDelete = async () => {
    //     await deleteFetchRepository(55);
    // };

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
                    {/* <button onClick={handleDelete}>삭제</button> */}
                </li>
            ))}
        </ul>
    );
};

export default FetchRepositoryList;
