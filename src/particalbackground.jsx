// src/ParticleBackground.jsx
import React, { useEffect } from 'react';
import { tsParticles } from "https://cdn.jsdelivr.net/npm/@tsparticles/engine@3.1.0/+esm";
import { loadAll } from "https://cdn.jsdelivr.net/npm/@tsparticles/all@3.1.0/+esm";

const ParticleBackground = () => {
  useEffect(() => {
    const loadParticles = async () => {
      await loadAll(tsParticles);
      await tsParticles.load({ id: "tsparticles", options: {
        particles: {
          number: { value: 30 },
          color: { value: "primary" },
          links: { enable: true, distance: 200 },
          shape: { type: "circle" },
          opacity: { value: 10 },
          size: { value: { min: 4, max: 6 } },
          move: { enable: true, speed: 1 }
        },
        background: { color: "#000000" },
        poisson: { enable: true }
      }});
    };

    loadParticles();
  }, []);

  return <div id="tsparticles" style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, zIndex: -1 }} />;
};

export default ParticleBackground;
