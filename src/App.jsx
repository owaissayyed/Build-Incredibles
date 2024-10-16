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
    const { toggleTheme, theme } = useTheme();

    const handleScroll = (event) => {
        event.preventDefault();
        const currentIndex = sectionRefs.current.findIndex(ref => ref && ref.getBoundingClientRect().top >= 0);

        if (event.deltaY > 0) {
            const nextIndex = currentIndex + 1;
            if (nextIndex < sectionRefs.current.length) {
                sectionRefs.current[nextIndex].scrollIntoView({ behavior: 'smooth' });
                setVisibleSection(nextIndex);
            }
        } else {
            const prevIndex = currentIndex - 1;
            if (prevIndex >= 0) {
                sectionRefs.current[prevIndex].scrollIntoView({ behavior: 'smooth' });
                setVisibleSection(prevIndex);
            }
        }
    };

    const scrollToNextSection = () => {
        const nextIndex = visibleSection + 1;
        if (nextIndex < sectionRefs.current.length) {
            sectionRefs.current[nextIndex].scrollIntoView({ behavior: 'smooth' });
            setVisibleSection(nextIndex);
        }
        console.log('Scrolling to section:', nextIndex);
    };

    // useEffect(() => {
    //     window.addEventListener('wheel', handleScroll, { passive: false });
    //     return () => {
    //         window.removeEventListener('wheel', handleScroll);
    //     };
    // }, []);

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

    return (
        <div className="snap-y snap-mandatory h-screen overflow-y-scroll ">
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
