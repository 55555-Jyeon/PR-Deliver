import StepTemplate from "@/components/common/step-template";
import { MessengerWebHook } from "@/constants/steps/messagener";

const MethodTab = () => {
  return (
    <>
      {MessengerWebHook.map((step, index) => (
        <StepTemplate
          key={step.stepDesc}
          index={index}
          stepDesc={step.stepDesc}
          imageSrc={step.imageSrc}
          imageHeight={step.imageHeight}
          imageDesc={step.imageDesc}
        />
      ))}
    </>
  );
};
export default MethodTab;
