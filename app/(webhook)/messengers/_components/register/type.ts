import { UseFormRegister } from "react-hook-form";
import { MessengerFormFields } from "@/type/messenger";

export type SelectMessengerTypeProps = {
    register: UseFormRegister<MessengerFormFields>;
    selectedMessengerType: string;
    onMessengerTypeChange: React.ChangeEventHandler<HTMLInputElement>;
};
