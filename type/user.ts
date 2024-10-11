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
