import Image from "next/image";
import { ShortenText } from "@/utils/shorten-text";
import DeliverButton from "./button";
import Overlay from "./overlay";
import { DeliverModalProps } from "./type";

/**
 * @component DeliverModal
 *
 * @param {boolean} isSuccess - 성공 여부에 따라 다른 아이콘과 스타일을 적용
 * @param {boolean} isOpen - 모달이 열려 있는지 여부
 * @param {Function} onClose - 모달을 닫을 때 호출되는 함수
 * @param {Function} onReturn - 모달을 닫거나 취소 시 호출되는 함수 | 선택적
 * @param {Function} onConfirm - 확인 버튼을 눌렀을 때 호출되는 함수
 * @param {string} title - 모달의 제목
 * @param {string} content - 모달의 본문 내용
 * @param {string} content2 - 모달의 두번째 본문 내용 | 선택적
 * @param {string} buttonText - 모달의 버튼 텍스트
 * @param {string} returnButtonText - 모달의 취소 및 닫을 때 활성화되는 버튼의 텍스트 | 선택적
 */
const DeliverModal = ({
    isSuccess,
    isOpen,
    onClose,
    onReturn,
    onConfirm,
    title,
    content,
    content2,
    buttonText,
    returnButtonText,
}: DeliverModalProps) => {
    // success 여부에 따라 달라지는 css
    const Icon = isSuccess ? "/icons/success.svg" : "/icons/error.svg";
    const IconBG = isSuccess ? "bg-BRAND-30" : "bg-ERROR-10";
    const buttonBgColor = isSuccess ? "bg-BRAND-50" : "bg-ERROR-50";
    const successButtonBgColor = isSuccess ? "bg-BRAND-30" : "";

    if (!isOpen) return null;
    return (
        <Overlay isOpen={isOpen} onClick={onClose}>
            <div className="relative w-[360px] h-full rounded-2xl p-5 bg-SYSTEM-white">
                <Image
                    width={24}
                    height={24}
                    src={"/icons/close.svg"}
                    alt="close modal"
                    className="absolute right-5 cursor-pointer"
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
                        <p className="text-[14px] text-center">
                            {ShortenText(content, 80)}
                        </p>
                        {content2 && (
                            <p className="text-[14px] text-center">
                                {ShortenText(content2, 80)}
                            </p>
                        )}
                    </div>
                    <div
                        className={`${
                            isSuccess ? " w-full flex flex-row gap-3" : ""
                        }`}
                    >
                        {isSuccess && returnButtonText && (
                            <DeliverButton
                                onClick={onReturn}
                                label={returnButtonText}
                                isModal={true}
                                buttonBgColor={successButtonBgColor}
                                buttonTextColor="text-BRAND-50"
                                buttonActive={false}
                            />
                        )}
                        <DeliverButton
                            onClick={onConfirm}
                            label={buttonText}
                            isModal={true}
                            buttonBgColor={buttonBgColor}
                            buttonTextColor={"text-SYSTEM-white"}
                        />
                    </div>
                </div>
            </div>
        </Overlay>
    );
};
export default DeliverModal;
