import React from "react";
import styled from "styled-components";
import Navbar from "../subComponents/Navbar";
import Intro from "../component/Intro";
import SocialIcons from "../subComponents/SocialIcons";

import {
  AnimatedContainer,
  MainContainer,
  DarkDiv,
} from "../subComponents/PageComponents";

const Container = styled.div`
  padding: 2rem;
`;

const Main = () => {
  return (
    <MainContainer
      variants={AnimatedContainer}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Container>
        <Navbar value="main" />
        <SocialIcons value="main" />
        <DarkDiv />
        <Intro />
      </Container>
    </MainContainer>
  );
};

export default Main;
