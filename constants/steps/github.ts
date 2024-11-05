import { StepType } from "../type";

export const GitHubWebHook: StepType[] = [
    {
        stepDesc: "Settings → Webhooks",
        imageSrc: "/images/steps/web-hook/github/01.jpg",
        imageHeight: 595,
        imageDesc: "Add Webhooks 버튼 클릭",
    },
    {
        stepDesc: "Playload URL 부분에 우리 서버에서 발급한 URL 입력",
        imageSrc: "/images/steps/web-hook/github/02.jpg",
        imageHeight: 898,
    },
    {
        stepDesc:
            "Which events would you like to trigger this webhook? / 이 웹훅을 어떤 이벤트에서 실행하도록 설정하시겠습니까?",
        imageSrc: "/images/steps/web-hook/github/03.jpg",
        imageHeight: 283,
        imageDesc: "세 번째 선택지를 클릭",
    },
    {
        stepDesc: "선택지 중 Pull Requests 선택",
        imageSrc: "/images/steps/web-hook/github/04.jpg",
        imageHeight: 283,
    },
];
