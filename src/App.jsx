import React, { useRef, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './component/header';
import Typewriter from './component/BI-Text';
import Information from './component/BI-inform';
import Services from './component/Services';
import Meet from './component/BI-Meet';
import FooterComponent from './component/footer';
import Team from './component/BI-Team';
import ParticlesBackground from './particalbackground';
import MotionSection from './Motion';
import { ThemeProvider, useTheme } from './themeContext';
import { AiOutlineSun, AiOutlineMoon } from 'react-icons/ai';
import { motion } from 'framer-motion';
import Timeline from './component/Timeline/Timeline';
import { AiOutlineArrowDown } from 'react-icons/ai';
import "./App.css";

const SnapScrollContainer = ({ children }) => {
    return (
        <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
            {children}
        </div>
    );
};

const App = () => {
    const component1Ref = useRef(null);
    const { toggleTheme, theme } = useTheme();

    const buttonVariants = {
        float: {
            y: [0, -15, 10],
            transition: {
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
            },
        },
    };

    const scrollToInfo = () => {
        component1Ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="h-screen overflow-y-scroll">
            <ParticlesBackground />
            <SnapScrollContainer>
    <Header />
    <Typewriter scrollToInfo={scrollToInfo} />
    <div ref={component1Ref}>
        <Information />
    </div>
</SnapScrollContainer>

{/* Normal scrolling components */}
<div className="relative">
    <Team />
    <Services />
    <Timeline />
    <Meet />
    <FooterComponent/>
</div>


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
        </div>
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
