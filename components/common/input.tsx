"use client";

import clsx from "clsx";
import { useController } from "react-hook-form";
import { CustomInputProps } from "./type";

/**
 * @conponent DeliverInput
 * @description
 *  react-hook-form을 사용한 custom input
 *  너비 416px로 고정되어 있습니다.
 *
 * @param {Object} props - 컴포넌트 프로퍼티
 * @param {string} props.name - 입력 필드 이름
 * @param {string} [props.title] - 입력 필드 위에 표시될 제목 (선택)
 * @param {string} props.placeholder - 입력 필드의 플레이스홀더
 * @param {string} [props.className] - 추가적인 CSS 클래스 (선택)
 * @param {string} props.control - react-hook-form의 control 객체
 * @param {string} [props.rules] - react-hook-form의 유효성 검사 규칙 (선택)
 *
 * @returns {React.ReactElement}
 *
 * @example
 * <DeliverInput
 *      name="name"
 *      title="이름"
 *      placeholder="이름 입력을 입력하세요"
 *      control={control}
 *      rules={{ required: "사용자 이름은 필수입니다." }}
 * />
 *
 * @see {@link useController} react-hook-form의 useController 훅
 */

const DeliverInput = ({
    name,
    title,
    placeholder,
    className,
    control,
    rules,
}: CustomInputProps) => {
    const {
        field,
        fieldState: { error },
    } = useController({
        name,
        control,
        rules: { required: "This field is required", ...rules },
        defaultValue: "",
    });
    return (
        <div className="w-[416px]">
            {title && (
                <div className="w-full mb-2 font-medium text-SYSTEM-black text-sm">
                    {title}
                </div>
            )}
            <input
                {...field}
                placeholder={placeholder}
                className={clsx(
                    "w-full rounded-[10px] border-2 border-GREY-20 px-5 py-[15px] text-GREY-60 text-sm focus:outline-none",
                    error && "border-2 border-SYSTEM-red",
                    className
                )}
            />
            {error && (
                <p className="text-SYSTEM-red text-xs mt-1">{error.message}</p>
            )}
        </div>
    );
};
export default DeliverInput;
