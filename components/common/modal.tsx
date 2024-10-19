import Image from "next/image";
import SUCCESS from "@/public/icons/success.svg";
import ERROR from "@/public/icons/error.svg";

const DeliverModal = () => {
    return (
        <div className="relative w-[360px] h-[274px] rounded-2xl p-5 border">
            <Image
                width={24}
                height={24}
                src={"/icons/close.svg"}
                alt="close modal"
                className="absolute right-5"
            />
            <div className="flex-center flex-col mt-1">
                <div className="w-[60px] h-[60px] rounded-full flex-center bg-[#FFFAFA]">
                    <Image
                        width={24}
                        height={24}
                        src={ERROR}
                        alt="alert icon"
                    />
                </div>
                <div className="flex-center flex-col mt-3 mb-8">
                    <h1 className="my-3 text-[18px] font-bold">modal title</h1>
                    <p className="text-[14px]">modal description</p>
                </div>
                <button>confirm</button>
            </div>
        </div>
    );
};
export default DeliverModal;
