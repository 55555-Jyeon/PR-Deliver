"use client";

import Image from "next/image";
import TabMenu from "./tab-menu";
import { useState } from "react";
import { TabLayoutProps } from "./type";

const TabLayout = ({
    title,
    icon,
    content,
    tabs,
    children,
}: TabLayoutProps) => {
    const [activeTab, setActiveTab] = useState<number>(0);

    return (
        <div className=" w-[1280px] h-full pt-20 ">
            <div className=" flex-items flex-row justify-start">
                <div className="w-8 h-8 mr-[14px]">
                    <Image src={icon} alt="Icon" width={32} height={32} />
                </div>
                <div className="text-[32px] font-bold">{title}</div>
            </div>
            <div className="text-[16px] mt-6">{content}</div>
            <div className="w-full h-[52px] mt-12 flex flex-row relative">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`${activeTab === index ? "z-10" : "z-0"}`}
                    >
                        <TabMenu
                            tabTitle={tab}
                            isSelected={activeTab === index}
                            isPrevSelected={
                                index > 0 && activeTab === index - 1
                            }
                            isNextSelected={
                                index < tabs.length && activeTab === index + 1
                            }
                        />
                    </div>
                ))}
                <div className=" absolute w-[1073px] -ml-[2px] bottom-0 left-[207px] border-b-2 border-b-SYSTEM-black z-10" />
            </div>
            <div className="mt-12">
                {Array.isArray(children) ? children[activeTab] : children}
            </div>
        </div>
    );
};
export default TabLayout;
