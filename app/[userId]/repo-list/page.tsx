import Image from "next/image";

const RepositoryList = () => {
  const repositories = [
    { name: "레포지토리1", owner: "소유자1", assignee: "할당자1" },
    { name: "레포지토리2", owner: "소유자2", assignee: "할당자2" },
    // 필요한 만큼 데이터를 추가하세요.
  ];

  return (
    <div className="p-10">
      <div className="flex flex-row ">
        <Image
          width={32}
          height={32}
          src={"/light/icons/list.svg"}
          alt="list icon"
        />
        <h1 className="text-[32px] font-bold ml-[17px]">레포지토리 목록</h1>
      </div>
      <table className="min-w-full max-w-[1280px]">
        <thead>
          <tr>
            <th className="p-2 text-left">레포지토리 이름</th>
            <th className="p-2 text-left">소유자</th>
            <th className="p-2 text-left">할당자</th>
          </tr>
        </thead>
        <tbody>
          {repositories.map((repo, index) => (
            <tr key={index} className="bg-SYSTEM-white border b-GREY-20">
              <td className="p-2">{repo.name}</td>
              <td className="p-2">{repo.owner}</td>
              <td className="p-2">{repo.assignee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default RepositoryList;
