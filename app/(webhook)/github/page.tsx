"use client";

import DeliverButton from "@/components/common/button";
import PageDescription from "@/components/layout/tab/page-desc";
import StepTemplate from "@/components/common/step-template";
import { GitHubWebHook } from "@/constants/steps/github";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getMyRepositoryList } from "@/apis/repository";
import { MyRepositoryListType } from "@/type/user";
import WebhookList from "./_component/webhook-list";
import Image from "next/image";
import { userStore, useUserStore } from "@/libs/zustand/user";

const RegisterGitHub = () => {
    const router = useRouter();

    const [repoInfo, setRepoInfo] = useState<MyRepositoryListType[]>([]);
    const [copyId, setCopyId] = useState<number | null>(null);
    const [isHookList, setIsHookList] = useState(true);
    const { login } = useUserStore();

    useEffect(() => {
        const fetchRepository = async () => {
            if (!login) {
                throw new Error("유저정보를 받아오지 못했습니다.");
            }
            const response = await getMyRepositoryList(login);
            setRepoInfo(response.data);
        };
        fetchRepository();
    }, []);

    const copyToClipboard = (text: string, id: number) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopyId(id);
            setTimeout(() => setCopyId(null), 2000);
        });
    };

    const handleHookList = () => {
        setIsHookList(!isHookList);
    };

    return (
        <div className="size-full flex-center flex-col">
            <PageDescription
                icon="/light/icons/webhook.svg"
                title="웹훅 등록하기"
                content="웹훅 등록 방법 안내"
            />
            <div className="w-[1280px] mt-12">
                <div
                    className="w-[130px] h-[44px] font-semibold text-[16px] bg-SYSTEM-black text-GREY-10 rounded-lg flex-center cursor-pointer"
                    onClick={handleHookList}
                >
                    <p className="pr-2">웹훅 리스트</p>
                    {isHookList ? (
                        <Image
                            src={"/light/icons/up-arrow.svg"}
                            width={20}
                            height={20}
                            alt="UP"
                            className="transform scale-y-[-1]"
                        />
                    ) : (
                        <Image
                            src={"/light/icons/up-arrow.svg"}
                            width={20}
                            height={20}
                            alt="UP"
                        />
                    )}
                </div>

                {isHookList ? (
                    <div></div>
                ) : (
                    <div className="w-full flex justify-start">
                        {repoInfo.map((item) => {
                            const fullWebhookUrl = `${process.env.NEXT_PUBLIC_API_URL}/${item.webhookUrl}`;
                            return (
                                <WebhookList
                                    key={item.repositoryId}
                                    item={item}
                                    fullWebhookUrl={fullWebhookUrl}
                                    copyId={copyId}
                                    copyToClipboard={copyToClipboard}
                                />
                            );
                        })}
                    </div>
                )}
            </div>

            <div className="relative w-full h-max flex-center flex-col mb-[160px]">
                {GitHubWebHook.map((step, index) => (
                    <StepTemplate
                        key={step.stepDesc}
                        index={index}
                        stepDesc={step.stepDesc}
                        imageSrc={step.imageSrc}
                        imageHeight={step.imageHeight}
                        imageDesc={step.imageDesc}
                    />
                ))}
                <DeliverButton
                    length="smaller"
                    onClick={() => {
                        router.push("/messengers");
                    }}
                    label="완료했어요"
                />
            </div>
        </div>
    );
};
export default RegisterGitHub;
