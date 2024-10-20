import React, { useRef, useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './component/header';
import Typewriter from './component/BI-Text';
import Information from './component/BI-inform';
import Textstack from './component/Textstack';
import Services from './component/Services';
import Meet from './component/BI-Meet';
import Team from './component/BI-Team';
import FooterComponent from './component/footer';
import ParticlesBackground from './particalbackground';
import { ThemeProvider, useTheme } from './themeContext';
import { AiOutlineSun, AiOutlineMoon } from 'react-icons/ai';
import { motion } from 'framer-motion';
import Timeline from './component/Timeline/Timeline';
import Loading from './loading'; // Import the loading component
import './App.css';

const SnapScrollContainer = ({ children }) => {
    return (
        <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
            {children}
        </div>
    );
};

const App = () => {
    const [loading, setLoading] = useState(true);
    const component1Ref = useRef(null);
    const { toggleTheme, theme } = useTheme();
    const customCursorRef = useRef(null);

    useEffect(() => {
        // Simulate a loading delay (e.g., fetching data)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // Change this to your desired loading time

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (customCursorRef.current) {
                customCursorRef.current.style.left = `${e.clientX}px`;
                customCursorRef.current.style.top = `${e.clientY}px`;

                // Calculate shadow distance
                const shadowDistance = 20; // Fixed distance for visibility
                customCursorRef.current.style.boxShadow = `
                    0 0 ${shadowDistance}px rgba(255, 255, 255, 0.8),
                    0 0 ${shadowDistance * 2}px rgba(255, 255, 255, 0.5)
                `;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

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
        if (component1Ref.current) {
            component1Ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    if (loading) {
        return <Loading />; // Show loading component while loading
    }

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

            <div className="relative">
                <Team />
                <Services />
                <Textstack />
                <Timeline />
                <Meet />
                <FooterComponent />
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

            {/* Custom Cursor */}
            <div ref={customCursorRef} className="custom-cursor" />
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
