import Image from "next/image";
import { WebhookListToggleProps } from "./type";

/**
 * 웹훅 리스트를 토글하는 버튼 컴포넌트
 * 클릭 시 웹훅 리스트를 표시하거나 숨기며, 화살표 아이콘의 방향이 변경됨
 *
 * @component
 * @param {Object} props
 * @param {boolean} props.isOpen - 웹훅 리스트의 표시 상태
 * @param {() => void} props.onClick - 토클 버튼 클릭 핸들러
 *
 * @returns
 */
const WebhookListToggle = ({ isOpen, onClick }: WebhookListToggleProps) => {
    return (
        <div
            className="w-[130px] h-[44px] font-semibold text-[16px] bg-SYSTEM-black text-GREY-10 rounded-lg flex-center cursor-pointer"
            onClick={onClick}
        >
            <p className="pr-2">웹훅 리스트</p>
            <Image
                src={"/light/icons/up-arrow.svg"}
                alt="UP"
                width={20}
                height={20}
                className={isOpen ? "transform scale-y-[-1]" : ""}
            />
        </div>
    );
};
export default WebhookListToggle;
