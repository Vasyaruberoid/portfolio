import React from "react";
import styled, { keyframes } from "styled-components";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaDribbble } from "react-icons/fa";
import { FaSms } from "react-icons/fa";

const Communicate = () => {
  return (
    <WrapperStyle>
      <ContainerWithMe>
        <h1>Connect with me:</h1>
        <p>Satisfied with me? Please contact me</p>
        <StyleA>
          <a href="https://github.com/Vasyaruberoid">
            <FaGithub color={"#000000"} size={"25px"} />
          </a>
          <a href="https://www.linkedin.com/in/%D0%B2%D0%B0%D1%81%D0%B8%D0%BB%D0%B8%D0%B9-%D1%81%D1%82%D0%B0%D1%80%D0%BE%D0%B2%D0%BE%D0%B9%D1%82%D0%BE%D0%B2-225534257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
            <CiLinkedin color={"#000000"} size={"25px"} />
          </a>
          <a href="h">
            <FaFacebookSquare color={"#000000"} size={"25px"} />
          </a>
          <a href="h">
            <FiInstagram color={"#000000"} size={"25px"} />
          </a>
          <a href="h">
            <FaDribbble color={"#000000"} size={"25px"} />
          </a>
          <a href="h">
            <FaSms color={"#000000"} size={"25px"} />
          </a>
        </StyleA>
      </ContainerWithMe>
      <ContainerInput>
        <h1>Contact me, let’s make magic together</h1>
        <form>
          <input className="inputName" type="email" placeholder="Name:" />
          <input className="inputEmail" type="email" placeholder="Email:" />
          <input className="inputText" type="text" placeholder="Message:" />
        </form>
        <BtnStyleSend>Send</BtnStyleSend>
      </ContainerInput>
    </WrapperStyle>
  );
};

const WrapperStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 85%;
  max-width: 100%;
  height: 100vh;
  .inputName {
    width: 100%;
    background-color: rgba(245, 245, 245, 1);
    border-radius: 8px;
    height: 60px;
  }
  .inputEmail {
    width: 100%;
    border-radius: 8px;
    height: 60px;
    margin-top: 20px;
    background-color: rgba(245, 245, 245, 1);
  }
  .inputText {
    width: 100%;
    border-radius: 8px;
    height: 100px;
    margin-top: 20px;
    background-color: rgba(245, 245, 245, 1);
  }
    @media(max-width:768px){
    flex-direction: column;
    align-items: center;
    text-align: center;
    }
`;

const ContainerWithMe = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const StyleA = styled.div`
  display: flex;

  gap: 20px;
  float: right;
`;
const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }

  70% {
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
`;

const BtnStyleSend = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
   width: 180px;
  height: 50px;

  margin-top: 20px;
  animation: ${pulse} 1.5s infinite; / Animation duration and repetition /
`;

export default Communicate;
