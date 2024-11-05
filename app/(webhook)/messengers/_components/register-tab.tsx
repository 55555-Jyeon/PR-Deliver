"use client";

import { useRouter } from "next/navigation";
import DeliverButton from "@/components/common/button";
import DeliverInput from "@/components/common/input";
import DeliverModal from "@/components/common/modal";
import { useMessengerRegistration } from "@/hook/use-messenger-registration";
import MessengerSelector from "./register/select-container";

const RegisterTab = () => {
    const router = useRouter();
    const {
        control,
        handleSubmit,
        register,
        onSubmit,
        selectedMessengerType,
        onMessengerTypeChange,
        isMessengerSuccess,
        setIsMessengerSuccess,
    } = useMessengerRegistration();

    const handleAlert = () => {
        alert("등록한 레포지토리 삭제 후 처음부터 다시 시도해주세요.");
    };

    return (
        <>
            {isMessengerSuccess && (
                <DeliverModal
                    isSuccess={true}
                    isOpen={isMessengerSuccess}
                    onClose={() => setIsMessengerSuccess(false)}
                    onConfirm={() => {
                        router.push("/user-dashborad");
                    }}
                    onReturn={handleAlert}
                    title="메신저 등록 완료"
                    content="메신저 등록이 완료되었습니다."
                    content2="메세지가 도착했는지 확인해주세요."
                    buttonText={"메시지가 왔어요"}
                    returnButtonText="다시 보내주세요"
                />
            )}
            <div className="min-h-[648px] flex-justify">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <MessengerSelector
                        register={register}
                        selectedMessengerType={selectedMessengerType}
                        onMessengerTypeChange={onMessengerTypeChange}
                    />
                    <div className="mb-10">
                        <DeliverInput
                            name="webhookUrl"
                            control={control}
                            title="웹훅 URL 입력"
                            placeholder="ex) https://discord.com/api/webhooks/12745805631387/s-AC"
                        />
                    </div>
                    <DeliverButton
                        label="등록하기"
                        length="full"
                        onClick={handleSubmit(onSubmit)}
                        isModal={false}
                    />
                </form>
            </div>
        </>
    );
};
export default RegisterTab;
