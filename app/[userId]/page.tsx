"use client";

import { useEffect, useState } from "react";
import SideNavigation from "./_components/side-nav";
import RepositoryList from "./repo-list/page";
import CustomMessage from "./custom-message/page";

const UserPage = () => {
  const [activeTab, setActiveTab] = useState<string>("repo-list");

  // URL 해시가 변경될 때 탭 상태 업데이트
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || "repo-list";
      setActiveTab(hash);
    };
    // 초기 해시 확인
    handleHashChange();
    // 해시 변경 이벤트 리스너 등록
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // 탭 변경 시 URL 해시 업데이트
  const handleTabChange = (tab: string) => {
    window.location.hash = tab;
    setActiveTab(tab);
  };

  return (
    <div className="flex">
      <SideNavigation activeTab={activeTab} setActiveTab={handleTabChange} />
      <div className="flex-grow bg-[#fcfcfc]">
        {activeTab === "repo-list" && <RepositoryList />}
        {activeTab === "custom-message" && <CustomMessage />}
      </div>
    </div>
  );
};
export default UserPage;
