import TabLayout from "@/components/common/tabLayout";

const Repository = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center ">
            <TabLayout
                title="레포지토리 등록하기"
                icon="/icons/write.svg"
                content="레포지토리 등록 방법 안내"
                tabTitle1="등록 방법"
                tabTitle2="레포지토리 등록"
            >
                <div>Tab One</div>
                <div>Tab Two</div>
            </TabLayout>
        </div>
    );
};

export default Repository;
