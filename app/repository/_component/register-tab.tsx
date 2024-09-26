import DeliverButton from "@/components/common/button";
import DeliverInput from "@/components/common/input";

import { useForm } from "react-hook-form";

const RegisterTab = () => {
    const { control, handleSubmit } = useForm({
        mode: "onChange",
    });

    const onSubmit = () => {
        console.log("data");
    };

    return (
        <div className="w-full flex justify-center items-center pt-24">
            <form onSubmit={handleSubmit(onSubmit)}>
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
                        name="repository-name"
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
