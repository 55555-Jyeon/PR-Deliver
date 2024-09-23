import Image from "next/image";
import { StepTemplateProps } from "./type";

const StepTemplate = ({
  index,
  stepDesc,
  imageSrc,
  imageHeight,
  imageDesc,
}: StepTemplateProps) => {
  return (
    <div className="w-[1280px] h-fit flex-col items-center justify-start">
      <h1>STEP {index + 1}</h1>
      <p>{stepDesc}</p>
      <div className={`relative w-full h-[${imageHeight}px] flex flex-col`}>
        <Image fill sizes="auto" src={imageSrc} alt="each step's image" />
        {imageDesc && <p>{imageDesc}</p>}
      </div>
    </div>
  );
};
export default StepTemplate;
