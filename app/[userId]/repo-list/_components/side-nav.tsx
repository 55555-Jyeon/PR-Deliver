import { TAB_LIST } from "@/constants/user/nav-tab";
import { SideNavProps } from "./type";
import Image from "next/image";

const SideNavigation = ({ activeTab, setActiveTab }: SideNavProps) => {
  return (
    <nav className="w-[280px] h-screen border-r-[1px] border-GREY-20">
      <ul className="pt-[92px]">
        {TAB_LIST.map((tab) => (
          <li
            key={tab.title}
            onClick={() =>
              setActiveTab(
                tab.title === "레포지토리 목록" ? "repo-list" : "custom-message"
              )
            }
            className={`flex items-center p-2 cursor-pointer ${
              activeTab ===
              (tab.title === "레포지토리 목록" ? "repo-list" : "custom-message")
                ? "text-BRAND-50" // 선택된 탭 색상
                : "text-SYSTEM-black" // 기본 텍스트 색상
            } hover:text-BRAND-50 text-base font-semibold w-full h-12 mr-2.5`}
          >
            <Image
              width={18}
              height={18}
              src={tab.icon}
              alt={tab.title}
              className="mr-[15px]"
            />
            <p>{tab.title}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default SideNavigation;
