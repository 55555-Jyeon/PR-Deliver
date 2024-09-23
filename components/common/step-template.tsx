import Image from "next/image";

const StepTemplate = ({}) => {
  return (
    <div className="w-[1280px] h-fit flex-col items-center justify-start">
      <h1>step 1</h1>
      <p>step description</p>
      <div className="relative w-full h-[595px] flex flex-col">
        <Image
          fill
          sizes="auto"
          src={"/images/steps/web-hook/github/01.jpg"}
          alt="step image"
        />
        <p>image description</p>
      </div>
    </div>
  );
};
export default StepTemplate;
