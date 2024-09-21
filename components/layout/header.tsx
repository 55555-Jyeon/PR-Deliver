import Image from "next/image";

const Header = () => {
  return (
    <div className="relative top-0 w-full h-[60px] px-[100px] border-b border-GREY-20 flex-items justify-between">
      <Image
        priority
        src={"/light/images/logo.svg"}
        width={92}
        height={20}
        alt="PR Deliver logo"
        className="w-auto"
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
