import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

const AnimatedContainer = {
  hidden: {
    opacity: 0,
    top: "100vh",
    transition: {
      duration: 0.4,
      type: "spring",
      staggerChildren: 1,
    },
  },
  show: {
    opacity: 1,
    top: "0vh",
    transition: {
      duration: 0.6,
      staggerChildren: 1,
      type: "spring",
    },
  },
  exit: {
    opacity: 0,
    top: "-100vh",
    transition: {
      duration: 0.4,
      type: "spring",
      staggerChildren: 1,
    },
  },
};

const AnimatedItems = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "spring",
    },
  },
};

const DropAnimation = {
  init: {
    y: -200,
  },
  show: {
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      delay: 0.1,
    },
  },
};

const RevealAnimation = {
  init: {
    y: 500,
  },
  show: {
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      delay: 0.1,
    },
  },
};

const MainContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  overflow: hidden;
  position: relative;
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
  clip-path: polygon(
    50% 0%,
    90% 20%,
    100% 60%,
    75% 100%,
    25% 100%,
    0% 60%,
    10% 20%
  );
  animation: ${DarkDivIntro} 1s ease-in-out;
`;

const BGText = styled.div`
  position: fixed;
  top: 45%;
  left: 0%;
  font-weight: bold;
  transform: translate(-40%, -40%) rotate(-90deg);
  font-size: 15rem;
  padding: 0;
  margin: 0;
  z-index: 1;
  color: #e3e3e3;
`;

const BgImageAnimation = keyframes`
 from {
  clip-path: polygon(0 0, 0 0, 0 50%, 0 100%, 0 100%, 0% 50%);
 }
 to {
  clip-path: polygon(0 0, 75% 0%, 100% 75%, 75% 100%, 0 100%, 0% 50%);
  }
`;

const BGImage = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;
  width: 35vw;
  height: 100vh;
  background-color: #060608;
  clip-path: polygon(0 0, 75% 0%, 100% 75%, 75% 100%, 0 100%, 0% 50%);
  animation: ${BgImageAnimation} 1s ease-in-out;
  img {
    width: 100%;
  }
`;

const Container = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 80%;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 80%;
`;
// ----------------------------------------------------------
const SkillBox = styled(motion.div)`
  display: flex;
  width: 30vw;
  height: 20vh;
  background-color: white;
  border-radius: 10px;
  padding: 1rem;
  align-items: center;
  justify-content: space-around;
  margin: 1rem 0;
  opacity: 0.8;
  transition: all 0.2s ease;
  z-index: 2;
  h2 {
    opacity: 0.4;
  }

  &:hover {
    opacity: 1;
  }
`;
const WorkCard = styled(Container)`
  width: 40vh;
  height: 10wh;
  margin: 1vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
  padding: 2rem 3rem;
  color: white;
  border-radius: 3px;
  background-color: #00a1cd;
  transition: all 0.2s ease;

  h4 {
    font-size: 0.8rem;
    font-weight: 100;
  }

  h6 {
    margin: 0.5rem 0;
    font-weight: 100;
    font-size: 0.8rem;
  }
  p {
    font-size: 1.5rem;
    margin-top: 1.8rem;
  }
`;

const AboutMe = styled.div`
  display: flex;
  width: 55vw;
  height: 100vh;
  flex-direction: column;
  justify-content: space-around;
  border-bottom: 3px solid #e6e6e6;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a {
    color: #505050;
  }

  .topic {
    opacity: 0.4;
  }
  .subtopic {
    font-size: 2.5rem;
  }

  .desc {
    font-size: 4rem;
  }

  h1 {
    font-size: 3rem;
  }

  p {
    margin-top: 0.5rem;
  }
  .topMargin {
    margin-top: 2rem;
    font-size: 1.5rem;
    font-weight: 100;
  }
  .lessTopMargin {
    margin-top: 1rem;
    font-size: 1.5rem;
    font-weight: 100;
  }
`;
const Btn = styled.button`
  display: inline-block;
  line-height: 35px;
  margin-top: 2rem;
  padding: 0 15px;
  font-size: 15px;
  position: relative;
  opacity: 0.999;
  border-radius: 3px;
  border: none;
  color: white;
  transition: all 0.2s ease;
  background-color: #0c81a7;

  &:hover {
    cursor: pointer;
    background-color: #085067;
  }
`;

// ----------------------------------------------------------
export {
  MainContainer,
  BGText,
  Container,
  Row,
  Column,
  SkillBox,
  AboutMe,
  WorkCard,
  Btn,
  BGImage,
  AnimatedContainer,
  AnimatedItems,
  DropAnimation,
  RevealAnimation,
  DarkDiv,
  DarkDivIntro,
};
// ----------------------------------------------------------
