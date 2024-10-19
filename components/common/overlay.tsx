"use client";

import clsx from "clsx";
import { useEffect } from "react";
import { OverlayProps } from "./type";

/**
 * Overlay Component
 * @param {boolean} isOpen - 오버레이의 표시 여부 제어
 * @param {Function} props.onClick - 오버레이를 닫을 때 호출되는 콜백함수 닫기 or 오버레이 바깥 클릭 시 닫힘
 * @param {ReactNode} props.children - 오버레이 내부에 표시될 내용
 * @param {string} props.text - 버튼에 표시될 텍스트
 * @param {string} props.imageUrl - 버튼에 표시될 이미지 URL
 * @param {string} props.textColor - 버튼 텍스트 색상
 */

const Overlay = ({
    isOpen,
    onClick,
    handleOverlaySubmit,
    children,
    text,
    textColor,
}: OverlayProps) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const contentCss = clsx(
        "bg-transparent shadow-xl w-auto mx-auto my-auto flex-center"
    );

    return (
        <div
            className={`fixed inset-0 flex-center z-[999] bg-SYSTEM-black bg-opacity-70`}
            onClick={onClick}
            aria-modal="true"
            role="dialog"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="flex-items flex-col"
            >
                <div className={`${contentCss} rounded-2xl`}>{children}</div>
                <div className="w-full flex-items flex-row justify-between">
                    <div
                        onClick={handleOverlaySubmit}
                        className="w-1/2 flex-items flex-row justify-end pt-2"
                    >
                        <button
                            onClick={onClick}
                            className={`text-sm ${textColor}`}
                        >
                            {text}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overlay;
