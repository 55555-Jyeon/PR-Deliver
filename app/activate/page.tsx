"use client";

import { postFetchEnc } from "@/apis/messenger";
import DeliverButton from "@/components/common/button";
import DeliverModal from "@/components/common/modal";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ActivePage = () => {
    const router = useRouter();
    const urlParams = new URLSearchParams(window.location.search);
    const encryptedWebhookUrl = urlParams.get("encryptedWebhookUrl");

    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleMessengerActive = async () => {
        try {
            const response = await postFetchEnc(encryptedWebhookUrl);
            if (response.status === 200) {
                setIsSuccess(true);
            }
        } catch {
            setIsError(true);
        }
    };

    const handleSuccess = () => {
        setIsSuccess(false);
        router.push("/user-dashboard");
    };

    return (
        <div>
            {isSuccess && (
                <DeliverModal
                    isSuccess={true}
                    isOpen={isSuccess}
                    onClose={handleSuccess}
                    onConfirm={() => setIsSuccess(false)}
                    title="메신저 활성화에 성공했습니다."
                    content=""
                    buttonText="확인"
                />
            )}
            {isError && (
                <DeliverModal
                    isSuccess={false}
                    isOpen={isError}
                    onClose={() => setIsError(false)}
                    onConfirm={() => setIsError(false)}
                    title="메신저 활성화에 실패했습니다."
                    content=""
                    buttonText="확인"
                />
            )}
            <div className=" w-full h-[calc(100vh-180px)] flex-center flex-col">
                <Image
                    src={"/images/octo-cat.png"}
                    alt="logo"
                    width={300}
                    height={500}
                />
                <div className=" w-[1280px] flex-center mt-12">
                    <div className="flex-center w-full cursor-pointer ">
                        <DeliverButton
                            onClick={handleMessengerActive}
                            length="full"
                            label="메신저 활성화"
                            isModal={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ActivePage;
