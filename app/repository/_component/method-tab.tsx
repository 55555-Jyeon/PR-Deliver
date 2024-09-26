import Image from "next/image";

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

const RegistrationMethodTab = ({
    index,
    stepDesc,
    imageSrc,
    imageHeight,
    imageDesc,
    secondImageHeight,
    secondImageSrc,
    secondImageDesc,
}: RegistrationProps) => {
    return (
        <div className="w-[1280px] h-fit flex-col items-center justify-start py-12 text-GREY-90">
            <span className="size-full bg-GREY-10 rounded-full px-3 py-2.5 font-semibold text-[14px]">
                STEP {index + 1}
            </span>
            <p className="text-[16px] mt-4 mb-5">{stepDesc}</p>
            <div
                className={`relative w-full flex flex-col`}
                style={{ height: `${imageHeight}px` }}
            >
                <Image
                    fill
                    sizes="auto"
                    src={imageSrc}
                    alt="each step's image"
                />
            </div>
            {imageDesc && (
                <p className="text-sm text-GREY-60 pt-3 pl-1">{imageDesc}</p>
            )}
            {secondImageSrc && (
                <div
                    className={`relative w-full flex flex-col mt-12`}
                    style={{ height: `${secondImageHeight}px` }}
                >
                    <Image
                        fill
                        sizes="auto"
                        src={secondImageSrc}
                        alt="each step's image"
                    />
                </div>
            )}
            {secondImageDesc && (
                <p className="text-sm text-GREY-60 pt-3 pl-1">{imageDesc}</p>
            )}
        </div>
    );
};
export default RegistrationMethodTab;
