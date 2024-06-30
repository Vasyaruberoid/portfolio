import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Header = () => {
  return (
    <StyleHeader>
      <StyleH1>007</StyleH1>
      <StyleNav>
        <li>Home</li>
        <li>About</li>
        <li>Tech Stack</li>
        <li>Projeccts</li>
        <li>Contact</li>
      </StyleNav>
      <StyleA>
        <a href="https://github.com/Vasyaruberoid">
          <FaGithub color={"#000000"} size={"25px"} />
        </a>
        <a href="https://www.linkedin.com/in/%D0%B2%D0%B0%D1%81%D0%B8%D0%BB%D0%B8%D0%B9-%D1%81%D1%82%D0%B0%D1%80%D0%BE%D0%B2%D0%BE%D0%B9%D1%82%D0%BE%D0%B2-225534257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
          <CiLinkedin color={"#000000"} size={"25px"} />
        </a>
      </StyleA>
    </StyleHeader>
  );
};

const StyleHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 85%;
  height: 100px;
  li {
    font-size: 20px;
  }
  margin: 20px auto;
`;

const StyleH1 = styled.h1`
  float: left;
  font-size: 30px;
`;

const StyleNav = styled.nav`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding: 10px;
  gap: 30px;
   &:hover{
  color:gold;
  }
`;

const StyleA = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  gap: 20px;
  float: right;
 
`;

export default Header;
