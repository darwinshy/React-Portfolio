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
    <MainContainer>
      <Container>
        <Navbar value="main" />
        <SocialIcons value="main" />
        <DarkDiv />
        <Intro variants={AnimatedContainer} initial="hidden" animate="show" />
      </Container>
    </MainContainer>
  );
};

export default Main;
