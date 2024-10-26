import { MessengerFormFields } from "@/app/(webhook)/messengers/_components/register/type";
import { Control, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export type MessengerRegistrationReturnType = {
    control: Control<any>;
    handleSubmit: UseFormHandleSubmit<MessengerFormFields>;
    register: UseFormRegister<MessengerFormFields>;
    onSubmit: (data: MessengerFormFields) => Promise<void>;
    selectedMessengerType: string;
    onMessengerTypeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
