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
  onClick: () => void;
  length: "smaller" | "full";
  label: string;
};

export type CustomInputProps = {
  title?: string;
  placeholder: string;
  className?: string;
} & UseControllerProps;
