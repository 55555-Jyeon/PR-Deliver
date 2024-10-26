import { UseFormRegister } from "react-hook-form";

export type MessengerFormFields = {
    messengerType: string;
    webhookUrl: string;
};

export type SelectMessengerTypeProps = {
    register: UseFormRegister<MessengerFormFields>;
    selectedMessengerType: string;
    onMessengerTypeChange: React.ChangeEventHandler<HTMLInputElement>;
};
