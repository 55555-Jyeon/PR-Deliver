import { TAB_LIST } from "@/constants/user/nav-tab";
import TabTitle from "../_components/tab-title";
import FetchRepositoryList from "./_components/fetch-repo-list";

const RepositoryList = () => {
    return (
        <div className="p-10">
            <TabTitle tabNum={TAB_LIST[0]} />
            <ul className="relative text-[16px] mt-14 ml-10">
                <FetchRepositoryList />
            </ul>
        </div>
    );
};
export default RepositoryList;
