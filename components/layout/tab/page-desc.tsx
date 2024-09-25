import Image from "next/image";
import { PageDescriptionProps } from "./type";

const PageDescription = ({ icon, title, content }: PageDescriptionProps) => {
  return (
    <div className="w-[1280px] h-full pt-20">
      <div className="flex-items justify-start flex-row">
        <div className="mr-[14px]">
          <Image src={icon} alt="Icon" width={32} height={32} />
        </div>
        <div className="text-[32px] font-bold">{title}</div>
      </div>
      <div className="text-[16px] mt-6">{content}</div>
    </div>
  );
};
export default PageDescription;
