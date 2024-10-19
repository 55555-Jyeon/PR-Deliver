import { MyRepositoryListType } from "@/type/user";

export type WebhookListProps = {
    item: MyRepositoryListType;
    fullWebhookUrl: string;
    copyId: number | null;
    copyToClipboard: (fullWebhookUrl: string, repositoryId: number) => void;
};
