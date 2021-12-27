import React from "react";
import styled, { keyframes } from "styled-components";
import Navbar from "../subComponents/Navbar";
import Intro from "../component/Intro";
import SocialIcons from "../subComponents/SocialIcons";

const Container = styled.div`
  padding: 2rem;
`;

const MainContainer = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const DarkDivIntro = keyframes`
from {
  width: 0%;
}
to {
  width: 100%;
}
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  width: 100%;
  height: 100%;
  background-color: #000;
  z-index: 1;
  animation: ${DarkDivIntro} 1s ease-in-out;
`;

const Main = () => {
  return (
    <MainContainer>
      <Container>
        <Navbar />
        <SocialIcons />
        <DarkDiv />
        <Intro />
      </Container>
    </MainContainer>
  );
};

export default Main;
