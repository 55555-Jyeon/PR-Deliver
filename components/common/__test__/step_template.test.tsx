import { render, screen } from "@testing-library/react";
import StepTemplate from "../step-template";
import "@testing-library/jest-dom";

// next/image 모킹
jest.mock("next/image", () => ({
    __esModule: true,
    default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
        <img {...props} />
    ),
}));

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

    it("이미지 설명이 렌더링되는지 확인", () => {
        render(
            <StepTemplate
                index={2}
                stepDesc="테스트 설명"
                imageSrc="/images/steps/repo/02.jpg"
                imageHeight={200}
                imageDesc="이미지 설명"
            />
        );

        expect(screen.getByText("이미지 설명")).toBeInTheDocument();
    });

    it("이미지 설명이 없을 경우 렌더링되지 않는지 확인", () => {
        render(
            <StepTemplate
                index={3}
                stepDesc="테스트 설명"
                imageSrc="/images/steps/repo/02.jpg"
                imageHeight={200}
                imageDesc=""
            />
        );

        expect(screen.queryByText("이미지 설명")).not.toBeInTheDocument();
    });

    it("이미지 높이가 스타일로 적용되는지 확인", () => {
        render(
            <StepTemplate
                index={4}
                stepDesc="테스트 설명"
                imageSrc="/images/steps/repo/02.jpg"
                imageHeight={300}
                imageDesc="이미지 설명"
            />
        );

        const imageWrapper = screen.getByRole("img").parentElement;
        expect(imageWrapper).toHaveStyle("height: 300px");
    });
});
