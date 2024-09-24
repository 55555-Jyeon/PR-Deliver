import { DeliverButtonProps } from "./type";
import "@/styles/button.css";

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
