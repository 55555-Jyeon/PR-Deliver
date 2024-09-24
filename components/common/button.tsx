import { DeliverButtonProps } from "./type";

const DeliverButton = ({
  isActive = false,
  onClick,
  length,
  label,
}: DeliverButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`h-[52px] rounded-[10px] transition-all duration-300 ${
        isActive
          ? "text-GREY-10 bg-BRAND-50"
          : "text-GREY-20 bg-GREY-30  hover:text-GREY-10 hover:bg-BRAND-50"
      } ${length === "full" ? "w-[416px]" : "w-[200px]"}`}
    >
      {label}
    </button>
  );
};
export default DeliverButton;
