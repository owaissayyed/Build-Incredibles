import React, { useState, useEffect, useRef } from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaSass, FaNodeJs, FaNpm, FaWordpressSimple, FaPython } from 'react-icons/fa';
import { SiMongodb } from "react-icons/si";
import { motion } from 'framer-motion';

const Services = () => {
  const servicesRef = useRef(null);

  const handleScroll = (event) => {
    event.stopPropagation();
  };

  useEffect(() => {
    const currentRef = servicesRef.current;
    if (currentRef) {
      currentRef.addEventListener('wheel', handleScroll, { passive: false });

      return () => {
        currentRef.removeEventListener('wheel', handleScroll);
      };
    }
  }, []);

  const iconsArray = [
    { icon: <FaHtml5 className="text-red-600" size={60} />, bg: 'bg-red-100' },
    { icon: <FaCss3Alt className="text-blue-600" size={60} />, bg: 'bg-blue-100' },
    { icon: <FaSass className="text-red-400" size={60} />, bg: 'bg-red-200' },
    { icon: <FaJsSquare className="text-yellow-600" size={60} />, bg: 'bg-yellow-100' },
    { icon: <FaReact className="text-blue-400" size={60} />, bg: 'bg-blue-200' },
    { icon: <FaNodeJs className="text-green-600" size={60} />, bg: 'bg-green-100' },
    { icon: <SiMongodb className="text-green-600" size={60} />, bg: 'bg-green-100' },
    { icon: <FaNpm className="text-red-200" size={60} />, bg: 'bg-red-500' },
    { icon: <FaWordpressSimple className="text-blue-700" size={60} />, bg: 'bg-blue-300' },
    { icon: <FaPython className="text-blue-500" size={60} />, bg: 'bg-blue-200' }
  ]

  return (

    <section className={`h-screen snap-start px-4 py-12 overflow-auto`}>
      {/* Icons Section */}
      <h1 className="text-4xl font-bold text-center text-darkColor dark:text-lightColor mb-8">Services</h1>
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 h-3/4 py-4 px-12 sm:px-24 lg:px-36">
        {iconsArray.map((item, index) => (
          <motion.div
            key={index}
            className={`flex justify-center items-center transition-transform transform hover:scale-110 ${item.bg} px-6 py-4 rounded-lg `}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>


    </section>
  );
};

export default Services;
