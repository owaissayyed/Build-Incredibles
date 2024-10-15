import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './component/header';
import Typewriter from './component/BI-Text';
import Information from './component/BI-inform';
import Services from './component/Services';
import Meet from './component/BI-Meet';
import ParticlesBackground from './particalbackground';
import MotionSection from './Motion';

const sections = [
    { component: <Header /> },
    { component: <Typewriter /> },
    { component: <Information /> },
    { component: <Services /> },
    { component: <Meet /> },
];

const App = () => {
    const sectionRefs = useRef([]);
    const [visibleSection, setVisibleSection] = useState(0);

    const handleScroll = (event) => {
        event.preventDefault();
        const currentIndex = sectionRefs.current.findIndex(ref => ref && ref.getBoundingClientRect().top >= 0);

        if (event.deltaY > 0) {
            // Scrolling downs
            const nextIndex = currentIndex + 1;
            if (nextIndex < sectionRefs.current.length) {
                sectionRefs.current[nextIndex].scrollIntoView({ behavior: 'smooth' });
                setVisibleSection(nextIndex);
            }
        } else {
            // Scrolling up
            const prevIndex = currentIndex - 1;
            if (prevIndex >= 0) {
                sectionRefs.current[prevIndex].scrollIntoView({ behavior: 'smooth' });
                setVisibleSection(prevIndex);
            }
        }
    };

    const scrollToNextSection = () => {
        const currentIndex = visibleSection;
        const nextIndex = currentIndex + 1;
        if (nextIndex < sectionRefs.current.length) {
            sectionRefs.current[nextIndex].scrollIntoView({ behavior: 'smooth' });
            setVisibleSection(nextIndex);
        }
    };

    useEffect(() => {
        window.addEventListener('wheel', handleScroll, { passive: false });
        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);

    return (
        <>
            <ParticlesBackground />
            <div>
                {sections.map((section, index) => (
                    <div
                        key={index}
                        ref={el => (sectionRefs.current[index] = el)}
                        style={{ height: '100vh' }}
                    >
                        <MotionSection>
                            {React.cloneElement(section.component, { 
                                isVisible: visibleSection === index,
                                onScroll: scrollToNextSection,
                                key: visibleSection 
                            })} 
                        </MotionSection>
                    </div>
                ))}
            </div>
        </>
    );
};

const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);

export default AppWrapper;
