import { fireEvent, render, screen } from "@testing-library/react";
import Overlay from "../overlay";
import "@testing-library/jest-dom";

describe("overlay component", () => {
    it("isOpen이 ture일 때 overlay가 렌더되는지 확인", () => {
        render(
            <Overlay isOpen={true} onClick={jest.fn()}>
                <div>Test Content</div>
            </Overlay>
        );

        expect(screen.getByRole("dialog")).toBeInTheDocument();
        expect(screen.getByText("Test Content")).toBeInTheDocument();
    });

    it("isOpen이 false일 때 overlay가 렌더링되지 않는지 확인", () => {
        render(
            <Overlay isOpen={false} onClick={jest.fn()}>
                <div>Test Content</div>
            </Overlay>
        );

        expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    it("overlay가 열리면 스크롤이 비활성화되고 닫히면 다시 활성화 되는지 확인", () => {
        const { rerender } = render(
            <Overlay isOpen={true} onClick={jest.fn()}>
                <div>Test Component</div>
            </Overlay>
        );

        expect(document.body.style.overflow).toBe("hidden");

        rerender(
            <Overlay isOpen={false} onClick={jest.fn()}>
                <div>Test Component</div>
            </Overlay>
        );
        expect(document.body.style.overflow).toBe("unset");
    });

    it("overlay 배경을 클릭하면 onClick 함수가 호출되는지 확인", () => {
        const handleClick = jest.fn();
        render(
            <Overlay isOpen={true} onClick={handleClick}>
                <div>Test Component</div>
            </Overlay>
        );

        fireEvent.click(screen.getByRole("dialog"));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("overlay 내부 콘텐츠 클릭 시 이벤트가 전파되지 않는지 확인", () => {
        const handleClick = jest.fn();
        render(
            <Overlay isOpen={true} onClick={handleClick}>
                <div data-testid="content">Test Component</div>
            </Overlay>
        );

        fireEvent.click(screen.getByTestId("content"));
        expect(handleClick).not.toHaveBeenCalled();
    });

    it("children이 올바르게 렌더링되는지 확인", () => {
        render(
            <Overlay isOpen={true} onClick={jest.fn()}>
                <div data-testid="child">children content</div>
            </Overlay>
        );

        expect(screen.getByTestId("child")).toBeInTheDocument();
        expect(screen.getByText("children content")).toBeInTheDocument();
    });
});
