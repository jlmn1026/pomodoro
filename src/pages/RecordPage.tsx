import { styled } from "@linaria/react";
import {
  Button,
  Grid,
  GridItem,
  Input,
  Select,
  Option,
} from "@yamada-ui/react";
import { useRecord } from "../hooks/useRecord";
import { useCallback } from "react";

const RecordPage = () => {
  const { memo, setMemo, time, setTime, recordPomodoro, loading } = useRecord();

  const clearInput = useCallback(() => {
    setMemo("");
    setTime(45);
  }, [setMemo, setTime]);

  return (
    <Grid templateRows="32% 5% 32%" gap="md" height="100%" minHeight="600px">
      <GridItem w="full" h="full" rounded="md" />
      <GridItem
        w="full"
        h="full"
        rounded="md"
        display="flex"
        justifyContent="center"
        gap="8px"
      >
        <Select
          placeholder="時間を選択"
          background="#fff"
          color="#111"
          width="100px"
          defaultValue="45"
          value={String(time)}
          onChange={(value) => setTime(Number(value))}
        >
          <Option value="30">30</Option>
          <Option value="45">45</Option>
          <Option value="60">60</Option>
        </Select>
        <Input
          placeholder="めも"
          background="#fff"
          color="#111"
          width="500px"
          height="25px"
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
        />
        <Button
          colorScheme="red"
          variant="solid"
          onClick={() => {
            recordPomodoro();
            clearInput();
          }}
          disabled={loading}
        >
          記録する
        </Button>
      </GridItem>
      <GridItem
        w="full"
        h="full"
        rounded="md"
        display="flex"
        justifyContent="center"
      >
        AAAA
      </GridItem>
    </Grid>
  );
};

export default RecordPage;
