/* eslint-disable no-unused-vars */

import { MyRepositoryListType } from "@/type/user";

export type WebhookListProps = {
    item: MyRepositoryListType;
    fullWebhookUrl: string;
    copyId: number | null;
    copyToClipboard: (fullWebhookUrl: string, repositoryId: number) => void;
};

export type WebhookListToggleProps = {
    isOpen: boolean;
    onClick: () => void;
};

export type WebhookListContentProps = {
    repoInfo: MyRepositoryListType[];
    copyId: number | null;
    copyToClipboard: (text: string, id: number) => void;
};
