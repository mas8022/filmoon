"use client";

import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Container, Engine } from "tsparticles-engine";

interface ParticlesBackgroundProps {
  children: React.ReactNode;
}

const ParticlesBackground: React.FC<ParticlesBackgroundProps> = ({ children }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);



  return (
    <div className="wrapper">
      {/* ذرات */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: true,
            zIndex: -2, // قرار دادن ذرات در لایه‌ی پایین
          },
          background: {
            color: {
              value: "#000", // پس‌زمینه مشکی
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 0,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ff8c0084", // نقاط نارنجی
            },
            links: {
              color: "#ff8c00",
              distance: 150,
              enable: true,
              opacity: 1,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.4,
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.2,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />

      {/* لایه بلوری */}
      <div className="blur-layer"></div>

      {/* محتوای اصلی */}
      <div className="content">{children}</div>

      <style jsx>{`
        .wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .blur-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          backdrop-filter: blur(3px); /* افکت بلور */
          z-index: -1; /* لایه بلور */
        }

        .content {
          width: 100%;
          height: 100%;
          position: relative;
          z-index: 1; /* لایه محتوای اصلی بالای بلور */
          color: white; /* رنگ متن پیش‌فرض */
          overflow-y: scroll;
        }
      `}</style>
    </div>
  );
};

export default ParticlesBackground;
