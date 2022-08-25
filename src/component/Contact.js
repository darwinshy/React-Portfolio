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
import styled from "styled-components";

const Greetings = styled.div`
  h1 {
    font-size: 3rem;
    opacity: 0.8;
  }
`;

const ContactForm = styled.div`
  width: 50%;
  height: auto;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 10px;
  display: flex;
  margin: 5vh 0;
  justify-content: center;
  align-items: center;
`;

const ContactBox = styled.div`
  display: flex;
  flex-direction: row;
  // width: 30%;
  height: 5%;
  background-color: #f0f0f0;
  padding: 1rem;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  margin: 1rem;
  img {
    width: 2rem;
    margin-right: 1rem;
  }

  a {
    text-decoration: none;
    color: #000000;
  }
`;

const Contact = () => {
  return (
    <MainContainer
      variants={AnimatedContainer}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Navbar />
      <SocialIcons />
      <BGText style={{ fontSize: "12rem" }}>CONTACT</BGText>
      <Container>
        <Greetings>
          <h1>
            don't be shy, say <i>Hi</i> !
          </h1>
        </Greetings>
        <ContactForm style={{ flexWrap: "wrap" }}>
          <ContactBox>
            <img src="https://cdn-icons-png.flaticon.com/512/482/482138.png"></img>
            <a href="mailto:shashwatpriyadarshy2001@gmail.com">
              shashwatpriyadarshy2001@gmail.com
            </a>
          </ContactBox>
          <ContactBox>
            <img src="https://cdn-icons-png.flaticon.com/512/61/61109.png"></img>
            <a
              href="https://www.linkedin.com/in/shashwatpriyadarshy/"
              target="_blank"
              rel="noreferrer"
            >
              in/shashwatpriyadarshy
            </a>
          </ContactBox>
          <ContactBox>
            <img src="https://cdn-icons-png.flaticon.com/512/20/20673.png"></img>
            <a
              href="https://www.facebook.com/shashwat.priyadarshy.3/"
              target="_blank"
              rel="noreferrer"
            >
              shashwat.priyadarshy.3
            </a>
          </ContactBox>
          <ContactBox>
            <img src="https://cdn-icons-png.flaticon.com/512/87/87390.png"></img>
            <a
              href="https://www.instagram.com/iamthe.darwin/"
              target="_blank"
              rel="noreferrer"
            >
              iamthe.darwin
            </a>
          </ContactBox>
          <ContactBox>
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"></img>
            <a
              href="https://leetcode.com/iamthedarwin/"
              target="_blank"
              rel="noreferrer"
            >
              iamtheDARWIN
            </a>
          </ContactBox>
          <ContactBox>
            <img src="https://cdn-icons-png.flaticon.com/512/254/254406.png"></img>
            <a
              href="https://twitter.com/iamthedarwin"
              target="_blank"
              rel="noreferrer"
            >
              iamthedarwin
            </a>
          </ContactBox>
          <ContactBox>
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png"></img>
            <a
              href="https://github.com/darwinshy"
              target="_blank"
              rel="noreferrer"
            >
              darwinshy
            </a>
          </ContactBox>
          <ContactBox>
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968900.png"></img>
            <a
              href="https://gitlab.com/thedarwin"
              target="_blank"
              rel="noreferrer"
            >
              thedarwin
            </a>
          </ContactBox>
          <ContactBox>
            <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/codeforces-512.png"></img>
            <a
              href="https://leetcode.com/iamthedarwin/"
              target="_blank"
              rel="noreferrer"
            >
              iamthedarwin
            </a>
          </ContactBox>
          <ContactBox>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ByHubgatDw4-WWSW-UmW6sJpw0uP1imz0OlOJJWLdaz00JHRAFxE9v8ZBIH5EkoVf4E&usqp=CAU"></img>
            <a
              href="https://www.hackerearth.com/@iamthedarwin"
              target="_blank"
              rel="noreferrer"
            >
              @iamthedarwin
            </a>
          </ContactBox>
        </ContactForm>
      </Container>
    </MainContainer>
  );
};

export default Contact;
