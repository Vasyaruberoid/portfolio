import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import Burger from "../burger/Burger";
import Modal from "../modal/Modal";

const Header = () => {
  return (
    <StyleHeader>
      <StyleH1>007</StyleH1>
      <StyleMenu>
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
        <Burger />
        <StyleA>
          <a href="https://github.com/Vasyaruberoid">
            <FaGithub color={"#000000"} size={"25px"} />
          </a>
          <a href="https://www.linkedin.com/in/%D0%B2%D0%B0%D1%81%D0%B8%D0%BB%D0%B8%D0%B9-%D1%81%D1%82%D0%B0%D1%80%D0%BE%D0%B2%D0%BE%D0%B9%D1%82%D0%BE%D0%B2-225534257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
            <CiLinkedin color={"#000000"} size={"25px"} />
          </a>
        </StyleA>
      </StyleMenu>
    </StyleHeader>
  );
};

const StyleHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 85%;
  height: 100px;
  font-size: 20px;
  margin: 20px auto;
  @media (max-width: 1420px) {
    width: 90%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (max-width: 360px) {
    flex-direction: column;
  }
`;

const StyleH1 = styled.h1`
  font-size: 30px;
  left: 0;
  top: 0;
  margin: 0;
`;

const StyleNav = styled.nav`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  gap: 30px;
  @media (max-width: 1420px) {
    display: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 360px) {
    display: none;
  }
`;

const StyleA = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  float: right;
  @media (max-width: 1420px) {
    display: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 360px) {
    display: none;
  }
`;

const StyleMenu = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
`;

export default Header;
