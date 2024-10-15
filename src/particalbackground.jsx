// src/ParticleBackground.jsx
import React, { useEffect } from 'react';
import { tsParticles } from "https://cdn.jsdelivr.net/npm/@tsparticles/engine@3.1.0/+esm";
import { loadAll } from "https://cdn.jsdelivr.net/npm/@tsparticles/all@3.1.0/+esm";
import { useTheme } from './themeContext';
import { tailwindTheme } from './tailwindTheme';

const ParticleBackground = () => {
  const { theme } = useTheme();

  useEffect(() => {
    const loadParticles = async () => {
      await loadAll(tsParticles);
      
      const options = {
        particles: {
          number: { value: 30 },
          color: '', 
          links: {
            enable: true,
            distance: 210,
            color: theme === 'dark' ? tailwindTheme.lightColor : tailwindTheme.darkColor, 
          },
          shape: { type: "circle" },
          size: { value: { min: 4, max: 1} }, 
          move: { enable: true, speed: 1 },
        },
        background: { color: theme === 'dark' ? tailwindTheme.darkColor : tailwindTheme.lightColor }, 
        poisson: { enable: true },
      };

      await tsParticles.load({ id: "tsparticles", options });
    };

    loadParticles();
  }, [theme]); 
  return (
    <div
      id="tsparticles"
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  );
};

export default ParticleBackground;
