import { Control } from "react-hook-form";
import DeliverInput from "../input";

describe("DeliverInput", () => {
    const TestComponent = ({
        control,

        rules,
    }: {
        control: Control;
        rules?: any;
    }) => (
        <DeliverInput
            name="testInput"
            title="Test Title"
            placeholder="Enter value"
            control={control}
            rules={rules}
        />
    );
});
