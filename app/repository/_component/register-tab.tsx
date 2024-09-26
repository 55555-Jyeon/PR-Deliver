import CustomInput from "@/components/common/custom-input";
import { useForm } from "react-hook-form";

const RegisterRepositoryTab = () => {
    const { control, handleSubmit } = useForm();

    const onSubmit = () => {
        console.log("data");
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CustomInput
                    name="owner"
                    control={control}
                    title="소유자 입력"
                    placeholder="ex) ca1af"
                />
            </form>
        </div>
    );
};
export default RegisterRepositoryTab;
