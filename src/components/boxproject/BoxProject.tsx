import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import styled from "styled-components";

type BoxProjectPropsType = {
  title: string;
  decription: string;
  steck: string;
  primera: string;
  pageProject: string;
  image: string;
};

const BoxProject = (props: BoxProjectPropsType) => {
  return (
    <StyleBlock>
      <img src={props.image} alt="myImg" />
      <StyleWrapper>
        <h2>{props.title}</h2>
        <p>{props.decription}</p>
        <p>{props.steck}</p>
        <StyleA>
          <a href={props.primera}>
            <FaLink />
            Live Preview
          </a>
          <a href={props.pageProject}>
            <FaGithub />
            View Code
          </a>
        </StyleA>
      </StyleWrapper>
    </StyleBlock>
  );
};

const StyleBlock = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 2px 2px 100px 0px #00000033;
  border-radius: 20px;
  p {
    font-size: 25px;
    margin: 0 auto;
  }
  img {
    height: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    object-fit: fill;
  }
  a {
    display: flex;
  }
  @media (max-width: 1028px) {
    width: 40vw;
  }
  @media (max-width: 768px) {
    height: 100vh;
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

const StyleWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 100%;
`;

const StyleA = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  a {
    text-decoration: none;
  }
`;

export default BoxProject;
