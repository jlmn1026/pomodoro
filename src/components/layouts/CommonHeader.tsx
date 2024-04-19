import { styled } from "@linaria/react";
import { Link } from "react-router-dom";

const CommonHeader = () => {
  return (
    <HeaderRoot>
      <HeadLink to="/">Home</HeadLink>
      <HeadLink to="/record">Record</HeadLink>
    </HeaderRoot>
  );
};

export default CommonHeader;

const HeaderRoot = styled.header`
  display: flex;
  height: 36px;
  background-color: #374f84;
`;

const HeadLink = styled(Link)`
  padding-top: 4px;
  text-align: center;
  width: 120px;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #2b3f6b;
  }
`;
