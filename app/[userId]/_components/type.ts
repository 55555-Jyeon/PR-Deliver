import { TabListType } from "@/constants/type";

export type SideNavProps = {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};
export type TabTitleProps = {
  tabNum: TabListType;
};
