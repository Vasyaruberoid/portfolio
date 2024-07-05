import React from "react";
import styled from "styled-components";
import Group from "../group/Group";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";
import img from '../../icons/I.jpg';

function Main() {
  return (
    <StyleMain>
      <StyleBox>
        <StyleH1>
          Hi 👋, My name is Vasiliy Starovoytov I build things for web
        </StyleH1>
        <div>
          
          <StyleImg src={img} alt="myPhoto" />
        </div>
      </StyleBox>
      <Group />
      <Skills />
      <Projects />
    </StyleMain>
  );
}

const StyleMain = styled.main`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const StyleBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1250px;
  height: 350px;
  margin-top: 200px;
 
`;

const StyleImg = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 9px solid black;
object-fit: cover;
 
`;

const StyleH1 = styled.h1`
  width: 30vw;
  font-size: 55px;
`;

export default Main;
