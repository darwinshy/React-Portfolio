import Particles from "react-particles-js";
import styled from "styled-components";

import configLight from "../config/particlesjs-config-light.json";

const Box = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
`;

const ParticleComponent = () => {
  return (
    <Box>
      <Particles
        style={{ position: "absolute" }}
        params={configLight}
      ></Particles>
    </Box>
  );
};

export default ParticleComponent;
