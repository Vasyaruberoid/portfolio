import styled from "styled-components";
import BoxProject from "../boxproject/BoxProject";
import img1 from "../../icons/Calc.png";
import img2 from "../../icons/BikeShop.png";
import img3 from "../../icons/Todolist.png";
import img4 from "../../icons/stub2.png";
import img5 from "../../icons/stub3.png";
import img6 from "../../icons/stub4.png";

const Projects = () => {
  return (
    <StyleProjects>
      <div>
        <h1>Projects</h1>
        <h2>Things I’ve built so far</h2>
      </div>
      
      <StyleWrapper>
        <BoxProject
          image={img1}
          title={"Calculator"}
          decription={
            "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
          }
          steck={"HTML , Css , JavaScript, React"}
          primera={"https://vasyaruberoid.github.io/Calculator/"}
          pageProject={"https://github.com/Vasyaruberoid/Calculator"}
        />
        <BoxProject
          image={img2}
          title={"Bike Shop"}
          decription={
            "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
          }
          steck={"HTML , Css , TypeScript, React"}
          primera={"https://vasyaruberoid.github.io/BikeShop/"}
          pageProject={"https://github.com/Vasyaruberoid/BikeShop"}
        />
        <BoxProject
          image={img3}
          title={"TodoList"}
          decription={
            " This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
          }
          steck={"HTML , Css , TypeScript, React"}
          primera={"https://vasyaruberoid.github.io/TodoList/"}
          pageProject={"https://github.com/Vasyaruberoid/TodoList"}
        />
        <BoxProject
          image={img4}
          title={"Comming soon ....."}
          decription={
            "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
          }
          steck={"HTML , Css , JavaScript, React"}
          primera={""}
          pageProject={""}
        />
        <BoxProject
          image={img5}
          title={"Comming soon ....."}
          decription={
            "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
          }
          steck={"HTML , Css , JavaScript, React"}
          primera={""}
          pageProject={""}
        />
        <BoxProject
          image={img6}
          title={"Comming soon ....."}
          decription={
            "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
          }
          steck={"HTML , Css , JavaScript, React"}
          primera={""}
          pageProject={""}
        />
      </StyleWrapper>
    </StyleProjects>
  );
};

const StyleProjects = styled.div`
  display: grid;
  text-align: center;
  margin: 20px auto;
  height: 100%;
  max-width: 100%;
  padding: 100px;

  p {
    align-items: center;
    justify-content: center;
    font-size: 18px;
    padding: 20px
  }
  h1 {
    font-size: 48px;
  }
  h2 {
    font-size: 34px;
  }
  img {
    width: 100%;
    height: 260px;
    background: black;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    object-fit: fill;
  }
`;

const StyleWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  margin: 50px auto;
  height: 100%;
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



export default Projects;
