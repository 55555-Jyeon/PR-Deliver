"use client";

import DeliverButton from "@/components/common/button";
import DeliverInput from "@/components/common/input";
import { useForm } from "react-hook-form";

const RegisterTab = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = () => {
    console.log("data");
  };

  return (
    <div className="min-h-[648px] flex-justify">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-[100px] mb-10">
          <DeliverInput
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
  );
};
export default RegisterTab;
