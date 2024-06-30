import React from "react";
import styled from "styled-components";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoSass } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { SiGreensock } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";

const Skills = () => {
  return (
    <StyleWrapper>
      <div>
        <h1>My Tech Stack</h1>
        <h2> Technologies I’ve been working with recently</h2>
      </div>
      <StyleBox>
        <FaHtml5 color={"#E44F26"} size={"120px"} />
        <FaCss3Alt color={"#1572B6"} size={"120px"} />
        <IoLogoJavascript color={"#F5DE19"} size={"120px"} />
        <FaReact color={"#1572B6"} size={"120px"} />
        <SiRedux color={"#764ABC"} size={"120px"} />
        <BsBootstrapFill color={"#563D7C"} size={"120px"} />
        <RiTailwindCssFill color={"#44A8B3"} size={"120px"} />
        <IoLogoSass color={"#CD6799"} size={"120px"} />
        <FaGitAlt color={"#DE4C36"} size={"120px"} />
        <SiGreensock color={"#000000"} size={"120px"} />
        <VscVscode color={"#0065A9"} size={"120px"} />
        <FaGithub color={"#000000"} size={"120px"} />
      </StyleBox>
    </StyleWrapper>
  );
};

const StyleWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 500px;
  width: 100%;
  h1 {
    font-size: 48px;
  }
  h2 {
    font-size: 32px;
  }
`;

const StyleBox = styled.div`
  display: grid;
  margin-top: 50px;
  gap: 100px;
  grid-template-columns: repeat(6, 1fr);
  grid-template-row-columns: repeat(2, 1fr);
`;

export default Skills;
