/* step */
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

/* user */
export type UserDashboardOptionsType = {
    icon: string;
    title: string;
    subText: string;
    url: string | ((userId: string) => string);
};
export type TabListType = {
    icon: string;
    hoverIcon: string;
    title: string;
};
export type messengerType = {
    label: string;
    value: string;
};
