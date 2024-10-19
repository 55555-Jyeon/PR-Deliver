import Image from "next/image";
import SUCCESS from "@/public/icons/success.svg";
import ERROR from "@/public/icons/error.svg";
import Overlay from "./overlay";
import { DeliverModalProps } from "./type";

const DeliverModal = ({
    isSuccess,
    isOpen,
    onClose,
    title,
    content,
}: DeliverModalProps) => {
    // success 여부에 따라 달라지는 css
    const Icon = isSuccess ? SUCCESS : ERROR;
    const IconBG = isSuccess ? "bg-BRAND-30" : "bg-ERROR-10";
    const buttonBgColor = isSuccess ? "bg-BRAND-50" : "bg-ERROR-50";

    if (!isOpen) return null;
    return (
        <Overlay
            isOpen={isOpen}
            onClick={onClose}
            handleOverlaySubmit={onClose}
        >
            <div className="relative w-[360px] h-[274px] rounded-2xl p-5 bg-SYSTEM-white">
                <Image
                    width={24}
                    height={24}
                    src={"/icons/close.svg"}
                    alt="close modal"
                    className="absolute right-5"
                    onClick={onClose}
                />
                <div className="flex-center flex-col mt-1">
                    <div
                        className={`w-[60px] h-[60px] rounded-full flex-center ${IconBG}`}
                    >
                        <Image
                            width={24}
                            height={24}
                            src={Icon}
                            alt="alert icon"
                        />
                    </div>
                    <div className="flex-center flex-col mt-3 mb-8">
                        <h1 className="my-3 text-[18px] font-bold">{title}</h1>
                        <p className="text-[14px]">{content}</p>
                    </div>
                    <button
                        className={`w-[320px] h-[44px] rounded-lg ${buttonBgColor} text-SYSTEM-white`}
                    >
                        confirm
                    </button>
                </div>
            </div>
        </Overlay>
    );
};
export default DeliverModal;
