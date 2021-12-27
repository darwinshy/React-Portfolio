import React from "react";
import styled, { keyframes } from "styled-components";
import Navbar from "../subComponents/Navbar";
import Intro from "../component/Intro";
import SocialIcons from "../subComponents/SocialIcons";
import { MainContainer } from "../subComponents/PageComponents";

const Container = styled.div`
  padding: 2rem;
`;

const DarkDivIntro = keyframes`
from {
  clip-path: polygon(50% 0%, 78% 0, 100% 20%, 100% 100%, 25% 100%, 0% 60%, 10% 20%);
}
to {
  clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);
}
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  right: 50%;
  width: 100%;
  height: 100%;
  background-color: #fdd231;
  z-index: 1;
  clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);
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
