import { UserDashboardOptionsType } from "../type";

export const USER_DASHBOARD_OPTIONS: UserDashboardOptionsType[] = [
    {
        icon: "/icons/pen.svg",
        title: "레포지토리 등록하기",
        subText: "등록된 레포지토리가 없다면?",
        url: "/repository",
    },
    {
        icon: "/icons/memo.svg",
        title: "레포지토리 목록보기",
        subText: "등록한 레포지토리 확인하기",
        url: (userId: string) => `/${userId}/repo-list`,
    },
];
