import React from "react";
import styled from "styled-components";
import Me from "../assets/Images/me.png";
import { motion } from "framer-motion";

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 65vw;
  height: 40vh;
  display: flex;

  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 30%,
        ${(props) => props.theme.text} 70%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 30%,
        ${(props) => props.theme.text} 70%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 1px;
  border-radius: 1px;
  border-left: 1px solid ${(props) => props.theme.body};
  border-right: 1px solid ${(props) => props.theme.text};
  transition: background-size 0.2s ease-in-out, border-width 0.2s ease-in-out,
    height 0.2s ease-in-out;
  z-index: 1;

  &:hover {
    background-size: 90% 1px;
    border-width: 10px;
    height: 48vh;
  }
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  .pic {
    position: absolute;
    bottom: 0;
    left: 40%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
  }
`;

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: #222222;
  padding: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  h1 {
    margin-bottom: 0.8rem;
  }
  .small {
    color: #222222;
    font-size: calc(0.5rem + 1vw);
    font-weight: 300;
  }
  .smaller {
    font-size: calc(0.5rem + 0.5vw);
  }
`;

function Intro() {
  return (
    <Box
      initial={{ width: "40vw", opacity: 0 }}
      animate={{ width: "65vw", opacity: 1 }}
      transition={{ type: "ease-in-out", duration: 0.8, delay: 0.1 }}
    >
      <SubBox>
        <Text>
          <h1>Shashwat Priyadarshy</h1>
          <h3 className="small">Fullstack Web and Android Developer</h3>
          <h6 className="small smaller">CSE, Undergrad '23 at NIT Silchar </h6>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div>
          <img className="pic" src={Me} alt="DP"></img>
        </motion.div>
      </SubBox>
    </Box>
  );
}

export default Intro;
