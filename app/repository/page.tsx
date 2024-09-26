"use client";

import CustomInput from "@/components/common/custom-input";
import TabLayout from "@/components/layout/tab/tab-layout";
import { useForm } from "react-hook-form";

const Repository = () => {
  const { control, handleSubmit } = useForm();

  const tabs = ["등록 방법", "레포지토리 등록"];

  const onSubmit = () => {
    console.log("data");
  };

  return (
    <div className="w-full h-full flex-center flex-col ">
      <TabLayout
        title="레포지토리 등록하기"
        icon="/light/icons/register.svg"
        content="레포지토리 등록 방법 안내"
        tabs={tabs}
      >
        <div>Tab One</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CustomInput
            name="owner"
            control={control}
            title="소유자 입력"
            placeholder="ex) ca1af"
          />
        </form>
      </TabLayout>
    </div>
  );
};

export default Repository;
