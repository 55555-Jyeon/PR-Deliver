import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import DeliverButton from "../button";

describe("DeliverButton Component", () => {
    it("버튼에 올바른 텍스트가 렌더링되는지 확인", () => {
        render(
            <DeliverButton
                label="Click"
                onClick={() => {}}
                length="full"
                isModal={false}
            />
        );

        expect(
            screen.getByRole("button", { name: /click/i })
        ).toBeInTheDocument();
    });

    it("버튼 클릭 시 onClick 함수가 호출되는지 확인", () => {
        const handleClick = jest.fn();

        render(
            <DeliverButton
                label="Click"
                onClick={handleClick}
                length="full"
                isModal={false}
            />
        );

        const button = screen.getByRole("button", { name: /click/i });

        fireEvent.click(button);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("isActive가 true일 때 버튼에 올바른 스타일이 적용되는지 확인", () => {
        render(
            <DeliverButton
                label="Click Me"
                onClick={() => {}}
                length="full"
                isModal={false}
                isActive={true}
            />
        );
        const button = screen.getByRole("button", { name: /click/i });
        // active 상태일 때 버튼의 텍스트 색과 배경색이 변경되는지 확인
        expect(button).toHaveClass("text-GREY-10", "bg-BRAND-50");
    });

    it("isActive가 false일 때 버튼의 올바른 스타일이 적용되는지 확인", () => {
        render(
            <DeliverButton
                label="Click"
                onClick={() => {}}
                length="full"
                isModal={false}
                isActive={false}
            />
        );
        const button = screen.getByRole("button", { name: /click/i });
        // inactive 상태일 때 버튼의 텍스트 색과 배경색이 변경되는지 확인
        expect(button).toHaveClass("text-GREY-20", "bg-GREY-30");
    });

    it("length가 full일 때 버튼의 너비가 올바르게 젹용되는지 확인", () => {
        render(
            <DeliverButton
                label="Click"
                onClick={() => {}}
                length="full"
                isModal={false}
            />
        );
        const button = screen.getByRole("button", { name: /click/i });
        // length가 full일 때 버튼의 너미가 416px로 설정되는지 확인
        expect(button).toHaveClass("w-[416px]");
    });

    it("isModal이 true일 때 모달 버튼 스타일이 적용되는지 확인", () => {
        render(
            <DeliverButton
                label="Click"
                onClick={() => {}}
                length="full"
                isModal={true}
                buttonBgColor="bg-SYSTEM-black"
                buttonTextColor="text-SYSTEM-white"
            />
        );
        const button = screen.getByRole("button", { name: /click/i });
        expect(button).toHaveClass("w-[320px]", "h-[44px]", "rounded-lg");
        expect(button).toHaveClass("bg-SYSTEM-black", "text-SYSTEM-white");
    });

    it("buttonActive가 false일 때 hover effect가 적용되지 않는지 확인", () => {
        render(
            <DeliverButton
                label="Click"
                onClick={() => {}}
                length="full"
                isModal={false}
                buttonActive={false}
            />
        );
        const button = screen.getByRole("button", { name: /click/i });
        const span = button.querySelector("span");
        // buttonActive가 false일 때 hover effect가 적용되지 않는지 확인
        expect(span).not.toHaveClass("custom-hover-effect");
    });

    it("buttonActive가 true일 때 hover effect가 적용되는지 확인", () => {
        render(
            <DeliverButton
                label="Click"
                onClick={() => {}}
                length="full"
                isModal={false}
                buttonActive={true}
            />
        );
        const button = screen.getByRole("button", { name: /click/i });
        const span = button.querySelector("span");
        expect(span).toHaveClass("custom-hover-effect");
    });
});
