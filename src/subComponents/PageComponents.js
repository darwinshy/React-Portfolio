import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;W
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  overflow: hidden;
  position: relative;
`;

const BGText = styled.div`
  position: fixed;
  top: 45%;
  left: 0%;
  font-weight: bold;
  // opacity: 0.1;
  transform: translate(-40%, -40%) rotate(-90deg);
  font-size: 15rem;
  padding: 0;
  margin: 0;
  z-index: 1;
  color: #e3e3e3;
`;
const Container = styled.div`
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

// ----------------------------------------------------------
const SkillBox = styled.div`
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
  // #6e6e6e
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
// Buttons used
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
export { MainContainer, BGText, Container, Row, SkillBox, WorkCard, Btn };
