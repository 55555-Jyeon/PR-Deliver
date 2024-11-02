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
    onConfirm: () => void;
    title: string;
    content: string;
    buttonText: string;
};
