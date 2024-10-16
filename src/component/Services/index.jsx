import React, { useState, useEffect, useRef } from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaSass, FaNodeJs, FaNpm, FaWordpressSimple, FaPython } from 'react-icons/fa';
import { SiMongodb } from "react-icons/si";
import { motion } from 'framer-motion';

// Mapping of service titles to their respective arrays of icons
const icons = {
  'Website Design': [
    <FaHtml5 className="animate-bounce" size={30} />,
    <FaCss3Alt className="animate-bounce" size={30} />,
    <FaReact className="animate-bounce" size={30} />,
  ],
  'Mobile Applications': [
    <FaJsSquare className="animate-bounce" size={30} />,
    <FaReact className="animate-bounce" size={30} />,
    <FaNodeJs className="animate-bounce" size={30} />,
  ],
  'Web Applications': [
    <FaReact className="animate-bounce" size={30} />,
    <FaNodeJs className="animate-bounce" size={30} />,
    <SiMongodb className="animate-bounce" size={30} />,
  ],
  'E-commerce Websites': [
    <FaSass className="animate-bounce" size={30} />,
    <FaHtml5 className="animate-bounce" size={30} />,
    <FaCss3Alt className="animate-bounce" size={30} />,
  ],
  'Database Management': [
    <SiMongodb className="animate-bounce" size={30} />,
    <FaNodeJs className="animate-bounce" size={30} />,
  ],
  'API Development': [
    <FaNodeJs className="animate-bounce" size={30} />,
    <FaNpm className="animate-bounce" size={30} />,
    <FaReact className="animate-bounce" size={30} />,
  ],
  'Business Integration and Automations': [
    <FaNpm className="animate-bounce" size={30} />,
    <FaNodeJs className="animate-bounce" size={30} />,
  ],
  'Graphic Designing': [
    <FaCss3Alt className="animate-bounce" size={30} />,
    <FaReact className="animate-bounce" size={30} />,
    <FaSass className="animate-bounce" size={30} />,
  ],
  'Video Editing': [
    <FaWordpressSimple className="animate-bounce" size={30} />,
    <FaPython className="animate-bounce" size={30} />,
    <FaReact className="animate-bounce" size={30} />,
  ],
};

const services = [
  { title: 'Website Design', description: 'Creating visually appealing and user-friendly websites tailored to your business needs.', icons: icons['Website Design'] },
  { title: 'Mobile Applications', description: 'Developing responsive and high-performance mobile apps that engage users effectively.', icons: icons['Mobile Applications'] },
  { title: 'Web Applications', description: 'Building robust and scalable web applications for various industries.', icons: icons['Web Applications'] },
  { title: 'E-commerce Websites', description: 'Designing and developing online stores with optimized user experiences.', icons: icons['E-commerce Websites'] },
  { title: 'Database Management', description: 'Managing and optimizing databases for enhanced performance and reliability.', icons: icons['Database Management'] },
  { title: 'API Development', description: 'Creating and integrating APIs for seamless connectivity and functionality.', icons: icons['API Development'] },
  { title: 'Business Integration and Automations', description: 'Streamlining business processes and automating tasks for increased efficiency.', icons: icons['Business Integration and Automations'] },
  { title: 'Graphic Designing', description: 'Designing creative graphics for branding and marketing across various platforms.', icons: icons['Graphic Designing'] },
  { title: 'Video Editing', description: 'Editing and producing high-quality video content for marketing and engagement.', icons: icons['Video Editing'] },
];

const ServiceCard = ({ title, description, icons, isLeft }) => (
  <motion.div
    className={`service-cards max-w-md h-48 rounded-lg border-2 border-darkColor dark:border-lightColor bg-thirdprimary text-lightColor p-6 m-4 flex flex-col justify-between items-center text-center transition-transform transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500 ease-in-out relative overflow-hidden ${isLeft ? 'mr-auto' : 'ml-auto'}`}
    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="absolute inset-0 opacity-20 rounded-lg"></div>
    <div className="relative z-10">
      <div className="font-bold text-xl mb-2 text-darkColor dark:text-lightColor">{title}</div>
      <p className="text-darkGray dark:text-lightGray text-base">{description}</p>
    </div>
    <div className="relative z-10 mt-4 text-darkGray dark:text-lightGray flex justify-center">
      {icons.map((icon, index) => (
        <div key={index} className="mx-2 transition-transform transform hover:scale-125">{icon}</div>
      ))}
    </div>
  </motion.div>
);

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

  return (
    // <div 
    //   ref={servicesRef} 
    //   className="min-h-screen overflow-hidden p-4"  
    //   style={{ overflowY: 'auto', height: '100vh' }}
    // >
    <section className={`h-screen  snap-start p-4 overflow-auto`}>
      {/* Icons Section */}
      <motion.div
        className="flex justify-around items-center p-4 mt-7"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {[
          { icon: <FaHtml5 className="text-red-600" size={60} />, bg: 'bg-red-100' },
          { icon: <FaCss3Alt className="text-blue-600" size={60} />, bg: 'bg-blue-100' },
          { icon: <FaSass className="text-red-400" size={60} />, bg: 'bg-red-200' },
          { icon: <FaJsSquare className="text-yellow-600" size={60} />, bg: 'bg-yellow-100' },
          { icon: <FaReact className="text-blue-400" size={60} />, bg: 'bg-blue-200' },
        ].map(({ icon, bg }, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center transition-transform transform hover:scale-110 ${bg} p-2 rounded`}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {icon}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="flex justify-around items-center p-4 mt-7"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {[
          { icon: <FaNodeJs className="text-green-600" size={60} />, bg: 'bg-green-100' },
          { icon: <SiMongodb className="text-green-600" size={60} />, bg: 'bg-green-100' },
          { icon: <FaNpm className="text-red-200" size={60} />, bg: 'bg-red-500' },
          { icon: <FaWordpressSimple className="text-blue-700" size={60} />, bg: 'bg-blue-300' },
          { icon: <FaPython className="text-blue-500" size={60} />, bg: 'bg-blue-200' },
        ].map(({ icon, bg }, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center transition-transform transform hover:scale-110 ${bg} p-2 rounded`}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {icon}
          </motion.div>
        ))}
      </motion.div>

      {/* Service Cards Section */}
      {/* <div className="flex flex-col items-center mt-10 relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-darkGray dark:border-lightGray"></div>
        <div className="flex flex-wrap justify-center">
          {services.map((service, index) => (
            <div key={index} className={`w-full flex justify-${index % 2 === 0 ? 'end' : 'start'} p-4 relative`}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icons={service.icons}
                isLeft={index % 2 !== 0}
              />
              {index < services.length - 1 && (
                <div className="max-lg:hidden absolute h-1 w-12 bg-darkGray dark:bg-lightGray left-1/2 transform -translate-x-1/2 top-24"></div>
              )}
            </div>
          ))}
        </div>
        <div className="absolute h-full border-l-2 border-darkGray dark:border-lightGray left-1/2 transform -translate-x-1/2 top-0"></div>
      </div> */}
    </section>
  );
};

export default Services;
