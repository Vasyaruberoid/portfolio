import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

function Footer() {
  return (
    <StyleFooter>
      <StyleMidFooter>
        <h1>007</h1>
        <p>+375299766537</p>
        <p>vasilij.starovojtov@mail.ru</p>
        <StyleA>
          <a href="https://github.com/Vasyaruberoid">
            <FaGithub color={"#000000"} size={"25px"} />
          </a>
          <a href="https://www.linkedin.com/in/%D0%B2%D0%B0%D1%81%D0%B8%D0%BB%D0%B8%D0%B9-%D1%81%D1%82%D0%B0%D1%80%D0%BE%D0%B2%D0%BE%D0%B9%D1%82%D0%BE%D0%B2-225534257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
            <CiLinkedin color={"#000000"} size={"25px"} />
          </a>
        </StyleA>
      </StyleMidFooter>
      <StyleBotFooter>
        <StyleNav>
          <li>Home</li>
          <li>About</li>
          <li>Tech Stack</li>
          <li>Projeccts</li>
          <li>Contact</li>
        </StyleNav>
        <div>
          <p>Designed and built by Pavan MG with Love & Coffee</p>
        </div>
      </StyleBotFooter>
    </StyleFooter>
  );
}

const StyleFooter = styled.footer`
  display: grid;
  width: 90%;
  height: 200px;
  h1 {
    float: left;
    font-size: 30px;
  }
  margin: 0px auto;
`;

const StyleNav = styled.nav`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding: 10px;
  gap: 30px;
`;

const StyleMidFooter = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 2px solid #ebeaed;
  width: 100%;
`;

const StyleBotFooter = styled.div`
  margin-top: 40px;
  display: flex;
  width: 85%;
  margin: 0 auto;
  justify-content: space-between;
`;

const StyleA = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  gap: 20px;
  float: right;
`;

export default Footer;
