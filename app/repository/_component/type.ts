export type RegistrationProps = {
    index: number;
    stepDesc: string;
    imageSrc: string;
    imageHeight: number;
    secondImageSrc?: string;
    secondImageHeight?: number;
    imageDesc?: string;
    secondImageDesc?: string;
};

export type onSubmitRepositoryProps = {
    owner: string;
    reoisitoryName: string;
};
