import TabTitle from "../_components/tab-title";
import { TAB_LIST } from "@/constants/user/nav-tab";
import FetchRepositoryList from "./_components/fetch-repo-list";

const RepositoryList = () => {
    return (
        <div className="p-10">
            <TabTitle tabNum={TAB_LIST[0]} />
            <ul className="w-[1280px] space-y-3 text-[16px] mt-14">
                {/* table header */}
                <li className="flex rounded-[12px] px-6 font-medium text-GREY-60">
                    <p className="flex-[3]">레포지토리 이름</p>
                    <p className="flex-[1.5]">소유자</p>
                    <p className="flex-[1.5]">할당자</p>
                </li>
                {/* table body(list) */}
                <FetchRepositoryList />
            </ul>
        </div>
    );
};
export default RepositoryList;
