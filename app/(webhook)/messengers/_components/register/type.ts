import { MessengerFormFields } from "@/type/messenger";
import { UseFormRegister } from "react-hook-form";

export type SelectMessengerTypeProps = {
    register: UseFormRegister<MessengerFormFields>;
    selectedMessengerType: string;
    onMessengerTypeChange: React.ChangeEventHandler<HTMLInputElement>;
};
