import Image from "next/image";
import { TabTitleProps } from "./type";

const TabTitle = ({ tabNum }: TabTitleProps) => {
  return (
    <div className="p-10">
      <div className="flex flex-row">
        <Image
          width={32}
          height={32}
          src={tabNum.icon}
          alt={`${tabNum.title} icon`}
        />
        <h1 className="text-[32px] font-bold ml-[17px]">{tabNum.title}</h1>
      </div>
    </div>
  );
};
export default TabTitle;
