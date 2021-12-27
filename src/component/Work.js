import React from "react";
import Navbar from "../subComponents/Navbar";
import SocialIcons from "../subComponents/SocialIcons";
import {
  MainContainer,
  BGText,
  Container,
  Row,
  Btn,
  WorkCard,
} from "../subComponents/PageComponents";

import Works from "../data/Works";
import styled from "styled-components";

const WorkComponent = (props) => {
  const { name, description, visitLink, glink, type, stack } = props.work;
  return (
    <WorkCard>
      <h2>{name}</h2>
      <h4>{type} </h4>
      <p>{description}</p>
      <h6>{stack}</h6>
      <Row style={{ justifyContent: "space-between", width: "50%" }}>
        <Btn>Github</Btn>
        <Btn>Visit</Btn>
      </Row>
    </WorkCard>
  );
};

const Work = () => {
  return (
    <MainContainer style={{ height: "auto", minHeight: "100vh" }}>
      <Navbar />
      <SocialIcons />

      <Container
        style={{
          margin: "5rem 0",
          flexWrap: "wrap",
          flexDirection: "unset",
          alignContent: "center",
        }}
      >
        <BGText>WORK</BGText>
        {Works.map((work) => {
          return <WorkComponent key={work.id} work={work} />;
        })}
      </Container>
    </MainContainer>
  );
};

export default Work;
