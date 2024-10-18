import { postFetchRepository } from "@/apis/repository";
import DeliverButton from "@/components/common/button";
import DeliverInput from "@/components/common/input";
import { setSessionStorage } from "@/utils/storatge";
import { useRouter } from "next/navigation";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const RegisterTab = () => {
    const router = useRouter();

    const { control, handleSubmit } = useForm({
        mode: "onChange",
    });

    const onSubmitRepository: SubmitHandler<FieldValues> = async (data) => {
        const fullName = `${data.owner}/${data.repositoryName}`;
        const response = await postFetchRepository(fullName);
        console.log(response, "레포지토리 등록 리스폰스");
        // if (response?.status === 400) {
        //     alert("봇 계정에 대한 초대가 완료되지 않았습니다.");
        //     return;
        // }
        // if (response?.status === 500) {
        //     alert("서버 에러가 발생했습니다. 다시 시도해 주세요");
        //     return;
        // }

        if (response) {
            setSessionStorage("repositoryId", response.repositoryId.toString());
        }

        router.push("/github");
    };

    return (
        <div className="w-full flex justify-center items-center pt-24">
            <form onSubmit={handleSubmit(onSubmitRepository)}>
                <div>
                    <DeliverInput
                        name="owner"
                        control={control}
                        title="소유자 입력"
                        placeholder="ex) ca1af"
                        rules={{ required: "소유자는 필수 입력입니다." }}
                    />
                </div>
                <div className="mt-[20px]">
                    <DeliverInput
                        name="repositoryName"
                        control={control}
                        title="레포지토리 이름 입력"
                        placeholder="ex) re-deliver"
                        rules={{
                            required: "레포지토리 이름은 필수 입력입니다.",
                        }}
                    />
                </div>
                <div className="mt-10">
                    <DeliverButton type="submit" length="full" label="다음" />
                </div>
            </form>
        </div>
    );
};
export default RegisterTab;
