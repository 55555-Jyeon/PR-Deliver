import { MESSENGER_TYPES } from "@/constants/register/messenger-type";
import { SelectMessengerTypeProps } from "./type";

const MessengerSelector = ({
    register,
    selectedMessengerType,
    onMessengerTypeChange,
}: SelectMessengerTypeProps) => (
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
                        {...register("messengerType", {
                            required: true,
                            onChange: onMessengerTypeChange,
                        })}
                        className={`mr-2 border ${
                            selectedMessengerType === type.value
                                ? "border-BRAND-50 border-[6px]"
                                : "border-GREY-20"
                        }`}
                        style={{
                            appearance: "none",
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                        }}
                    />
                    <p className="text-[13px] font-medium">{type.label}</p>
                </label>
            ))}
        </div>
    </div>
);
export default MessengerSelector;
