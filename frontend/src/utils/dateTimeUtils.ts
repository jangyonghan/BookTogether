import dayjs, { Dayjs } from "dayjs";

export const getEndDate = (
  selectedDate: string, // 사용자가 선택한 날짜
  startTime: Dayjs | null, // 시작 시간
  endTime: Dayjs | null // 종료시간
): Dayjs | null => {
  if (!startTime || !endTime) return null;

  const selectedDateObj = dayjs(selectedDate, "YYYY-MM-DD");
  const startHour = startTime.hour();
  const endHour = endTime.hour();

  // pm에서 am으로 넘어가면 종료 날짜를 다음날로!!
  if (startHour >= 12 && endHour < 12) {
    return selectedDateObj.add(1, "day");
  }

  // 같은 날이면 그대로 유지
  return selectedDateObj;
};

// day와 time을 합쳐서 YYYY-MM-DD + 시간으로 만듦
export const combineDateTime = (date: Dayjs | null, time: Dayjs | null) => {
  if (!date || !time) return null;

  return date
    .hour(time.hour())
    .minute(time.minute())
    .second(0)
    .millisecond(0)
    .toISOString(); // 날짜형식 iso 8691형식으로 변경하는 메서드
};
