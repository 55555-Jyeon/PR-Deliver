import TabLayout from "@/components/layout/tab/tab-layout";
import MethodTab from "./_components/method-tab";
import RegisterTab from "./_components/register-tab";

const RegisterMessenger = () => {
    const tabs = ["등록 방법", "메신저 등록"];

    return (
        <div className="size-full flex-center flex-col">
            <TabLayout
                title="메신저 웹훅 등록하기"
                icon="/light/icons/register.svg"
                content="메신저 웹훅 등록 방법 안내"
                tabs={tabs}
                leftPosition="178.5px"
            >
                <MethodTab />
                <RegisterTab />
            </TabLayout>
        </div>
    );
};
export default RegisterMessenger;
