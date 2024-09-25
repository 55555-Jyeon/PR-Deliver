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
 *
 * @returns {JSX.Element} 버튼 컴포넌트를 반환
 * 
 * @example 
 * // 사용 예시 
 * <DeliverButton
        length="smaller"
        onClick={() => {
          alert("clicked!");
        }}
        label="register"
      />
 */
const DeliverButton = ({
  isActive = false,
  onClick,
  length,
  label,
}: DeliverButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`relative h-[52px] rounded-[10px] overflow-hidden group ${
        isActive ? "text-GREY-10 bg-BRAND-50" : "text-GREY-20 bg-GREY-30"
      } ${length === "full" ? "w-[416px]" : "w-[200px]"}`}
    >
      <span className="custom-hover-effect" />
      <p className="relative z-10">{label}</p>
    </button>
  );
};
export default DeliverButton;
