import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { RegisterOptions, useForm } from "react-hook-form";
import DeliverInput from "../input";
import "@testing-library/jest-dom";

describe("DeliverInput", () => {
    const TestWrapper = ({
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
            </>
        );
    };

    it("DeliverInput component의 title과 placeholder가 올바르게 렌더링 되는지 확인", () => {
        render(
            <TestWrapper>
                <DeliverInput
                    name="testInput"
                    title="Test Title"
                    placeholder="Enter value"
                />
            </TestWrapper>
        );

        // 제목이 올바르게 표시되는지 확인
        expect(screen.getByText("Test Title")).toBeInTheDocument();
        // placeholder가 올바르게 표시되는지 확인
        expect(screen.getByPlaceholderText("Enter value")).toBeInTheDocument();
    });

    it("필수 입력 필드에서 값이 없을 경우 오류 메시지를 보여준다", async () => {
        const { control, handleSubmit } = useForm();
        const onSubmit = jest.fn();

        render(
            <form onSubmit={handleSubmit(onSubmit)}>
                <TestWrapper>
                    <DeliverInput
                        name="testInput"
                        title="Test Title"
                        placeholder="Enter value"
                        control={control}
                        rules={{ required: "This field is required" }}
                    />
                </TestWrapper>
                <button type="submit">Submit</button>
            </form>
        );

        // const input = screen.getByPlaceholderText("Enter value");
        const submitButton = screen.getByRole("button", { name: /submit/i });

        // 제출 버튼 클릭
        fireEvent.click(submitButton);

        // 에러 메시지가 표시되는지 확인
        expect(
            await screen.findByText("This field is required")
        ).toBeInTheDocument();
    });

    it("입력 값이 올바르게 업데이트 되는지 확인", () => {
        render(
            <TestWrapper>
                <DeliverInput
                    name="testInput"
                    title="Test Title"
                    placeholder="Enter value"
                />
            </TestWrapper>
        );

        const input = screen.getByPlaceholderText("Enter value");

        // 초기 값 확인
        expect(input).toHaveValue("");

        // 입력 값을 변경
        fireEvent.change(input, { target: { value: "New Value" } });

        // 입력 값이 업데이트되었는지 확인
        expect(input).toHaveValue("New Value");
    });
});
