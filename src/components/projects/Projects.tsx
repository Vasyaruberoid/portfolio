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
      <StyleInfo>
        <h1>
          For any questions please mail me:
          <a href="h">vasilij.starovojtov@mail.ru</a>
        </h1>
      </StyleInfo>
    </StyleProjects>
  );
};

const StyleProjects = styled.div`
  a {
    text-decoration: none;
  }
  p {
    align-items: center;
    justify-content: center;
    font-size: 18px;
  }
  h1 {
    font-size: 48px;
  }
  h2 {
    font-size: 32px;
  }
  img {
    width: 100%;
    height: 40%;
    background: black;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 200px;
`;

const StyleWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-row-columns: repeat(2, 1fr);
  grid-gap: 40px;
  width: 90%;
  height: 1450px;
  margin-top: 50px;
`;

const StyleBlock = styled.div`
  width: 400px;
  heigh: 500px;
  box-shadow: 2px 2px 100px 0px #00000033;
  border-radius: 20px;
  p {
    width: 70%;
    margin: 0 auto;
  }
  a {
    display: flex;
    margin-top: 80px;
  }
`;

const StyleA = styled.a`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`;

const StyleInfo = styled.div`
  display: flex;
  alig-align: center;
  justify-content: center;
  width: 90%;
  font-size: 58px;
  margin: 80px auto;
  a {
    color: rgba(19, 176, 245, 1);
  }
`;

export default Projects;
