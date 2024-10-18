"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function ActivatePage() {
    const searchParams = useSearchParams();
    const [isActivated, setIsActivated] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const encryptedWebhookUrl = searchParams.get("encryptedWebhookUrl");
        if (encryptedWebhookUrl) {
            activateMessenger(encryptedWebhookUrl);
        }
    }, [searchParams]);

    const activateMessenger = async (encryptedWebhookUrl: string) => {
        try {
            const response = await fetch(
                `https://www.pr-deliver.shop/messengers/applies?encryptedWebhookUrl=${encodeURIComponent(
                    encryptedWebhookUrl
                )}`,
                {
                    method: "GET",
                }
            );

            if (!response.ok) {
                throw new Error("Activation failed");
            }

            const data = await response.json();
            setIsActivated(true);
            console.log(data);
        } catch (error) {
            console.error("활성화 실패:", error);
            setError("메신저 등록에 실패했습니다.");
        }
    };

    if (error) {
        return <div>{error}</div>;
    }

    if (isActivated) {
        return <div>메신저 등록이 완료되었습니다!</div>;
    }

    return <div>메신저 등록 중입니다...</div>;
}
