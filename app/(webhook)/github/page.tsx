"use client";

import DeliverButton from "@/components/common/button";
import PageDescription from "@/components/layout/tab/page-desc";
import StepTemplate from "@/components/common/step-template";
import { GitHubWebHook } from "@/constants/steps/github";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getMyRepositoryList } from "@/apis/repository";
import { MyRepositoryListType } from "@/type/user";

const RegisterGitHub = () => {
    const router = useRouter();

    const [repoInfo, setRepoInfo] = useState<MyRepositoryListType[]>([]);
    const [copyId, setCopyId] = useState<number | null>(null);

    useEffect(() => {
        const fetchRepository = async () => {
            const response = await getMyRepositoryList("ijimlnosk");
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

    return (
        <div className="size-full flex-center flex-col">
            <PageDescription
                icon="/light/icons/webhook.svg"
                title="웹훅 등록하기"
                content="웹훅 등록 방법 안내"
            />
            <div>
                {repoInfo.map((item) => {
                    const fullWebhookUrl = ` http://ec2-3-36-51-88.ap-northeast-2.compute.amazonaws.com:8080/
                                ${item.webhookUrl}`;
                    return (
                        <div key={item.repositoryId}>
                            <div>{item.fullName}</div>
                            <div className="flex-center">
                                <p>웹훅 URI : </p>
                                <p className="ml-2">{fullWebhookUrl}</p>
                                <button
                                    onClick={() =>
                                        copyToClipboard(
                                            fullWebhookUrl,
                                            item.repositoryId
                                        )
                                    }
                                    className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                                >
                                    {copyId === item.repositoryId
                                        ? "복사됨"
                                        : "복사"}
                                </button>
                            </div>
                        </div>
                    );
                })}
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
                        router.push("/messenger");
                    }}
                    label="완료했어요"
                />
            </div>
        </div>
    );
};
export default RegisterGitHub;
