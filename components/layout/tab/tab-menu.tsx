import { TabMenuProps } from "./type";

const TabMenu = ({ tabTitle, isSelected }: TabMenuProps) => {
    return (
        <div className=" relative">
            <div
                className={`
        w-auto h-[52px] flex-center rounded-t-lg p-2.5 cursor-pointer
        ${
            isSelected
                ? "border-t-2 border-l-2 border-r-2 border-SYSTEM-black text-GREY-90 bg-white"
            : "border-t-2 border-l-2 border-r-2 border-GREY-20 text-GREY-50 "
        }
       
      `}
            >
                <div
                    className={`absolute w-full p-2.5 h-[50px] border-b-2  ${
                        isSelected
                            ? "border-b-0 border-b-SYSTEM-white"
                            : "border-b-2 border-b-SYSTEM-black"
                    }
                     `}
                />
                {tabTitle}
            </div>
        </div>
    );
};

export default TabMenu;
