import React, { useCallback } from "react";
import styled from "styled-components";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import configDark from "../config/particlesjs-config.json";
import configLight from "../config/particlesjs-config-light.json";

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`;

const ParticleComponent = ({ theme }) => {
  const particlesInit = useCallback(async (engine) => {
    // Load tsparticles engine
    await loadSlim(engine);
  }, []);

  return (
    <Box>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={theme === "light" ? configLight : configDark}
      />
    </Box>
  );
};

export default ParticleComponent;
