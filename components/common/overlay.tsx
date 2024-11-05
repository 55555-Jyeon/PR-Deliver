"use client";

import clsx from "clsx";
import { useEffect } from "react";
import { OverlayProps } from "./type";

/**
 * @component Overlay
 * @param {boolean} isOpen - 오버레이의 표시 여부 제어
 * @param {Function} props.onClick - 오버레이를 닫을 때 호출되는 콜백함수 닫기 or 오버레이 바깥 클릭 시 닫힘
 * @param {ReactNode} props.children - 오버레이 내부에 표시될 내용
 */

const Overlay = ({ isOpen, onClick, children }: OverlayProps) => {
    // 오버레이가 열리면 스크롤 비활성화, 닫히면 스크롤 다시 활성화
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
        "bg-transparent w-auto mx-auto my-auto flex-center"
    );

    return (
        <div
            className={
                "fixed inset-0 flex-center z-[999] bg-SYSTEM-black bg-opacity-50"
            }
            onClick={onClick}
            aria-modal="true"
            role="dialog"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="flex-items flex-col"
            >
                <div className={`${contentCss} rounded-2xl`}>{children}</div>
            </div>
        </div>
    );
};

export default Overlay;
