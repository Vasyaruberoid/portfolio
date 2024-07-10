import React from "react";
import styled from "styled-components";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <StyleAcc>
      <Header />
      <Main />
      <Footer />
    </StyleAcc>
  );
}

export default App;

const StyleAcc = styled.body`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;
