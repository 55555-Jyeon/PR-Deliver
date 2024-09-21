import Image from "next/image";

const PageDescription = () => {
  return (
    <>
      <div className="w-[300px] h-[300px] rounded-full bg-GREY-10 flex-center">
        <Image
          priority
          src={"/images/octo-cat.png"}
          width={240}
          height={212}
          alt="octo cat image"
        />
      </div>
      <div className="flex-center flex-col">
        <h1 className="text-[28px] font-bold my-7">로그인해 주세요</h1>
        <p className="max-w-[334px] keep-all text-center text-[16px] mb-12">
          프로젝트 진행 시 PR 알림을 메신저로 바로 받는 간편한 서비스
          PR-deliver를 로그인 후 이용해 보세요
        </p>
      </div>
    </>
  );
};
export default PageDescription;
