import { UseControllerProps } from "react-hook-form";

export type StepTemplateProps = {
    index: number;
    stepDesc: string;
    imageSrc: string;
    imageHeight: number;
    imageDesc?: string;
};

export type DeliverButtonProps = {
    isActive?: boolean;
    onClick?: () => void;
    length: "smaller" | "full";
    label: string;
    type?: "button" | "submit";
};

export type CustomInputProps = {
    title?: string;
    placeholder: string;
    className?: string;
} & UseControllerProps;

export type OverlayProps = {
    isOpen: boolean;
    handleOverlaySubmit?: (e: React.FormEvent) => void;
    onClick: () => void;
    children: React.ReactNode;
    text?: string;
    textColor?: string;
};

export type DeliverModalProps = {
    isSuccess: boolean;
    isOpen: boolean;
    onClose: () => void;
    title: string;
    content: string;
};
