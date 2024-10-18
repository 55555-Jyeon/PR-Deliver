import { getFetchEnc } from "@/apis/messenger";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export type EncryptedWebhookUrlPageProps = {
    params: {
        encryptedWebhookUrl: string;
    };
};

const EncryptedWebhookUrlPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const encryptedWebhookUrl = searchParams.get("encryptedWebhookUrl");

    console.log(encryptedWebhookUrl);

    useEffect(() => {
        const activateWebhook = async () => {
            if (!encryptedWebhookUrl) {
                alert("잘못된 URL입니다.");
                return;
            }

            const response = await getFetchEnc(encryptedWebhookUrl);
            console.log(response);
            if (response) {
                alert(
                    "Webhook 활성화에 성공했습니다. 메인페이지로 이동합니다."
                );
                router.push("/repository");
            } else {
                throw new Error("활성화에 실패했습니다.");
            }
        };

        if (encryptedWebhookUrl) activateWebhook();
    }, [encryptedWebhookUrl, router]);

    return <div>처리중....</div>;
};

export default EncryptedWebhookUrlPage;
