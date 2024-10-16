import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import './Terminal.css';
import { useTheme } from '../../themeContext';
import { useInView } from 'react-intersection-observer';


const Terminal = ({ terminalString, currentTextIndex, setCurrentTextIndex }) => {
  const { theme } = useTheme(); // Access current theme
  return (
    <motion.div
      className={`terminal bg-darkColor border-darkColor dark:border-lightColor`}
      initial={{ rotateY: 90, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="terminal-header :border-lightColor  text-lightColor">
        <span className="dot red"></span>
        <span className="dot yellow"></span>
        <span className="dot green"></span>
        <span className="title ml-1">Build_Incredibles.sh</span>
      </div>
      <div className="terminal-body  text-lightColor">
        {terminalString.map((text, i) => {
          return (
            <>
              {currentTextIndex >= i ?
                <pre>
                  <Typewriter
                    key={0}
                    words={[text]}
                    loop={1}
                    cursor={currentTextIndex > i ? false : true}
                    cursorStyle="_"
                    typeSpeed={10}
                    delaySpeed={1000}
                    onComplete={() => setCurrentTextIndex(prevIndex => prevIndex + 1)}
                  />
                </pre>
                : <></>
              }
            </>
          )
        })}
      </div>
    </motion.div>
  );
};

const Information = () => {
  const [showTerminal, setShowTerminal] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const terminalString = [
    `$ sudo ./Build_Incredibles.sh`,
    `$ At Build Incredibles, we are a team of passionate developers committed to creating world-class technology for your organisation. Our focus is on delivering cutting-edge solutions in the shortest time, with top-tier security and precision, ensuring your product shines in the competitive market.`,
    `Let's build something incredible together!🚀`
  ];

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setShowTerminal(true);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [inView]);

  useEffect(() => {
    if (showTerminal && currentTextIndex < terminalString.length) {
      const typingDuration = (terminalString[currentTextIndex].length * 10) + 3000; // Adjust time based on typing speed and delay
      const timer = setTimeout(() => {
        setCurrentTextIndex(prevIndex => prevIndex + 1);
      }, typingDuration);

      return () => clearTimeout(timer);
    }
  }, [showTerminal, currentTextIndex]);

  return (
    <section
      ref={ref}
      className={`h-screen flex justify-center items-center snap-start`}
    >
      {showTerminal ?
        <Terminal
          currentTextIndex={currentTextIndex}
          terminalString={terminalString}
          setCurrentTextIndex={setCurrentTextIndex}
        />
        : <></>}
    </section>
  );
};

export default Information;
