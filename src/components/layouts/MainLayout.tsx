import { styled } from "@linaria/react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <MainContainer>
      <Content>
        <Outlet />
      </Content>
    </MainContainer>
  );
};

export default MainLayout;

const MainContainer = styled.main`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  min-width: 1024px;
  min-height: 100vh;
  background-color: #475f94;
`;
