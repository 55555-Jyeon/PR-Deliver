"use client";

import Image from "next/image";
import TabMenu from "./tabMenu";
import { useState } from "react";
import { TabLayoutProps } from "./type";

const TabLayout = ({
    title,
    icon,
    content,
    tabTitle1,
    tabTitle2,
    children,
}: TabLayoutProps) => {
    const [activeTab, setActiveTab] = useState<1 | 2>(1);

    return (
        <div className="w-[1280px] h-full pt-20 ">
            <div className="flex flex-row items-center justify-start">
                <div className="w-8 h-8 mr-[14px]">
                    <Image src={icon} alt="Icon" width={32} height={32} />
                </div>
                <div className="text-[32px] font-bold">{title}</div>
            </div>
            <div className="text-[16px] mt-6">{content}</div>
            <div className="w-full h-[52px] mt-12 flex flex-row">
                <div onClick={() => setActiveTab(1)}>
                    <TabMenu
                        tabTitle={tabTitle1}
                        isSelected={activeTab === 1}
                    />
                </div>
                <div onClick={() => setActiveTab(2)}>
                    <TabMenu
                        tabTitle={tabTitle2}
                        isSelected={activeTab === 2}
                    />
                </div>
                <div className="w-[1071px] border-b-2 border-b-SYSTEM-black" />
            </div>
            <div className="mt-12">{children[activeTab - 1]}</div>
        </div>
    );
};
export default TabLayout;
