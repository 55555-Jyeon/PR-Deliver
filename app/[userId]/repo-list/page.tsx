import { ShortenText } from "@/utils/shorten-text";
import TabTitle from "../_components/tab-title";
import { TAB_LIST } from "@/constants/user/nav-tab";

const RepositoryList = () => {
  const repositories = [
    { name: "레포지토리1", owner: "소유자1", assignee: "할당자1" },
    { name: "레포지토리2", owner: "소유자2", assignee: "할당자2" },
  ];

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
        {repositories.map((repo, index) => (
          <li
            key={index}
            className="w-full h-[68px] flex-items bg-SYSTEM-white rounded-[12px] px-6 my-3 text-SYSTEM-black"
          >
            <p className="flex-[3]">{ShortenText(repo.name, 50)}</p>
            <p className="flex-[1.5]">{repo.owner}</p>
            <p className="flex-[1.5]">{repo.assignee}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RepositoryList;
