export type StepType = {
    stepDesc: string;
    imageSrc: string;
    imageDesc?: string;
    imageHeight: number;
};
export type AddStepType = StepType & {
    secondImageSrc?: string;
    secondImageDesc?: string;
    secondImageHeight?: number;
};
