"use client";
import { useRouter } from "next/navigation";

const UserDashboard = () => {
  const router = useRouter();
  const userId = "deliver-01";
  return (
    <div className="flex-center flex-row">
      <div className="flex-center w-max flex-col mr-[100px]">
        <h1 className="text-lg font-bold mb-[14px]">레포지토리 등록하기</h1>
        <p className="text-sm">등록된 레포지토리가 없다면?</p>
      </div>
      <div
        onClick={() => router.push(`/${userId}/page`)}
        className="flex-center w-max flex-col"
      >
        <h1 className="text-lg font-bold mb-[14px]">레포지토리 목록보기</h1>
        <p className="text-sm">등록한 레포지토리 확인하기</p>
      </div>
    </div>
  );
};
export default UserDashboard;
