// Meet.jsx
import React, { useState } from 'react';
import Popup from '../../Popup'; 
import { motion } from 'framer-motion';

const Meet = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleButtonClick = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    // Animation variants
    const textVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const buttonVariants = {
        hidden: { scale: 0 },
        visible: { scale: 1, transition: { duration: 0.5 } },
    };

    return (
        <div className='h-lvh flex justify-center items-center text-center'>
            <div className='w-90'>
                <motion.h1 
                    className='text-5xl font-bold text-lightColor' 
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                >
                    Take your business online,
                </motion.h1>
                <motion.h1 
                    className='text-5xl font-bold text-lightColor' 
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    transition={{ delay: 0.2 }}
                >
                    Reach out to the global audience.
                </motion.h1>
                <motion.p 
                    className='mt-2 text-lightColor font-bold' 
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    transition={{ delay: 0.4 }}
                >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </motion.p>

                {/* Button */}
                <motion.button 
                    className='mt-10 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg transform transition-transform duration-200 hover:scale-105 hover:bg-blue-500'
                    onClick={handleButtonClick}
                    initial="hidden"
                    animate="visible"
                    variants={buttonVariants}
                >
                    Schedule your meet
                </motion.button>

                {isOpen && <Popup onClose={handleClose} />}
            </div>
        </div>
    );
};

export default Meet;
