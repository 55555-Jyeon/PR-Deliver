import StepTemplate from "@/components/common/step-template";
import { GitHubWebHook } from "@/constants/steps/github";

const Test = () => {
  return (
    <div className="relative flex-center flex-col w-full h-max">
      {GitHubWebHook.map((step, index) => (
        <StepTemplate
          index={index}
          stepDesc={step.stepDesc}
          imageSrc={step.imageSrc}
          imageHeight={step.imageHeight}
          imageDesc={step.imageDesc}
        />
      ))}
    </div>
  );
};
export default Test;
