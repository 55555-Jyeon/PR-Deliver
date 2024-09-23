import { TabMenuProps } from "./type";

const TabMenu = ({ tabTitle, isSelected }: TabMenuProps) => {
    return (
        <div
            className={`
        w-auto h-[52px] flex-center rounded-t-lg p-2.5 cursor-pointer
        ${
            isSelected
                ? "border-l-2 border-r-2 border-t-2 border-SYSTEM-black border-b-2 border-b-SYSTEM-white text-GREY-90"
                : "border-2 border-GREY-20 border-b-SYSTEM-black text-GREY-50"
        }
      `}
        >
            {tabTitle}
        </div>
    );
};

export default TabMenu;
