import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import Modal from "../modal/Modal";

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
          <Modal
            title={"Hello, thank you for visiting my portfolio made with love"}
            decription={"This portfolio will be updated"}
            name={"Home"}
          />
          <Modal
            title={"The purpose of my life is developmente"}
            decription={"A young guy without bad sports habits"}
            name={"About"}
          />
          <Modal
            title={"My stack is constantly growing"}
            decription={
              "HTML,CSS,SASS,LESS,Javscript,ES6,TypeScript,React,NodeJs,Github,Firebase"
            }
            name={"Tech Stack"}
          />
          <Modal
            title={"My projects is constantly growing"}
            decription={"I make Calculator, Bike Shop, after soon...."}
            name={"Project"}
          />
          <Modal
            title={"My contacts"}
            decription={
              "Viber: +375299766537; What'sap: +79400568432; Telegramm:https://t.me/Vasiliy_starovojtov "
            }
            name={"Contact"}
          />
        </StyleNav>
        <div>
          <p>Designed and built by Vasiliy Starovoytov with Love & Coffee</p>
        </div>
      </StyleBotFooter>
    </StyleFooter>
  );
}

const StyleFooter = styled.footer`
  bottom: 0;
  left: 0;
  width: 100%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    text-align:center;
  }
`;

const StyleNav = styled.nav`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding: 10px;
  gap: 30px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const StyleMidFooter = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 2px solid #ebeaed;
  width: 100%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const StyleBotFooter = styled.div`
  margin-top: 40px;
  display: flex;
  width: 85%;
  margin: 0 auto;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const StyleA = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  gap: 20px;
  float: right;
`;

export default Footer;
