"use client";

import TabLayout from "@/components/layout/tab/tab-layout";
import { repositoryData } from "@/constants/steps/repository";
import MethodTab from "./_component/method-tab";
import RegisterTab from "./_component/register-tab";

const Repository = () => {
    const tabs = ["등록 방법", "레포지토리 등록"];

    return (
        <div className="w-full h-full flex-center flex-col ">
            <TabLayout
                title="레포지토리 등록하기"
                icon="/light/icons/register.svg"
                content="레포지토리 등록 방법 안내"
                tabs={tabs}
                leftPosition={"206px"}
            >
                {repositoryData.map((repository, index) => (
                    <MethodTab
                        key={index}
                        index={index}
                        stepDesc={repository.stepDesc}
                        imageSrc={repository.imageSrc}
                        imageHeight={repository.imageHeight}
                        imageDesc={repository.imageDesc}
                        secondImageSrc={repository.secondImageSrc}
                        secondImageHeight={repository.secondImageHeight}
                        secondImageDesc={repository.secondImageDesc}
                    />
                ))}
                <RegisterTab />
            </TabLayout>
        </div>
    );
};

export default Repository;
