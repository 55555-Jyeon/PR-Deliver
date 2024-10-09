"use client";

import DeliverButton from "@/components/common/button";
import DeliverInput from "@/components/common/input";
import { MESSENGER_TYPES } from "@/constants/register/messenger-type";
import { useController, useForm } from "react-hook-form";

const RegisterTab = () => {
  const { control, handleSubmit, register } = useForm();

  // Messenger type controller
  const { field } = useController({
    name: "messengerType",
    control,
    rules: { required: true },
    defaultValue: "", // 기본값을 설정합니다.
  });

  const onSubmit = () => {
    console.log("data");
  };

  return (
    <div className="min-h-[648px] flex-justify">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* select messenger type */}
        <div className="mt-[100px] mb-7">
          <h3 className="w-full mb-3 font-medium text-SYSTEM-black text-sm">
            메신저 타입 선택
          </h3>
          <div className="flex items-center space-x-6">
            {MESSENGER_TYPES.map((type) => (
              <label key={type.value} className="flex items-center">
                <input
                  type="radio"
                  value={type.value}
                  {...register("messengerType", { required: true })}
                  className={`mr-2 border ${
                    field.value === type.value
                      ? "border-BRAND-50 border-[6px]"
                      : "border-GREY-20"
                  }`}
                  style={{
                    appearance: "none", // 기본 스타일 숨기기
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                  }}
                  onChange={(e) => field.onChange(e.target.value)}
                />
                <p className="text-[13px] font-medium">{type.label}</p>
              </label>
            ))}
          </div>
        </div>
        {/* webhook url */}
        <div className="mb-10">
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
