"use client";

import SideNavigation from "./_components/side-nav";
import { usePathname } from "next/navigation";
import { UserLayoutProps } from "./type";

export default function UserLayout({ children, params }: UserLayoutProps) {
    const pathname = usePathname();
    const activeTab = pathname.endsWith("/custom-message")
        ? "custom-message"
        : "repo-list";

    return (
        <div className="relative flex">
            <SideNavigation activeTab={activeTab} userId={params.userId} />
            <div className="flex-grow bg-[#fcfcfc]">{children}</div>
        </div>
    );
}
