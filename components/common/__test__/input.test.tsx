import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { Control, RegisterOptions, useForm } from "react-hook-form";
import DeliverInput from "../input";

describe("DeliverInput", () => {
    const TestComponent = ({
        children,
        rules,
    }: {
        children: React.ReactNode;
        rules?: RegisterOptions;
    }) => {
        const { control } = useForm();
        return (
            <>
                {React.cloneElement(children as React.ReactElement, {
                    control,
                    rules,
                })}
            </>;
        );
    };

    it("DeliverInput component의 title과 placeholder가 올바르게 렌더링 되는지 확인", () => {
        const { control } = useForm();

        render(<TestComponent control={control} />);

        // 제목이 올바르게 표시되는지 확인
        expect(screen.getByText("Test Title")).toBeInTheDocument();
        // placeholder가 올바르게 표시되는지 확인
        expect(screen.getByPlaceholderText("Enter Value")).toBeInTheDocument();
    });

    it("field가 비어있을 때 error message가 올바르게 보이는지 확인", async () => {
        const { control, handleSubmit } = useForm();
        const onSubmit = jest.fn();

        render(
            <form onSubmit={handleSubmit(onSubmit)}>
                <TestComponent
                    control={control}
                    rules={{ required: "This field is required" }}
                />
                <button type="submit">Submit</button>
            </form>
        );

        const submitButton = screen.getByRole("button", { name: /submit/i });

        // 제출 버튼 클릭
        fireEvent.click(submitButton);

        // 에러 메시지가 표시되는지 확인
        expect(
            await screen.findByText("This field is required")
        ).toBeInTheDocument();
        // onSubmit 함수가 호출되지 않는지 확인
        expect(onSubmit).not.toHaveBeenCalled();
    });

    it("updates the input value when the user types", () => {
        const { control } = useForm();

        render(<TestComponent control={control} rules={{}} />);

        const input = screen.getByPlaceholderText("Enter value");

        // 초기 값 확인
        expect(input).toHaveValue("");

        // 입력 값을 변경
        fireEvent.change(input, { target: { value: "New Value" } });

        // 입력 값이 업데이트되었는지 확인
        expect(input).toHaveValue("New Value");
    });
});
