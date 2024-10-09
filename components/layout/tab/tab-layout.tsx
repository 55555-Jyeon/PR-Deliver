"use client";

import TabMenu from "./tab-menu";
import { useState } from "react";
import PageDescription from "./page-desc";
import { TabLayoutProps } from "./type";

const TabLayout = ({
  title,
  icon,
  content,
  tabs,
  children,
  leftPosition,
}: TabLayoutProps) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="w-[1280px] h-full">
      <PageDescription icon={icon} title={title} content={content} />
      <div className="relative w-full h-[52px] mt-12 flex flex-row">
        {tabs.map((tab, index) => (
          <div
            key={index}
            onClick={() => setActiveTab(index)}
            className={`${activeTab === index ? "z-10" : "z-0"}`}
          >
            <TabMenu
              tabTitle={tab}
              isSelected={activeTab === index}
              isPrevSelected={index > 0 && activeTab === index - 1}
              isNextSelected={index < tabs.length && activeTab === index + 1}
            />
          </div>
        ))}
        <div
          className={`absolute w-[1073px] bottom-0 left-[${leftPosition}] border-b-2 border-b-SYSTEM-black z-10`}
        />
      </div>
      <div className="mt-12">
        {Array.isArray(children) ? children[activeTab] : children}
      </div>
    </div>
  );
};
export default TabLayout;
