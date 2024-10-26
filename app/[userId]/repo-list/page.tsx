import TabTitle from "../_components/tab-title";
import { TAB_LIST } from "@/constants/user/nav-tab";
import FetchRepositoryList from "./_components/fetch-repo-list";

const RepositoryList = () => {
    return (
        <div className="p-10">
            <TabTitle tabNum={TAB_LIST[0]} />
            <ul className="w-[1280px] space-y-3 text-[16px] mt-14">
                <FetchRepositoryList />
            </ul>
        </div>
    );
};
export default RepositoryList;
