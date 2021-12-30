import React from "react";
import Navbar from "../subComponents/Navbar";
import SocialIcons from "../subComponents/SocialIcons";
import {
  MainContainer,
  BGText,
  Container,
  Row,
  SkillBox,
  AnimatedContainer,
} from "../subComponents/PageComponents";

const MySkillsPage = () => {
  return (
    <MainContainer
      variants={AnimatedContainer}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Navbar />
      <SocialIcons />
      <BGText>SKILLS</BGText>
      <Container>
        <Row>
          <SkillBox style={{ flexDirection: "column" }}>
            <h2>Website Developement</h2>
            <Row>
              <img
                alt=""
                height="60"
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
              ></img>
              <img
                alt=""
                height="60"
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
              ></img>
              <img
                alt=""
                height="60"
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png"
              ></img>
              <img
                alt=""
                height="60"
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"
              ></img>
              <img
                alt=""
                height="60"
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png"
              ></img>
              <img
                alt=""
                height="60"
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
              ></img>
              <img
                alt=""
                height="60"
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
              ></img>
            </Row>
          </SkillBox>
          <SkillBox style={{ flexDirection: "column" }}>
            <h2>App Developement</h2>
            <Row>
              <img
                alt=""
                height="60"
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/flutter/flutter.png"
              ></img>
              <img
                alt=""
                height="60"
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png"
              ></img>
              <img
                alt=""
                height="60"
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/dart/dart.png"
              ></img>
            </Row>
          </SkillBox>
        </Row>
        <Row>
          <SkillBox style={{ flexDirection: "column" }}>
            <h2>Coding Languages</h2>
            <Row>
              <img
                alt=""
                height="60"
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/cpp/cpp.png"
              ></img>
              <img
                alt=""
                height="60"
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/java/java.png"
              ></img>
              <img
                alt=""
                height="60"
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/c/c.png"
              ></img>
            </Row>
          </SkillBox>{" "}
          <SkillBox style={{ flexDirection: "column" }}>
            <h2>Others</h2>
            <Row>
              <img
                alt=""
                height="60"
                src="https://mixable.blog/wp-content/uploads/2021/09/gitlab-logo-gray-rgb.jpg"
              ></img>
              <img
                alt=""
                height="50"
                src="https://iconape.com/wp-content/files/il/21180/png/adobe-illustrator-cc-2019.png"
              ></img>{" "}
              <img
                alt=""
                height="60"
                src="https://camo.githubusercontent.com/8309f96251a086c056e0d7262b7eb66b2da6bdc35ed439b269fd907aa516095a/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f76697375616c2d73747564696f2d636f64652d312e737667"
              ></img>
              <img
                alt=""
                height="60"
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
              ></img>
            </Row>
          </SkillBox>
        </Row>
      </Container>
    </MainContainer>
  );
};

export default MySkillsPage;
