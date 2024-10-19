import { WebhookListProps } from "./type";

const WebhookList = ({
    item,
    fullWebhookUrl,
    copyId,
    copyToClipboard,
}: WebhookListProps) => {
    return (
        <div className="w-full flex justify-between mt-4 px-4 py-3 bg-GREY-10 rounded-lg">
            <div className="flex-items flex-row">
                <p className="mr-2">{item.fullName}</p>
                <div className="w-1 h-3.5 flex-center relative">
                    <div className="w-1 h-1 bg-GREY-60 rounded-full absolute top-1.5" />
                </div>
                <p className="pl-2">{fullWebhookUrl}</p>
            </div>
            <button
                onClick={() =>
                    copyToClipboard(fullWebhookUrl, item.repositoryId)
                }
                className="w-[52px] h-8 bg-SYSTEM-black text-GREY-10 rounded-md font-semibold text-sm"
            >
                {copyId === item.repositoryId ? "복사됨" : "복사"}
            </button>
        </div>
    );
};
export default WebhookList;
