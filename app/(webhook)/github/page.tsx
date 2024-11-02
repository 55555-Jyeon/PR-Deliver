"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import DeliverButton from "@/components/common/button";
import StepTemplate from "@/components/common/step-template";
import PageDescription from "@/components/layout/tab/page-desc";
import { GitHubWebHook } from "@/constants/steps/github";
import { useClipboard } from "@/hook/useClipboard";
import { useRepository } from "@/hook/useRepository";
import WebhookListContent from "./_component/webhook-list-content";
import WebhookListToggle from "./_component/webhook-list-toggle";

const RegisterGitHub = () => {
    const router = useRouter();
    const { repoInfo, isLoading } = useRepository();
    const { copyId, copyToClipboard } = useClipboard();
    const [isHookList, setIsHookList] = useState(true);

    const handleHookList = () => {
        setIsHookList(!isHookList);
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="size-full flex-center flex-col">
            <PageDescription
                icon="/light/icons/webhook.svg"
                title="웹훅 등록하기"
                content="웹훅 등록 방법 안내"
            />
            <div className="w-[1280px] mt-12">
                <WebhookListToggle
                    isOpen={isHookList}
                    onClick={handleHookList}
                />
                {isHookList && repoInfo && (
                    <WebhookListContent
                        repoInfo={repoInfo}
                        copyId={copyId}
                        copyToClipboard={copyToClipboard}
                    />
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
                    isModal={false}
                />
            </div>
        </div>
    );
};
export default RegisterGitHub;
