import React from "react";
import styled from "styled-components";

const HeaderWapper = styled.div`
  width: 100vw;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
`;
const HeaderText = styled.div`font-size: 36px;`;

const Header = () => (
  <HeaderWapper>
    <HeaderText>Random Beer 🍺</HeaderText>
  </HeaderWapper>
);

export default Header;
