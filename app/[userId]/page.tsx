"use client";

import { useState } from "react";
import SideNavigation from "./repo-list/_components/side-nav";
import RepositoryList from "./repo-list/page";
import CustomMessage from "./custom-message/page";

const UserPage = () => {
  const [activeTab, setActiveTab] = useState<string>("repo-list");
  return (
    <div className="flex">
      <SideNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-grow">
        {activeTab === "repo-list" && <RepositoryList />}
        {activeTab === "custom-message" && <CustomMessage />}
      </div>
    </div>
  );
};
export default UserPage;
