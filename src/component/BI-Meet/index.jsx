import React, { useEffect, useState, useRef } from 'react';
import Popup from '../../Popup';
import { motion } from 'framer-motion';
import Meetimg from '../../assets/meet.png';

// Custom hook to detect if the component is in view
const useOnScreen = (ref) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.1, // Trigger when 10% of the component is visible
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref]);

    return isVisible;
};

const Meet = () => {
    const [isOpen, setIsOpen] = useState(false);
    const sectionRef = useRef(null); // Reference for the Meet component
    const isVisible = useOnScreen(sectionRef); // Use the custom hook

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

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    };

    useEffect(() => {
        console.log(`Meet component visibility: ${isVisible}`);
    }, [isVisible]); // Log visibility changes

    return (
        <section ref={sectionRef} className="h-screen flex justify-center items-center p-4 snap-start">
            <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto">
                {/* Image Section */}
                <div className="w-full md:w-1/2 flex items-center justify-center">
                    <motion.img
                        src={Meetimg}
                        alt="Business Meeting"
                        className="w-[250px] h-auto md:w-[550px] object-cover rounded-lg shadow-lg"
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        variants={imageVariants}
                    />
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
                    <motion.p
                        className='text-2xl sm:text-2xl md:text-3xl mt-2 text-darkColor dark:text-lightColor font-bold text-center'
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        variants={textVariants}
                        transition={{ delay: 0.4 }}
                    >
                        Are you ready to take your business online? We’re here to help! If you have questions or want to discuss your project, reach out to us today. Let’s start this journey together and make your business a success in the digital world!
                    </motion.p>
                    
                    <div className="flex justify-center mt-10">
                        <motion.button
                            className='px-4 py-2 bg-blue-600 text-darkColor dark:text-lightColor font-semibold rounded-lg transform transition-transform duration-200 hover:scale-105 hover:bg-blue-500'
                            onClick={handleButtonClick}
                            initial="hidden"
                            animate={isVisible ? "visible" : "hidden"}
                            variants={buttonVariants}
                        >
                            Schedule your meet
                        </motion.button>
                    </div>

                    {isOpen && <Popup onClose={handleClose} />}
                </div>
            </div>
        </section>
    );
};

export default Meet;
