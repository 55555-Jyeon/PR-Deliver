import Image from "next/image";

const EmptyRepoList = () => {
    return (
        <div className="w-full h-screen">
            <div className="h-full flex-center flex-col">
                <Image
                    src={"/images/docs.svg"}
                    width={148}
                    height={148}
                    alt="there is no data"
                />
                <h1 className="text-[24px] font-bold text-SYSTEM-black pt-5 pb-4">
                    데이터가 없습니다
                </h1>
                <p className="text-[14px] font-normal text-GREY-90 text-center">
                    표시할 데이터가 없습니다. <br /> 레포지토리를 등록해주세요.
                </p>
                <button className="bg-BRAND-50 text-SYSTEM-white w-[206px] h-[52px] rounded-[10px] text-[14px] mt-8">
                    레포지토리 등록하러 가기
                </button>
            </div>
        </div>
    );
};
export default EmptyRepoList;
