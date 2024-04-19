import { styled } from "@linaria/react";
import { Outlet } from "react-router-dom";
import CommonHeader from "./CommonHeader";

const MainLayout = () => {
  return (
    <MainContainer>
      <Content>
        <CommonHeader />
        <Outlet />
      </Content>
    </MainContainer>
  );
};

export default MainLayout;

const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  min-width: 1024px;
`;

const Content = styled.div`
  min-width: 1024px;
  min-height: 100vh;
  height: 100%;
  background-color: #eee;
  box-shadow: 6px 6px 10px 0px rgba(250, 250, 250, 0.1);
`;
