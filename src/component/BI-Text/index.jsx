import React, { useEffect, useState } from 'react';
import { Typewriter } from "react-simple-typewriter";
import { motion } from 'framer-motion';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { useTheme } from '../../themeContext';
import { useInView } from 'react-intersection-observer';
import './text.css'; 

const Information = ({ scrollToInfo }) => {
    const { toggleTheme } = useTheme();
    const [showContent, setShowContent] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });
    const [isVisible, setIsVisible] = useState(true);


    const textVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };

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

    useEffect(() => {
        if (inView) {
            setShowContent(true);
        }
    }, [inView]);

    return (
        <section
            ref={ref}
            className={`relative h-screen flex justify-center items-center snap-start`}
        // onScroll={() => { setIsVisible(false) }}
        >
            <motion.div
                className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold neon-text text-darkColor dark:text-lightColor'
                variants={textVariants}
                initial="hidden"
                animate={showContent ? "visible" : "hidden"}
                transition={{ duration: 0.8 }}
            >
                {showContent && (
                    <Typewriter
                        words={['Build Incredibles 🚀']}
                        loop={1}
                    />
                )}
            </motion.div>

            {isVisible ?
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                    <motion.button
                        onClick={scrollToInfo}
                        className="border-4 border-darkColor dark:border-lightColor rounded-full p-3 cursor-pointer flex justify-center items-center"
                        variants={iconVariants}
                        animate="float"
                    >
                        <AiOutlineArrowDown className="text-3xl text-darkColor dark:text-lightColor" />
                    </motion.button>
                </div>
                : <></>
            }
        </section>
    );
};

export default Information;
