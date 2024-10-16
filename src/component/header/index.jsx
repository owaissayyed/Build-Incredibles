import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { useTheme } from '../../themeContext';


const Header = () => {
    const { toggleTheme } = useTheme();
    const [isVisible, setIsVisible] = useState(true);

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

    const textVariants = {
        hidden: { opacity: 0, x: 100, scale: 0.9 },
        visible: { opacity: 1, x: 0, scale: 1 },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
    };

    return (
        // <div className="h-lvh flex flex-col justify-center items-center text-center ">
        <section className={`relative h-screen flex justify-center items-center  snap-start`}
            onScroll={() => { setIsVisible(false) }}
        >
            <div className="px-4">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.p
                        className="text-2xl sm:text-4xl md:text-5xl font-bold text-darkColor dark:text-lightColor"
                        variants={textVariants}
                        transition={{ duration: 0.5 }}
                    >
                        Take your business online,
                    </motion.p>
                    <motion.p
                        className="text-2xl sm:text-4xl md:text-5xl  font-bold text-secondprimary dark:text-primary"
                        variants={{ ...textVariants, hidden: { ...textVariants.hidden, x: -100 } }}
                        transition={{ duration: 0.5 }}
                    >
                        Reach out to the global audience.
                    </motion.p>
                </motion.div>

                <motion.p
                    className="text-md sm:text-lg mt-2 text-darkColor dark:text-lightColor font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </motion.p>
                <motion.p
                    className="text-md sm:text-lg text-darkColor dark:text-lightColor font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </motion.p>
            </div>
        </section>
    );
};

export default Header;
