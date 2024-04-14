import { useCallback, useState } from "react";
import { recordPomorodoTime } from "../storage/record";

export const useRecord = () => {
  const [memo, setMemo] = useState("");
  const [time, setTime] = useState(45);
  const [loading, setLoading] = useState(false);

  const recordPomodoro = useCallback(() => {
    try {
      setLoading(true);
      recordPomorodoTime(time, memo, new Date());
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [memo, time]);

  return { memo, setMemo, time, setTime, recordPomodoro, loading } as const;
};
