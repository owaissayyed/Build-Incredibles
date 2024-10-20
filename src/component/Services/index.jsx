import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const useOnScreen = (ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Adjusted threshold
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

const services = [
  "Website Design",
  "Mobile Applications",
  "Web Applications",
  "E-commerce Websites",
  "Database Management",
  "API Development",
  "Graphic Designing",
  "Video Editing"
];

const ServiceComponent = () => {
  const sectionRef = useRef(null);
  const isVisible = useOnScreen(sectionRef);

  return (
    <section 
      ref={sectionRef} 
      id="services-section" 
      className="flex flex-col items-center justify-center py-12"
    >
      <h1 className="text-4xl font-bold text-center mb-8 text-darkColor dark:text-lightColor">Our Services</h1>
      
      <div className="relative flex items-center justify-center w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center w-full">
          {services.slice(0, 4).map((service, index) => (
            <motion.article
              key={index}
              className="p-6 border rounded-lg bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              initial={{ opacity: 0, y: 20 }}
            >
              <h2 className="text-lg md:text-xl font-bold text-blue-600 transition-colors duration-300 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">{service}</h2>
              <p className="text-sm text-darkGray mt-2 dark:text-lightGray">Elevate your business with our exceptional {service.toLowerCase()} solutions.</p>
            </motion.article>
          ))}

          <div className="flex items-center justify-center col-span-1">
            <motion.div
              className="flex justify-center items-center"
              animate={isVisible ? { y: 0, scale: 1 } : { y: -100, scale: 1.2 }}
              transition={{ duration: 0.7, ease: [0.2, 1, 0.3, 1] }}
              initial={{ y: -100, scale: 1.2 }}
            >
              <img 
                src="https://s3-alpha-sig.figma.com/img/f292/22f2/0dadda15819562ae90af3be3b9daefba?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bIjK70pNttI0MPQx3zaWwWDHzEhrqXyyU-vH5LC5hnScvt5O96x1pi7u5HF4QtnRgompeMdxUf2GeyLHHZ2NtxpltXhn1xQ8Cf2-ufv5ExoTIdEdNN2o92QpvfamtLWVzvQWjKEqh0Jisev~j-9jUScq1Y4s3MkJrCPUgOf0U1S~1EJTGQntHp7M8eWafe9mtzmZEZ8lssfJL9RXjH0ZqpoFmYQf3WjfarJc8onQZlwG-Hg~06RdOS1vU0~Op8bvmQ4L481FBr3iJWiYrkgZ9LR6VHhRqV6Wm163lPixc8JFKCzX4lfWfrM6jbX89nIMaGspNqFzSeMKLXnTIIf6dw__" 
                alt="Rocket landing" 
                className="w-32 h-32 md:w-40 md:h-40 object-contain" 
                loading="lazy"
              />
            </motion.div>
          </div>

          {services.slice(4).map((service, index) => (
            <motion.article
              key={index}
              className="p-6 border rounded-lg bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              initial={{ opacity: 0, y: 20 }}
            >
              <h2 className="text-lg md:text-xl font-bold text-blue-600 transition-colors duration-300 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">{service}</h2>
              <p className="text-sm text-darkGray mt-2 dark:text-lightGray">Elevate your business with our exceptional {service.toLowerCase()} solutions.</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceComponent;
