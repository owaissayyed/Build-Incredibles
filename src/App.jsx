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
import "./App.css"



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
    const component1Ref = useRef(null);


    const buttonVariants = {
        float: {
            y: [0, -15, 10],
            transition: {
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
            }
        }
    };

    const scrollToInfo = () => {
        component1Ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="snap-y snap-mandatory h-screen overflow-y-scroll "
        >

            <ParticlesBackground />
            <Header />
            <Typewriter scrollToInfo={scrollToInfo} />
            <div ref={component1Ref}>
                <Information />
            </div>
            <Team />
            <Services />
            <Timeline />
            <Meet />
            <div className="fixed bottom-5 right-5">
                <motion.button
                    onClick={toggleTheme}
                    className="p-3 rounded-full shadow-lg border-2 border-darkColor dark:border-lightColor bg-lightGray dark:bg-darkGray transition duration-300"
                    variants={buttonVariants}
                    animate="float"
                >
                    {theme === 'dark' ? (
                        <AiOutlineSun className="text-lightColor" />
                    ) : (
                        <AiOutlineMoon className="text-darkColor" />
                    )}
                </motion.button>
            </div>
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
