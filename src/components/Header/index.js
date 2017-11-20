/*eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWapper = styled.div`
  width: 100vw;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;

  a {
    text-decoration: none;
    color: black;
  }
`;
const HeaderText = styled.div`font-size: 36px;`;

const Header = () => (
  <HeaderWapper>
    <HeaderText>
      <Link to="/">Random Beer 🍺</Link>
    </HeaderText>
  </HeaderWapper>
);

export default Header;
