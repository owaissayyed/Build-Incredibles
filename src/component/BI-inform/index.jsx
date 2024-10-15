import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import './Terminal.css'; 
import { useTheme } from '../../themeContext'; // Adjust the path based on your file structure

const Terminal = ({ text }) => {
  const { theme } = useTheme(); // Access current theme
  return (
    <motion.div
    className={`terminal bg-lightColor dark:bg-darkColor border-darkColor dark:border-lightColor`}
      initial={{ rotateY: 90, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="terminal-header border-darkColor dark:border-lightColor  text-darkColor dark:text-lightColor">
        <span className="dot red"></span>
        <span className="dot yellow"></span>
        <span className="dot green"></span>
        <span className="title">Build_Incredibles.sh</span>
      </div>
      <div className="terminal-body  text-darkColor dark:text-lightColor">
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
    }, 500); // Delay before showing the terminal

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='min-h-screen flex justify-center items-center'>
      {showTerminal && (
        <Terminal
          text={
            <Typewriter
              words={[`
$ sudo ./Build_Incredibles.sh
$ At Build Incredibles, we are a team of passionate 
developers committed to creating world-class technology for 
your organisation. Our focus is on delivering cutting-edge 
solutions in the shortest time, with top-tier security and 
precision, ensuring your product shines in the competitive 
market.
Let's build something incredible together!🚀`]}
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
