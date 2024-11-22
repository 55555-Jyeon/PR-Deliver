import { render, screen } from "@testing-library/react";
import StepTemplate from "../step-template";
import "@testing-library/jest-dom";

describe("Step_template Component", () => {
    it("STEP의 번호와 설명이 렌더링된다.", () => {
        render(
            <StepTemplate
                index={0}
                stepDesc="테스트 설명"
                imageSrc="/images/steps/repo/01.jpg"
                imageHeight={200}
                imageDesc="이미지 설명"
            />
        );

        expect(screen.getByText("STEP 1")).toBeInTheDocument();
        expect(screen.getByText("테스트 설명")).toBeInTheDocument();
    });

    it("이미지가 올바르게 렌더링되는지 확인", () => {
        render(
            <StepTemplate
                index={0}
                stepDesc="테스트 설명"
                imageSrc="/images/steps/repo/02.jpg"
                imageHeight={200}
                imageDesc="이미지 설명"
            />
        );

        const image = screen.getByAltText("each step's image");
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute("src", "/images/steps/repo/02.jpg");
    });
});
