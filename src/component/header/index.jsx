import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from "react-simple-typewriter";

const Header = () => {
    const textVariants = {
        hidden: { opacity: 0, x: 100, scale: 0.9 },
        visible: { opacity: 1, x: 0, scale: 1 },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
    };

    return (
        <div className='h-lvh flex justify-center items-center text-center'>
            <div className='w-90'>
                <motion.div 
                    variants={containerVariants} 
                    initial="hidden" 
                    animate="visible"
                >
                    <motion.h1 
                        className='text-5xl font-bold text-lightColor'
                        variants={textVariants}
                        transition={{ duration: 0.5 }}
                    >
                        Take your business online,
                    </motion.h1>
                    <motion.h1 
                        className='text-5xl font-bold text-primary'
                        variants={{ ...textVariants, hidden: { ...textVariants.hidden, x: -100 } }}
                        transition={{ duration: 0.5 }}
                    >
                        Reach out to the global audience.
                    </motion.h1>
                </motion.div>

                <motion.p 
                    className='mt-2 text-lightColor font-bold'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </motion.p>
                <motion.p 
                    className='text-lightColor font-bold'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </motion.p>
            </div>
        </div>
    );
};

export default Header;
