import React from "react";
import styled from "styled-components";
import Group from "../group/Group";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";
import img from "../../icons/I.jpg";
import Communicate from "../comunnicate/Communicate";

function Main() {
  return (
    <StyleMain>
      <StyleBox>
        <StyleH1>
          Hi 👋,
          <p>My name is</p>
          <p>Vasiliy Starovoytov</p>
          <p>I build things for web</p>
        </StyleH1>
        <div>
          <StyleImg src={img} alt="myPhoto" />
        </div>
      </StyleBox>
      <Group />
      <Skills />
      <Projects />
      <Communicate/>
    </StyleMain>
  );
}

const StyleMain = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  margin-top: 200px;
`;

const StyleBox = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  height: 100vh;
  width: 1300px;
  margin: 0 auto;
  @media (max-width: 360px) {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
   text-align: center;
  }
`;

const StyleImg = styled.img`
  width: 100%;
  max-width:350px;
  height: 100%
  max-height:350px;
  border-radius: 50%;
  border: 9px solid black;
  object-fit: cover;

  @media (max-width: 1420px) {
    width: 80%;
    margin-top: 30px;
  }
  @media (max-width: 1028px) {
    width: 80%;
  }
  @media (max-width: 768px) {
    width: 80%;
    margin-top: 30px;
  }
  @media (max-width: 360px) {
    width: 60%;
    align-items: center;

  }
`;

const StyleH1 = styled.h1`
  font-size: 45px;

  @media (max-width: 360px) {
    font-size: 40px;
    line-height: 1.3;
  }

  @media (max-width: 768px) {
    font-size: 45px;
    line-height: 1.2;
  }

  @media (max-width: 1028px) {
    font-size: 32px;
    line-height: 1.1;
    padding-left: 40px;
    margin-top: 40px;
  }
`;

export default Main;
