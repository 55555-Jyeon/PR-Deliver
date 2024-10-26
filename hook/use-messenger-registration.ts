import { useState, ChangeEvent } from "react";
import { postFetchEnc, postFetchMessenger } from "@/apis/messenger";
import { getSessionStorage } from "@/utils/storage";
import { useRouter } from "next/navigation";
import { MessengerRegistrationReturnType } from "./type";
import { FieldValues, useForm } from "react-hook-form";
import { MessengerFormFields } from "@/type/messenger";

export const useMessengerRegistration = (): MessengerRegistrationReturnType => {
    const router = useRouter();
    const { control, handleSubmit, register } = useForm<MessengerFormFields>();
    const [selectedMessengerType, setSelectedMessengerType] = useState("");
    const repositoryId = Number(getSessionStorage("repositoryId"));

    const onMessengerTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSelectedMessengerType(e.target.value);
    };

    const onSubmit = async (data: FieldValues) => {
        const { messengerType, webhookUrl } = data;
        const response = await postFetchMessenger({
            repositoryId,
            messengerType,
            webhookUrl,
        });
        if (response.status === "Success") {
            const responseMessenger = await postFetchEnc(
                response.data.encryptedWebhookUrl
            );
            if (responseMessenger.status === 200) {
                alert(
                    "메신저 활성화에 성공했습니다. 메인 페이지로 이동합니다."
                );
                router.push("/");
            }
        }
    };

    return {
        control,
        handleSubmit,
        register,
        onSubmit,
        selectedMessengerType,
        onMessengerTypeChange,
    };
};
