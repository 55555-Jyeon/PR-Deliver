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
    length?: "smaller" | "full";
    label: string;
    type?: "button" | "submit";
    isModal: boolean;
    buttonBgColor?: string;
    buttonTextColor?: string;
    buttonActive?: boolean;
};

export type CustomInputProps = {
    title?: string;
    placeholder: string;
    className?: string;
} & UseControllerProps;

export type OverlayProps = {
    isOpen: boolean;
    onClick: () => void;
    children: React.ReactNode;
};

export type DeliverModalProps = {
    isSuccess: boolean;
    isOpen: boolean;
    onClose: () => void;
    onReturn?: () => void;
    onConfirm: () => void;
    title: string;
    content: string;
    content2?: string;
    buttonText: string;
    returnButtonText?: string;
};