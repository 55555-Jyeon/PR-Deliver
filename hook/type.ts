/* eslint-disable no-unused-vars */

import { Control, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { MessengerFormFields } from "@/type/messenger";

export type MessengerRegistrationReturnType = {
    /**
     * @TODO
     * control: Control<any> 타입에서 any 대신 다른 것 적용 예정입니다.
     * 현재 해당 타입을 다른 것으로 주면 연쇄적으로 에러가 발생해 우선 any로 작성했습니다.
     */
    control: Control<any>;
    handleSubmit: UseFormHandleSubmit<MessengerFormFields>;
    register: UseFormRegister<MessengerFormFields>;
    onSubmit: (data: MessengerFormFields) => Promise<void>;
    selectedMessengerType: string;
    onMessengerTypeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isMessengerSuccess: boolean;
    setIsMessengerSuccess: (isMessengerSeccess: boolean) => void;
};
