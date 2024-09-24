import CustomInput from "@/components/common/custom-input";
import TabLayout from "@/components/common/tab-layout";

const Repository = () => {
    const tabs = ["등록 방법", "레포지토리 등록"];

    return (
        <div className="w-full h-full flex-center flex-col ">
            <TabLayout
                title="레포지토리 등록하기"
                icon="/light/icons/register.svg"
                content="레포지토리 등록 방법 안내"
                tabs={tabs}
            >
                <div>Tab One</div>
                <div>
                    <CustomInput
                        title="소유자 입력"
                        className=""
                        placeholder="ex) ca1af"
                    />
                </div>
            </TabLayout>
        </div>
    );
};

export default Repository;
