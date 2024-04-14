import dayjs from "dayjs";

const getRecordKey = (time: string) => {
  return `record-${time}`;
};

export const recordPomorodoTime = (
  time: number,
  memo: string,
  targetDateTime: Date
) => {
  const targetDate = dayjs(targetDateTime).format("YYYY-MM-DD");
  const recordKey = getRecordKey(targetDate);

  const records = JSON.parse(localStorage.getItem(recordKey) || "[]");

  localStorage.setItem(
    recordKey,
    JSON.stringify([
      ...records,
      {
        time,
        memo,
        targetDateTime,
      },
    ])
  );
};
