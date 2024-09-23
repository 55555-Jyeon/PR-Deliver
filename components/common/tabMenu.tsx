import { TabMenuProps } from "./type";

const TabMenu = ({ tabTitle, isSelected }: TabMenuProps) => {
    return (
        <div
            className={`
        w-auto h-[52px] flex justify-center items-center rounded-t-lg p-[10px] cursor-pointer
        ${
            isSelected
                ? "border-l-2 border-r-2 border-t-2 border-SYSTEM-black border-b-2 border-b-SYSTEM-white text-GREY-90"
                : "border-2 border-GREY-20 border-b-SYSTEM-black text-GREY-90"
        }
      `}
        >
            {tabTitle}
        </div>
    );
};

export default TabMenu;
