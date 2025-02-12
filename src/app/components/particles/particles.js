"use client";

import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { particlesOptions } from "../../../../untracked/particlesConfig.js";

const Particles = () => {
  // const particlesInit = useCallback(async (engine) => {
  //   await loadSlim(engine);
  // }, []);

  // const particlesLoaded = useCallback(async (container) => {
  //   await console.log(container);
  // }, []);

  return <Particles id="tsparticles" params={particlesOptions} />;
};

export default Particles;
