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
  AnimatedItems,
  AnimatedContainer,
} from "../subComponents/PageComponents";

import Works from "../data/Works";

const WorkComponent = (props) => {
  const { id, name, description, visitLink, glink, type, stack } = props.work;
  return (
    <WorkCard id={id} variants={AnimatedItems} initial="hidden" animate="show">
      <h2>{name}</h2>
      <h4>{type} </h4>
      <p>{description}</p>
      <h6>{stack}</h6>
      <Row style={{ justifyContent: "space-between", width: "50%" }}>
        <a href={glink} target="_blank" rel="noreferrer">
          <Btn>Github</Btn>
        </a>
        <a href={visitLink} target="_blank" rel="noreferrer">
          <Btn>Visit</Btn>{" "}
        </a>
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
        variants={AnimatedContainer}
        initial="hidden"
        animate="show"
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
