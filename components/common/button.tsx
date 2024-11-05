import { DeliverButtonProps } from "./type";
import "@/styles/button.css";

/**
 * @component DeliverButton
 * @description 공용으로 사용될 버튼 컴포넌트
 *
 * @param {boolean} [isActive = false] - 버튼의 활성화 여부를 나타내며 기본값은 false
 * @param {function} onClick - 버튼 클릭 시 호출되는 이벤트 핸들러
 * @param {string} length - 버튼의 너비/길이를 결정하며 smaller와 full 둘 중 하나 선택 가능
 * @param {string} label - 버튼에 표시될 텍스트
 * @param {string} type - 버튼의 타입을 지정. 기본값은 button
 * @param {boolean} [isModal = false] - 버튼 종류를 결정하는 플래그. true일 경우 모달 버튼 스타일 적용
 * @param {string} [buttonBgColor] - isModal이 true일 경우, 적용될 버튼의 배경 색상
 * @param {string} [buttonTextColor] - isModal이 ture일 경우, 적용될 버튼의 글자 색상
 * @param {boolean} [buttonActive = true] - 버튼의 활성화의 제어를 결정하며 기본값은 true  

 * @returns {JSX.Element} 버튼 컴포넌트를 반환
 */
const DeliverButton = ({
    isActive = false,
    onClick,
    length,
    label,
    type = "button",
    isModal,
    buttonBgColor,
    buttonTextColor,
    buttonActive = true,
}: DeliverButtonProps) => {
    // 버튼이 적용될 위치에 따라 달라지는 css
    const baseCSS = "relative overflow-hidden group";
    const modalCSS = `w-[320px] h-[44px] rounded-lg ${buttonTextColor} ${buttonBgColor}`;
    const confirmButtonCSS = `h-[52px] rounded-[10px] ${
        isActive ? "text-GREY-10 bg-BRAND-50" : "text-GREY-20 bg-GREY-30"
    } ${length === "full" ? "w-[416px]" : "w-[200px]"}`;

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseCSS} ${isModal ? modalCSS : confirmButtonCSS}`}
        >
            <span className={buttonActive ? "custom-hover-effect" : ""} />
            <p className="relative z-10">{label}</p>
        </button>
    );
};
export default DeliverButton;

