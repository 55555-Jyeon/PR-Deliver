import { WebhookListContentProps } from "./type";
import WebhookList from "./webhook-list";

/**
 * 웹훅 목록을 표시하는 컴포넌트
 * 각 레포지토리의 웹훅 정보를 리스트 형태로 렌더링
 *
 * @component
 * @param {Object} props - 컴포넌트 props
 * @param {Array<Repository>} props.repoInfo - 레포지토리 정보 배열
 * @param {number|null} props.copyId - 현재 복사된 항목의 ID
 * @param {function} props.copyToClipboard - 웹훅 URL을 클립보드에 복사하는 함수
 */

const WebhookListContent = ({
    repoInfo,
    copyId,
    copyToClipboard,
}: WebhookListContentProps) => {
    return (
        <div className="w-full flex justify-start">
            {repoInfo.map((item) => {
                const fullWebhookUrl = `${process.env.NEXT_PUBLIC_API_URL}/${item.webhookUrl}`;
                return (
                    <WebhookList
                        key={item.repositoryId}
                        item={item}
                        fullWebhookUrl={fullWebhookUrl}
                        copyId={copyId}
                        copyToClipboard={copyToClipboard}
                    />
                );
            })}
        </div>
    );
};

export default WebhookListContent;
