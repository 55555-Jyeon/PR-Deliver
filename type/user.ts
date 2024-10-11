/**
 *  * 사용자 정보 타입
 *
 * @typedef {Object} UserInfoType
 * @property {string} message - 응답 메시지
 * @property {string} status - 응답 상태
 * @property {Object} data - 회원 데이터
 * @property {number} data.memberId - 회원 ID
 * @property {string} data.login - 회원의 깃허브 아이디
 * @example
 * // 예시 데이터
 * const exampleUserInfo: UserInfoType = {
 *     message: "정상적으로 조회 되었습니다",
 *     status: "Success",
 *     data: {
 *         memberId: 3,
 *         login: "55555-Jyeon"
 *     }
 * };
 * */
export type UserInfoType = {
    message: string;
    status: string;
    data: {
        memberId: number;
        login: string;
    };
};

export type MyRepositoryListType = {
    repositoryId: number;
    fullName: string;
    ownerLogin: string;
    webhookUrl: string;
    isActiveWebhook: boolean;
};
