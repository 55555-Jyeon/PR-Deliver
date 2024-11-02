import { useState, ChangeEvent } from "react";
import { postFetchEnc, postFetchMessenger } from "@/apis/messenger";
import { getSessionStorage } from "@/utils/storage";
import { useRouter } from "next/navigation";
import { MessengerRegistrationReturnType } from "./type";
import { FieldValues, useForm } from "react-hook-form";
import { MessengerFormFields } from "@/type/messenger";

/**
 * @function useMessengerRegistration 메신저 등록 폼을 관리하는 커스텀 훅으로 폼 제출, 데이터 가져오기, 페이지 이동을 처리
 *
 * @returns {MessengerRegistrationReturnType}
 * - control: 폼 입력 제어를 위한 control 객체
 * - handleSubmit: 폼 제출을 처리하는 함수
 * - register: 폼 필드 등록을 위한 register 함수
 * - onSubmit: 폼 제출 시 호출되는 비동기 함수
 * - selectedMessengerType: 선택된 메신저 타입을 나타내는 문자열
 * - onMessengerTypeChange: 메신저 타입 변경 시 호출되는 함수
 */
export const useMessengerRegistration = (): MessengerRegistrationReturnType => {
    const { control, handleSubmit, register } = useForm<MessengerFormFields>();
    const [selectedMessengerType, setSelectedMessengerType] = useState("");
    const [isMessengerSuccess, setIsMessengerSuccess] = useState(false);
    const repositoryId = Number(getSessionStorage("repositoryId"));

    /**
     * @function onMessengerTypeChange 메신저 타입 선택이 변경될 때 호출
     * @param {ChangeEvent<HTMLInputElement>} e 선택된 메신저 타입 이벤트 객체
     */
    const onMessengerTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSelectedMessengerType(e.target.value);
    };

    /**
     * @function onSubmit 폼 제출 시 호출되며 데이터 전송 후 성공 시 메인 페이지로 이동
     * @param {FieldValues} data 제출된 폼 데이터
     */
    const onSubmit = async (data: FieldValues) => {
        const { messengerType, webhookUrl } = data;
        const response = await postFetchMessenger({
            repositoryId,
            messengerType,
            webhookUrl,
        });
        if (response.status === "Success") {
            setIsMessengerSuccess(true);
        } else {
            setIsMessengerSuccess(false);
        }
    };

    return {
        control,
        handleSubmit,
        register,
        onSubmit,
        selectedMessengerType,
        onMessengerTypeChange,
        isMessengerSuccess,
        setIsMessengerSuccess,
    };
};
