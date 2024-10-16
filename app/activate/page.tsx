import { getFetchEnc } from "@/apis/messenger";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const ActivatePage = () => {
    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    useEffect(() => {
        if (token) {
            activeAccount(token);
        }
    });
    const activeAccount = async (token: string) => {
        const response = await getFetchEnc(token);
        console.log(response, "Enc Success");

        if (!response) {
            throw new Error("활성화 실패");
        }

        alert(response || "메신저 등록이 완료되었습니다.");
    };

    return <div>메신저 등록 중입니다....</div>;
};
export default ActivatePage;
