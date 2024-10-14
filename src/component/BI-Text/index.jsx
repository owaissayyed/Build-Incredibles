import React from 'react';
import { Typewriter } from "react-simple-typewriter";
import { motion } from 'framer-motion';

const Information = () => {
    const textVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <div className='min-h-screen flex justify-center items-center text-center'>
            <motion.div
                className='text-7xl text-lightColor font-bold neon-text'
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8 }}
            >
                <Typewriter
                    words={[`Build Incredibles 🚀`]}
                    loop={1}
                    cursor
                />
            </motion.div>
        </div>
    );
};

export default Information;