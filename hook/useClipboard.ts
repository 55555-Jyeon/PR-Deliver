import { useState } from "react";

/**
 * 클립보드 복사 기능을 제공하는 커스텀 훅
 * 복사 성공 시 복사된 항목의 ID를 2초간 표시
 *
 * @returns {Object} 클립보드 관련 상태와 함수를 포함한 객체
 * @property {number|null} copyId - 현재 복사된 항목의 ID
 * @property {function} copyToClipboard - 텍스트를 클립보드에 복사하는 함수
 */

export const useClipboard = () => {
    const [copyId, setCopyId] = useState<number | null>(null);

    const copyToClipboard = (text: string, id: number) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopyId(id);
            setTimeout(() => setCopyId(null), 2000);
        });
    };

    return { copyId, copyToClipboard };
};
