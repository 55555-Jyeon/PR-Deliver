import { render, screen, fireEvent } from "@testing-library/react";
import DeliverModal from "../modal";
import { DeliverModalProps } from "../type";
import "@testing-library/jest-dom";

describe("DeliverModal Component", () => {
    const defaultProps: DeliverModalProps = {
        isSuccess: true,
        isOpen: true,
        onClose: jest.fn(),
        onReturn: jest.fn(),
        onConfirm: jest.fn(),
        title: "테스트 제목",
        content: "테스트 본문 내용입니다.",
        content2: "선택적 두 번째 본문 내용입니다.",
        buttonText: "확인",
        returnButtonText: "취소",
    };

    it("모달이 올바른 내용으로 렌더링된다.", () => {
        render(<DeliverModal {...defaultProps} />);

        // 모달의 요소들이 렌더링되었는지 확인
        expect(screen.getByText("테스트 제목")).toBeInTheDocument();
        expect(screen.getByText("테스트 본문 내용입니다.")).toBeInTheDocument();
        expect(
            screen.getByText("선택적 두 번째 본문 내용입니다.")
        ).toBeInTheDocument();
        expect(screen.getByText("확인")).toBeInTheDocument();
        expect(screen.getByText("취소")).toBeInTheDocument();
    });

    it("성공 상태에 따라 올바른 아이콘이 렌더링된다.", () => {
        const { rerender } = render(
            <DeliverModal {...defaultProps} isSuccess={true} />
        );
        expect(screen.getByAltText("alert icon")).toHaveAttribute(
            "src",
            "success.svg"
        );

        rerender(<DeliverModal {...defaultProps} isSuccess={false} />);
        expect(screen.getByAltText("alert icon")).toHaveAttribute(
            "src",
            "error.svg"
        );
    });

    it("닫기 버튼을 클릭하면 onClose가 호출도니다", () => {
        render(<DeliverModal {...defaultProps} />);
        fireEvent.click(screen.getByAltText("close modal"));

        expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
    });

    it("확인 버튼을 클릭하면 onConfirm이 호출된다", () => {
        render(<DeliverModal {...defaultProps} />);
        fireEvent.click(screen.getByText("확인"));

        expect(defaultProps.onConfirm).toHaveBeenCalledTimes(1);
    });

    it("취소 버튼을 클릭하면 onReturn이 호출된다.", () => {
        render(<DeliverModal {...defaultProps} isOpen={false} />);
        fireEvent.click(screen.getByAltText("취소"));

        expect(defaultProps.onReturn).toHaveBeenCalledTimes(1);
    });

    it("isOpen이 false일 경우 모달이 렌더링되지 않는다", () => {
        render(<DeliverModal {...defaultProps} isOpen={false} />);
        expect(screen.queryByText("테스트 제목")).not.toBeInTheDocument();
    });
});
