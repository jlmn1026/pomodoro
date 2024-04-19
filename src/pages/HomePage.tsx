import { styled } from "@linaria/react";
import RecordCard from "../components/cards/RecordCard";

const Home = () => {
  return (
    <div>
      <RecordLine>
        <RecordCard title="本日の累計集中時間" value="5.5時間" />
        <RecordCard title="１週間の累計集中時間" value="13.5時間" />
      </RecordLine>

      <div>TODO: Gprah 2週間分のポモドロ回数 詳細な記録画面</div>
      <div>TODO: Pomodoro記録画面 </div>
      <div>TODO: 全体のConfig </div>
      <div>TODO: 今日の記録 </div>
      <div>TODO: Timer画面 </div>
    </div>
  );
};

export default Home;

const RecordLine = styled.div`
  margin-top: 16px;
  display: flex;
  padding: 4px;
  gap: 8px;
`;
