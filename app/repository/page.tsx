import TabLayout from "@/components/common/tab-layout";

const Repository = () => {
    return (
        <div className="w-full h-full flex-center flex-col ">
            <TabLayout
                title="레포지토리 등록하기"
                icon="/light/icons/register.svg"
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
