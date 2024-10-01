import Image from "next/image";

const CustomMessage = () => {
  return (
    <div className="p-10">
      <div className="flex flex-row">
        <Image
          width={32}
          height={32}
          src={"/light/icons/message.svg"}
          alt="message icon"
        />
        <h1 className="text-[32px] font-bold ml-[17px]">메세지 커스텀</h1>
      </div>
    </div>
  );
};
export default CustomMessage;
