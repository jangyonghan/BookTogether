import dayjs from "dayjs";
import { useBible } from "../hook/useBible";

export default function Test() {
  const { data, isLoading, isError } = useBible();

  const CreatDate = dayjs(data?.createdAt).format("YYYY.MM.DD HH:mm:ss");
  const Update = dayjs(data?.updateAt).format("YYYY.MM.DD HH:mm:ss");
  if (!data) return <div>데이터가 없습니다.</div>;
  return (
    <>
      <div>{data?.text}</div>
      <div>{data?.verse}</div>
      <div>{CreatDate}</div>
    </>
  );
}
