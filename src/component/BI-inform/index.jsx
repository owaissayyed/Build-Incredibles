// src/Information.js

import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import './Terminal.css'; // Ensure this is imported

const Terminal = ({ text }) => {
  return (
    <motion.div
      className="terminal"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="terminal-header">
        <span className="dot red"></span>
        <span className="dot yellow"></span>
        <span className="dot green"></span>
        <span className="title">Build_Incredibles.sh</span>
      </div>
      <div className="terminal-body">
        <pre>{text}</pre>
      </div>
    </motion.div>
  );
};

const Information = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <Terminal
        text={
          <Typewriter
            words={[
              `$ sudo ./Build_Incredibles.sh
\n$ At Build Incredibles, we are a team of passionate \n developers committed to creating world-class technology for \n your organisation. Our focus is on delivering cutting-edge \n solutions in the shortest time, with top-tier security and \n precision, ensuring your product shines in the competitive \n market.\n   Let's build something incredible together!🚀`,
            ]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={10}
            delaySpeed={1000}
          />
        }
      />
    </div>
  );
};

export default Information;
