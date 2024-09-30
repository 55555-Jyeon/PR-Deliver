import Image from "next/image";

const RepositoryList = () => {
  return (
    <div>
      <div className="flex flex-row">
        <Image
          width={32}
          height={32}
          src={"/light/icons/list.svg"}
          alt="list icon"
        />
        <h1 className="text-[32px] font-bold ml-[17px]">레포지토리 목록</h1>
      </div>
    </div>
  );
};
export default RepositoryList;
