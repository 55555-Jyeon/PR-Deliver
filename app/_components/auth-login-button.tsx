import Image from "next/image";

const AuthLoginButton = () => {
  return (
    <div className="w-[416px] h-[52px] bg-SYSTEM-black rounded-[10px] flex-center">
      <Image
        priority
        src={"/light/icons/github.svg"}
        width={24}
        height={24}
        alt="github login"
      />
      <p className="text-[14px] text-SYSTEM-white ml-2.5">
        깃허브로 로그인하기
      </p>
    </div>
  );
};
export default AuthLoginButton;
