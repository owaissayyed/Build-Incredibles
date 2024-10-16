import React from 'react';
import { Typewriter } from "react-simple-typewriter";
import { motion } from 'framer-motion';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { useTheme } from '../../themeContext';
import './text.css'; 

const Information = ({ onScroll }) => {
    const { toggleTheme } = useTheme();

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

    return (
        <div className='min-h-screen flex flex-col justify-center items-center text-center relative p-4'>
            <motion.div
                className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold neon-text text-darkColor dark:text-lightColor'
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8 }}
            >
                <Typewriter
                    words={['Build Incredibles 🚀']}
                    loop={1}
                />
            </motion.div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                <motion.button 
                    onClick={onScroll} 
                    className="border-4 border-darkColor dark:border-lightColor rounded-full p-3 cursor-pointer flex justify-center items-center"
                    variants={iconVariants}
                    animate="float"
                >
                    <AiOutlineArrowDown className="text-2xl sm:text-3xl text-darkColor dark:text-lightColor" />
                </motion.button>
            </div>
        </div>
    );
};

export default Information;
