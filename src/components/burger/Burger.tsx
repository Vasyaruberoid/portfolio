import React, { useState } from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledBurgerMenu>
      <button onClick={toggleMenu}>
        <span className={isOpen ? "open" : "closed"} />
        <span className={isOpen ? "open" : "closed"} />
        <span className={isOpen ? "open" : "closed"} />
      </button>
      <BurgerPopup className={isOpen ? "open" : ""}>
        <button className="close-button" onClick={toggleMenu}>
          &times;
        </button>
        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
          <StyleA>
            <a href="https://github.com/Vasyaruberoid">
              <FaGithub size={"25px"} />
            </a>
            <a href="https://www.linkedin.com/in/%D0%B2%D0%B0%D1%81%D0%B8%D0%BB%D0%B8%D0%B9-%D1%81%D1%82%D0%B0%D1%80%D0%BE%D0%B2%D0%BE%D0%B9%D1%82%D0%BE%D0%B2-225534257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
              <CiLinkedin size={"25px"} />
            </a>
          </StyleA>
        </ul>
      </BurgerPopup>
    </StyledBurgerMenu>
  );
};

const StyledBurgerMenu = styled.div`
  display: none;
  @media (max-width: 1420px) {
   position: fixed;
    display: flex;
    float: right;
    width: 40px;
    height: 40px;
top:20px;
right:20px;
z-index:100;
    button {
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 0;
    }
    button span {
      display: block;
      width: 30px;
      height: 4px;
      margin: 5px 0;
      background: #333;
      transition: all 0.3s ease-in-out;
    }

    button.open span:first-child {
      transform: rotate(45deg) translate(5px, 5px);
    }

    button.open span:nth-child(2) {
      opacity: 0;
    }

    button.open span:last-child {
      transform: rotate(-45deg) translate(5px, -5px);
    }
    }
  }
`;

const StyleA = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  float: right;
`;

const BurgerPopup = styled.nav`
  @media (max-width: 1420px) {
    position: fixed;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    top: 0;
    right: 0;
    background: #1f1f20e5;
    transition: all 0.3s ease-in-out;
    opacity: 0;
    transform: translateY(-10px);
    pointer-events: none;
    z-index: -1;
    width: 100%;
    height: 100vh;

    ul {
      display: flex;
      flex-direction: column;
      list-style: none;
      padding: 0;
      margin: 0 auto;
      text-align: center;
      align-items: center;
      justify-content: center;
    }

    li {
      margin-bottom: 10px;
      list-style: none;
      line-height: 25px;
      font-size: 50px;
    }

    a {
      text-decoration: none;
      font-size: 18px;
      color: white;
      margin-top: 20px;
    }

    &.open {
      position: fixed;
      opacity: 1;
      pointer-events: auto;
      width: 100%;
      height: 100%;
      z-index: 1000;
    }
    &.closed {
      pointer-events: none;
    }

    .close-button {
      position: absolute;
      top: 10px;
      right: 20px;
      font-size: 50px;
      cursor: pointer;
      background: none;
      border: none;
      color: white;
    }
  }
`;

export default Burger;
