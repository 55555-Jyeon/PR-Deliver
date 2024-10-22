import { useState } from "react";

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
