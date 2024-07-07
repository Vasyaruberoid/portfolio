import React from "react";
import styled from "styled-components";
import { AiOutlineEnvironment } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import { HiMiniBuildingOffice } from "react-icons/hi2";

const Group = () => {
  return (
    <StyleWrapper>
      <div>
        <h2>About Me</h2>
        <p>
          The Generator App is an online tool that helps you to export
          ready-made templates ready to work as your future website. It helps
          you to combine slides, panels and other components and export it as a
          set of static files: HTML/CSS/JS.
        </p>
      </div>
      <StyleWrapperWork>
        <h2>Work Experience</h2>
        <StyleBlock>
          <h2>Intern Front Developer</h2>
          <StyleBtn>Full Time</StyleBtn>
        </StyleBlock>
        <StyleDiv>
          <p>
            <HiMiniBuildingOffice />
            Rolling Scopes
          </p>
          <p>
            <AiOutlineEnvironment />
            Minsk
          </p>
          <p>
            <FaCalendarAlt />
            October 2022 - January 2023
          </p>
        </StyleDiv>
        <StyleBlock>
          <h2>Junior Front Developer</h2>
          <StyleBtn>Intership</StyleBtn>
        </StyleBlock>
        <StyleDiv>
          <p>
            <HiMiniBuildingOffice />
            Rolling Scopes
          </p>
          <p>
            <AiOutlineEnvironment />
            Minsk
          </p>
          <p>
            <FaCalendarAlt />
            January 2023 - September 2023
          </p>
        </StyleDiv>
        <StyleBlock>
          <h2>Middle+ Front Developer</h2>
          <StyleBtn>intership</StyleBtn>
        </StyleBlock>
        <StyleDiv>
          <p>
            <HiMiniBuildingOffice />
            It - Incubator
          </p>
          <p>
            <AiOutlineEnvironment />
            Minsk
          </p>
          <FaCalendarAlt />
          <p>June 2024 - Dec 2024</p>
        </StyleDiv>
      </StyleWrapperWork>
      <StyleWrapperEduction>
        <h2>Education</h2>
        <p>
          <HiMiniBuildingOffice />
          Belarusian State Agricultural Academy
        </p>
      </StyleWrapperEduction>
    </StyleWrapper>
  );
};

const StyleWrapper = styled.div`
  display: flex;
  max-width: 50vw;
  width: 100%;
  
  flex-direction: column;
  min-height: 100vh;
  margin-right: 550px;
  p {
    font-size: 18px;
  }
  h2 {
    font-size: 42px;
  }

  @media (max-width: 1028px) {
    margin: 10px auto;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 360px) {
    h2 {
      font-size: 25px;
    }
    p {
      font-size: 12px;
    }
  }
`;

const StyleWrapperWork = styled.div``;
const StyleWrapperEduction = styled(StyleWrapperWork)`
  border-bottom: 2px solid #ebeaed;
`;

const StyleBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyleBtn = styled.button`
  width: 85px;
  height: 25px;
  background-color: #d7ffe0;
  border-radius: 100px;
  border: none;
  margin-top: 10px;
  cursor: pointer;
`;

const StyleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #ebeaed;
`;

export default Group;
