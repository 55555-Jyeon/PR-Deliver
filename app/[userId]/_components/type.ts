import { TabListType } from "@/constants/type";

export type SideNavProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};
export type TabTitleProps = {
  tabNum: TabListType;
};
