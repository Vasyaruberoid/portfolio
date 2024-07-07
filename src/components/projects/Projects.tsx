import React from "react";
import styled from "styled-components";
import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <StyleProjects>
      <div>
        <h1>Projects</h1>
        <h2>Things I’ve built so far</h2>
      </div>
      <StyleWrapper>
        <StyleBlock>
          <img src="" alt="" />
          <div>
            <h2>Project Tile goes here</h2>
            <p>
              This is sample project description random things are here in
              description This is sample project lorem ipsum generator for dummy
              content
            </p>
            <p>Tech stack : HTML , JavaScript, SASS, React</p>
            <StyleA>
              <a href="h">
                <FaLink />
                Live Preview
              </a>
              <a href="h">
                <FaGithub />
                View Code
              </a>
            </StyleA>
          </div>
        </StyleBlock>
        <StyleBlock>
          <img src="" alt="" />
          <div>
            <h2>Project Tile goes here</h2>
            <p>
              This is sample project description random things are here in
              description This is sample project lorem ipsum generator for dummy
              content
            </p>
            <p>Tech stack : HTML , JavaScript, SASS, React</p>
            <StyleA>
              <a href="h">
                <FaLink />
                Live Preview
              </a>
              <a href="h">
                <FaGithub />
                View Code
              </a>
            </StyleA>
          </div>
        </StyleBlock>
        <StyleBlock>
          <img src="" alt="" />
          <div>
            <h2>Project Tile goes here</h2>
            <p>
              This is sample project description random things are here in
              description This is sample project lorem ipsum generator for dummy
              content
            </p>
            <p>Tech stack : HTML , JavaScript, SASS, React</p>
            <StyleA>
              <a href="h">
                <FaLink />
                Live Preview
              </a>
              <a href="h">
                <FaGithub />
                View Code
              </a>
            </StyleA>
          </div>
        </StyleBlock>
        <StyleBlock>
          <img src="" alt="" />
          <div>
            <h2>Project Tile goes here</h2>
            <p>
              This is sample project description random things are here in
              description This is sample project lorem ipsum generator for dummy
              content
            </p>
            <p>Tech stack : HTML , JavaScript, SASS, React</p>
            <StyleA>
              <a href="h">
                <FaLink />
                Live Preview
              </a>
              <a href="h">
                <FaGithub />
                View Code
              </a>
            </StyleA>
          </div>
        </StyleBlock>
        <StyleBlock>
          <img src="" alt="" />
          <div>
            <h2>Project Tile goes here</h2>
            <p>
              This is sample project description random things are here in
              description This is sample project lorem ipsum generator for dummy
              content
            </p>
            <p>Tech stack : HTML , JavaScript, SASS, React</p>
            <StyleA>
              <a href="h">
                <FaLink />
                Live Preview
              </a>
              <a href="h">
                <FaGithub />
                View Code
              </a>
            </StyleA>
          </div>
        </StyleBlock>
        <StyleBlock>
          <img src="" alt="" />
          <div>
            <h2>Project Tile goes here</h2>
            <p>
              This is sample project description random things are here in
              description This is sample project lorem ipsum generator for dummy
              content
            </p>
            <p>Tech stack : HTML , JavaScript, SASS, React</p>
            <StyleA>
              <a href="h">
                <FaLink />
                Live Preview
              </a>
              <a href="h">
                <FaGithub />
                View Code
              </a>
            </StyleA>
          </div>
        </StyleBlock>
      </StyleWrapper>
    </StyleProjects>
  );
};

const StyleProjects = styled.div`
  display: grid;
  text-align: center;
  margin: 0 auto;
  max-height: 100vh;
  height: 100%;
  max-width: 100%;
  width: 1300px;
  p {
    align-items: center;
    justify-content: center;
    font-size: 18px;
  }
  h1 {
    font-size: 48px;
  }
  h2 {
    font-size: 34px;
  }
  img {
    width: 100%;
    height: 40%;
    background: black;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
`;

const StyleWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  margin: 0px auto;
  height: 100vh;
  @media (max-width: 1028px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-row-columns: repeat(3, 1fr);
    gap: 30px;
  }
  @media (max-width: 768px) {
  
    grid-template-columns: repeat(1, 1fr);
    grid-template-row-columns: repeat(6, 1fr);
    gap: 50px;
  }
  @media (max-width: 360px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-row-columns: repeat(6, 1fr);
    gap: 25px;
  }
`;

const StyleBlock = styled.div`
  height: 80vh;
  box-shadow: 2px 2px 100px 0px #00000033;
  border-radius: 20px;
  p {
    font-size: 28px;

    margin: 0 auto;
  }
  a {
    display: flex;
  }
  @media (max-width: 1028px) {
    width: 40vw;
    height: 100vh;
  }
  @media (max-width: 768px) {
    height: 70vh;
  }
  @media (max-width: 360px) {
    height: 100vh;
    p {
      font-size: 16px;
      margin: 0 auto;
    }
    h2 {
      font-size: 20px;
    }
  }
`;

const StyleA = styled.a`
  display: flex;
  margin: 30px auto;
  justify-content: space-around;

  a {
    text-decoration: none;
  }
`;

export default Projects;
