"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <div className="fixed top-0 w-full h-[60px] px-[100px] bg-SYSTEM-white border-b border-GREY-20 flex-items justify-between z-50">
      <Image
        priority
        src={"/light/images/logo.svg"}
        width={92}
        height={20}
        alt="PR Deliver logo"
        className="w-auto cursor-pointer"
        onClick={() => router.push("/")}
      />
      <div className="flex-center">
        <Image
          priority
          src={"/light/icons/user.svg"}
          width={24}
          height={24}
          alt="member"
          className="mr-[26px]"
        />
        <Image
          priority
          src={"/light/icons/alert.svg"}
          width={24}
          height={24}
          alt="new messsages"
        />
      </div>
    </div>
  );
};
export default Header;
