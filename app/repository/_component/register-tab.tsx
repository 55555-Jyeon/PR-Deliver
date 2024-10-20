import { postFetchRepository } from "@/apis/repository";
import DeliverButton from "@/components/common/button";
import DeliverInput from "@/components/common/input";
import { setSessionStorage } from "@/utils/storage";
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
        if (response) {
            setSessionStorage("repositoryId", response.repositoryId.toString());
            router.push("/github");
        } else {
            throw new Error("레포지토리 등록에 실패했습니다.");
        }
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
                    <DeliverButton
                        type="submit"
                        length="full"
                        label="다음"
                        isModal={false}
                    />
                </div>
            </form>
        </div>
    );
};
export default RegisterTab;
