"use client";

import DeliverButton from "@/components/common/button";
import StepTemplate from "@/components/common/step-template";
import { GitHubWebHook } from "@/constants/steps/github";

const Test = () => {
  return (
    <>
      <div className="relative flex-center flex-col w-full h-max">
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
      </div>
      <DeliverButton
        length="smaller"
        onClick={() => {
          alert("clicked!");
        }}
        label="register"
      />
    </>
  );
};
export default Test;
