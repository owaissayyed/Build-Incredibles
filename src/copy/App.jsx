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

    useEffect(() => {
        window.addEventListener('wheel', handleScroll, { passive: false });
        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);

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
        <>
            <ParticlesBackground />
            <div
            // onScroll={scrollToNextSection}
            >
                {sections.map((section, index) => (
                    <div
                        key={index}
                        ref={el => (sectionRefs.current[index] = el)}
                        className="h-screen"
                    >
                        <MotionSection>
                            {React.cloneElement(section.component, {
                                isVisible: visibleSection === index,
                                // onScroll: scrollToNextSection,
                                key: visibleSection
                            })}
                        </MotionSection>
                    </div>
                ))}

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
        </>
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
