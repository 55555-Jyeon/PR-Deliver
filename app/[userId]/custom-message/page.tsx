import { TAB_LIST } from "@/constants/user/nav-tab";
import TabTitle from "../_components/tab-title";

const CustomMessage = () => {
    return (
        <div className="p-10">
            <TabTitle tabNum={TAB_LIST[1]} />
            <div className="mt-14 ml-10">{/* 안에 내용물 */}</div>
        </div>
    );
};
export default CustomMessage;
