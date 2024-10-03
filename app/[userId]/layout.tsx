"use client";

import SideNavigation from "./_components/side-nav";
import { usePathname } from "next/navigation";

export default function UserLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { userId: string };
}) {
  const pathname = usePathname();
  const activeTab = pathname.endsWith("/custom-message")
    ? "custom-message"
    : "repo-list";

  return (
    <div className="flex">
      <SideNavigation activeTab={activeTab} userId={params.userId} />
      <div className="flex-grow bg-[#fcfcfc]">{children}</div>
    </div>
  );
}
