import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { Facebook, Github, Twitter } from "../assets/svg/SVGS";
import { RevealAnimation } from "./PageComponents";

const Socials = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 40%;
  justify-content: end;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 2rem;
  z-index: 3;
  & > *:not(:last-child) {
    margin: 1rem 0;
  }
`;

const Line = styled.span`
  width: 2px;
  height: 100%;
  margin-top: 0.2rem;
  background-color: ${(props) => props.theme.text};
  transition: all 0.5s ease-in-out;
`;

const SocialIcons = (props) => {
  return (
    <Socials
      variants={RevealAnimation}
      initial={props.value === "main" ? "init" : ""}
      animate={props.value === "main" ? "show" : ""}
    >
      <a
        href="https://github.com/darwinshy"
        style={{ color: "#000" }}
        target="_blank"
        rel="noreferrer"
      >
        <Github width={25} height={25} fill="currentColor" />
      </a>
      <a
        href="https://twitter.com/iamthedarwin"
        style={{ color: "#000" }}
        target="_blank"
        rel="noreferrer"
      >
        <Twitter width={25} height={25} fill="currentColor" />
      </a>
      <a
        href="https://www.facebook.com/shashwat.priyadarshy.3/"
        style={{ color: "#000" }}
        target="_blank"
        rel="noreferrer"
      >
        <Facebook width={25} height={25} fill="currentColor" />
      </a>
      <Line></Line>
    </Socials>
  );
};

export default SocialIcons;
