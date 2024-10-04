"use client";

import { USER_DASHBOARD_OPTIONS } from "@/constants/user/main-dashboard";
import { useRouter } from "next/navigation";

const UserDashboard = () => {
  const router = useRouter();

  return (
    <div className="flex-center flex-row">
      {USER_DASHBOARD_OPTIONS.map((option) => (
        <>
          <div
            key={option.title}
            onClick={() => router.push(option.url)}
            className="flex-center w-max flex-col mr-[100px] cursor-pointer"
          >
            <h1 className="text-lg font-bold mb-[14px]">{option.title}</h1>
            <p className="text-sm">{option.subText}</p>
          </div>
        </>
      ))}
    </div>
  );
};
export default UserDashboard;
