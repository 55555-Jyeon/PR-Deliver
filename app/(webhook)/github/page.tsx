"use client";

import DeliverButton from "@/components/common/button";
import PageDescription from "@/components/layout/tab/page-desc";
import StepTemplate from "@/components/common/step-template";
import { GitHubWebHook } from "@/constants/steps/github";

const RegisterGitHub = () => {
  return (
    <div className="size-full flex-center flex-col">
      <PageDescription
        icon="/light/icons/webhook.svg"
        title="웹훅 등록하기"
        content="웹훅 등록하는 방법 안내"
      />
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
            alert("clicked!");
          }}
          label="register"
        />
      </div>
    </div>
  );
};
export default RegisterGitHub;
