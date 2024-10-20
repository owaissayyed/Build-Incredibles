import React, { useEffect, useRef } from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaNpm, FaWordpressSimple, FaPython, FaGitAlt, FaDocker, FaFigma } from 'react-icons/fa';
import { SiMongodb, SiTypescript, SiNextdotjs, SiPostgresql, SiTailwindcss, SiRedux, SiFlutter } from 'react-icons/si';
import { motion } from 'framer-motion';

const TechStack = () => {
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
    { icon: <FaJsSquare className="text-yellow-600" size={60} />, bg: 'bg-yellow-100' },
    { icon: <FaReact className="text-blue-400" size={60} />, bg: 'bg-blue-200' },
    { icon: <FaNodeJs className="text-green-600" size={60} />, bg: 'bg-green-100' },
    { icon: <SiMongodb className="text-green-600" size={60} />, bg: 'bg-green-100' },
    { icon: <FaNpm className="text-red-200" size={60} />, bg: 'bg-red-500' },
    { icon: <FaWordpressSimple className="text-blue-700" size={60} />, bg: 'bg-blue-300' },
    { icon: <FaPython className="text-blue-500" size={60} />, bg: 'bg-blue-200' },
    { icon: <FaGitAlt className="text-orange-600" size={60} />, bg: 'bg-orange-100' },
    { icon: <FaDocker className="text-blue-400" size={60} />, bg: 'bg-blue-200' },
    { icon: <FaFigma className="text-purple-600" size={60} />, bg: 'bg-purple-100' },
    { icon: <SiTypescript className="text-blue-600" size={60} />, bg: 'bg-blue-100' },
    { icon: <SiNextdotjs className="text-black" size={60} />, bg: 'bg-gray-200' },
    { icon: <SiPostgresql className="text-blue-700" size={60} />, bg: 'bg-blue-100' },
    { icon: <SiTailwindcss className="text-cyan-400" size={60} />, bg: 'bg-cyan-100' },
    { icon: <SiRedux className="text-purple-600" size={60} />, bg: 'bg-purple-200' },
    { icon: <SiFlutter className="text-blue-500" size={60} />, bg: 'bg-blue-100' }, // Flutter
  ];

  return (
    <section className={`snap-start px-4 py-12`} ref={servicesRef}>
      <h1 className="text-4xl font-bold text-center text-darkColor dark:text-lightColor mb-8">TechStack</h1>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 h-3/4 py-4 px-1 sm:px-12 lg:px-24">
        {iconsArray.map((item, index) => (
          <motion.div
            key={index}
            className={`flex justify-center items-center h-24 w-24 transition-transform transform hover:scale-110 ${item.bg} rounded-lg`}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="flex justify-center items-center h-full w-full">
              {item.icon}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
