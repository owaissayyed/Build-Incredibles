import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../themeContext';
import MobileWebimg from '../../assets/mobileweb.png';
import desktopWebimg from '../../assets/web.webp';
import '../../app.css'

const Header = () => {
    const { toggleTheme } = useTheme();
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const terminalVariants = {
        float: {
            y: [0, -10, 0],
            transition: {
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
            }
        }
    };

    const firstTerminalStyle = {
        top: screenWidth < 768 ? '48%' : '40%',
        left: screenWidth < 768 ? '4%' : '16%',
        width: screenWidth < 768 ? '100px' : '120px',
        position: 'absolute',  // Use absolute here
    };

    const secondTerminalStyle = {
        top: screenWidth < 768 ? '82%' : '85%',
        left: screenWidth < 768 ? '50%' : '77%',
        width: screenWidth < 768 ? '100px' : '120px',
        position: 'absolute',  // Use absolute here
    };

    return (
        <section className="h-lvh justify-center items-center snap-start relative "  > {/* Set relative positioning on the section */}


            <div>
                {/* Floating Terminal Elements */}
                <motion.div 
                    variants={terminalVariants} 
                    animate="float" 
                    className="bg-gray-800 text-white p-2 rounded-md shadow-md text-left text-sm"
                    style={firstTerminalStyle} 
                >
                    <div className="flex items-center">
                        <div className="bg-red-500 rounded-full w-2 h-2 mx-1" />
                        <div className="bg-yellow-500 rounded-full w-2 h-2 mx-1" />
                        <div className="bg-green-500 rounded-full w-2 h-2 mx-1" />
                    </div>
                    <div className="border-b-2 border-gray-500 mt-1" />
                    <p className="text-xs">{'<web app/>'}</p>
                </motion.div>

                <motion.div 
                    variants={terminalVariants} 
                    animate="float" 
                    className="bg-gray-800 text-white p-2 rounded-md shadow-md text-left text-sm"
                    style={secondTerminalStyle} 
                >
                    <div className="flex items-center">
                        <div className="bg-red-500 rounded-full w-2 h-2 mx-1" />
                        <div className="bg-yellow-500 rounded-full w-2 h-2 mx-1" />
                        <div className="bg-green-500 rounded-full w-2 h-2 mx-1" />
                    </div>
                    <div className="border-b-2 border-gray-500 mt-1" />
                    <p className="text-xs">{'<mobile app/>'}</p>
                </motion.div>

                <motion.div 
                    variants={terminalVariants} 
                    animate="float" 
                    className="bg-gray-800 text-white p-2 rounded-md shadow-md text-left text-sm hidden md:block"
                    style={{
                        top: '80%',
                        left: '18%',
                        width: '120px',
                        position: 'absolute', // Use absolute here
                    }} 
                >
                    <div className="flex items-center">
                        <div className="bg-red-500 rounded-full w-2 h-2 mx-1" />
                        <div className="bg-yellow-500 rounded-full w-2 h-2 mx-1" />
                        <div className="bg-green-500 rounded-full w-2 h-2 mx-1" />
                    </div>
                    <div className="border-b-2 border-gray-500 mt-1" />
                    <p className="text-xs">{'<artificial intelligence/>'}</p>
                </motion.div>
            </div>

            <div className="text-center px-4 mt-5">
                <motion.div
                    className="flex flex-col"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-darkColor dark:text-lightColor md:mt-10 mt-20">
                        Take your business online,
                    </p>
                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondprimary dark:text-primary">
                        Reach out to the global audience.
                    </p>
                    <p className="text-sm sm:text-base mt-2 text-darkColor dark:text-lightColor font-bold">
                    In today’s digital landscape, having an online presence is crucial for growth. At Build Incredibles,  we help businesses like yours thrive online—whether it’s creating a stunning website or launching your online store. Let’s unlock your potential and elevate your business together!
                    </p>
                    <p className="text-sm sm:text-base text-darkColor dark:text-lightColor font-bold">
                    Let’s work together to unlock your online potential and elevate your business to new heights!
                    </p>
                </motion.div>
            </div> 
            <div className="flex flex-col md:flex-row justify-center relative">
                <img 
                    src={desktopWebimg} 
                    alt="Desktop Website" 
                    className="w-full md:w-[590px] max-w-[80%] md:h-[360px] h-auto ml-10 md:mt-[30px] mt-[65px]"
                />
                <img 
                    src={MobileWebimg} 
                    alt="Mobile App" 
                    className="md:w-[110px] md:h-[250px] w-[70px] h-[150px] md:mt-[160px] md:ml-[-30px] ml-[280px] mt-[-80px]"
                />
            </div>
        </section>
    );
};

export default Header;