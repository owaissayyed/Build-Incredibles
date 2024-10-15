import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import './Terminal.css'; 

const Terminal = ({ text, onAnimationComplete }) => {
  return (
    <motion.div
      className="terminal"
      initial={{ rotateY: 90, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      onAnimationComplete={onAnimationComplete}
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
  const [showTerminal, setShowTerminal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTerminal(true);
    }, 500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='min-h-screen flex justify-center items-center'>
      {showTerminal && (
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
      )}
    </div>
  );
};

export default Information;
