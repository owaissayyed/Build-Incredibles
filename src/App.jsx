import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './component/header';
import Typewriter from './component/BI-Text';
import Information from './component/BI-inform';
import Services from './component/Services';
import Meet from './component/BI-Meet';
import Team from './component/BI-Team';
import ParticlesBackground from './particalbackground';
import MotionSection from './Motion';
import { ThemeProvider, useTheme } from './themeContext';
import { AiOutlineSun, AiOutlineMoon } from 'react-icons/ai';
import { motion } from 'framer-motion';
import Timeline from './component/Timeline/Timeline';
import { AiOutlineArrowDown } from 'react-icons/ai';



const Section = ({ title, children, bgColor }) => {
    return (
        <section className={`h-screen flex justify-center items-center ${bgColor} snap-start`}>
            <div className="text-center p-4">
                <h1 className="text-3xl font-bold mb-4">{title}</h1>
                <div className="max-w-md mx-auto">
                    {children}
                </div>
            </div>
        </section>
    );
};

const sections = [
    { component: <Header /> },
    { component: <Typewriter /> },
    { component: <Information /> },
    { component: <Team /> },
    { component: <Services /> },
    { component: <Meet /> },
];

const App = () => {
    const sectionRefs = useRef([]);
    const [visibleSection, setVisibleSection] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const { toggleTheme, theme } = useTheme();

    const iconVariants = {
        float: {
            y: [0, -10, 0],
            transition: {
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
            }
        }
    };

    return (
        <div className="snap-y snap-mandatory h-screen overflow-y-scroll "
            onScroll={() => { setIsVisible(false) }}
        >
            {isVisible ?
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                    <motion.button
                        // onClick={onScroll}
                        className="border-4 border-darkColor dark:border-lightColor rounded-full p-3 cursor-pointer flex justify-center items-center"
                        variants={iconVariants}
                        animate="float"
                    >
                        <AiOutlineArrowDown className="text-3xl text-darkColor dark:text-lightColor" />
                    </motion.button>
                </div>
                : <></>
            }
            <ParticlesBackground />
            <Header />
            <Typewriter />
            <Information />
            <Team />
            <Services />
            <Timeline />
            <Meet />
        </div >
    );
};

const AppWrapper = () => (
    <Router>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </Router>
);

export default AppWrapper;
