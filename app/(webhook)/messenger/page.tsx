"use client";

import DeliverButton from "@/components/common/button";
import CustomInput from "@/components/common/custom-input";
import StepTemplate from "@/components/common/step-template";
import TabLayout from "@/components/layout/tab/tab-layout";
import { MessengerWebHook } from "@/constants/steps/messagener";
import { useForm } from "react-hook-form";

const RegisterMessanger = () => {
  const tabs = ["등록 방법", "메신저 등록"];
  const { control, handleSubmit } = useForm();

  const onSubmit = () => {
    console.log("data");
  };

  return (
    <div className="size-full flex-center flex-col">
      <TabLayout
        title="메신저 웹훅 등록하기"
        icon="/light/icons/register.svg"
        content="메신저 웹훅 등록 방법 안내"
        tabs={tabs}
      >
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
        <div className="min-h-[648px] flex-justify">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-[100px] mb-10">
              <CustomInput
                name="messenger webhook url"
                control={control}
                title="웹훅 URL 입력"
                placeholder="ex) https://discord.com/api/webhooks/12745805631387/s-AC"
              />
            </div>
            <DeliverButton
              label="등록하기"
              length="full"
              onClick={() => alert("웹훅 등록 버튼 클릭")}
            />
          </form>
        </div>
      </TabLayout>
    </div>
  );
};
export default RegisterMessanger;
