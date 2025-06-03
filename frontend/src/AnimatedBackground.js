import React from "react";
import { Particles } from "@tsparticles/react";
import { loadLinksPreset } from "@tsparticles/preset-links";

function AnimatedBackground() {
  const particlesInit = async (engine) => {
    await loadLinksPreset(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "links",
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#5b5b63" },
        particles: {
          color: { value: "#ffffff" },
          links: {
            color: "#ffffff",
            distance: 120,
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 1
          },
          number: {
            value: 50,
            density: { enable: true, area: 800 }
          },
          opacity: { value: 0.7 },
          size: { value: 3 }
        }
      }}
    />
  );
}

export default AnimatedBackground;
