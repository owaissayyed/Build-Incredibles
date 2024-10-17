
import React, { useEffect, useRef, useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa'; 
import './team.css';
import Arhamphoto from './Team-img/Arham.jpg'
import Yashphoto from './Team-img/Yash.jpeg'
import Owaisphoto from './Team-img/Owais.jpeg'
import Arsalanphoto from './Team-img/Arsalan.jpg'
import Fardeenphoto from './Team-img/Fardeen.jpg'
import afrahphoto from './Team-img/afrah.jpg'
import Sufiyanphoto from './Team-img/Sufiyan.jpg'

const teamMembers = [
  {
    name: 'Arham Sayyed',
    role: 'Founder & Full Stack Developer',
    image: Arhamphoto,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Yash Chauhan',
    role: 'Full Stack Developer',
    image: Yashphoto,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Owais Sayyed',
    role: 'Frontend & API Developer',
    image: Owaisphoto,
    description: 'Owais Sayyed is a Frontend & API Developer dedicated to building responsive user interfaces and seamless API integrations. With a focus on modern web technologies,delivers efficient and high-quality solutions.',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Arsalan Mirza',
    role: 'Security & Penetration Tester',
    image: Arsalanphoto,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Person 5',
    role: 'Finance & Management',
    image: Fardeenphoto,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Person 6',
    role: 'Designer',
    image: Sufiyanphoto,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Person 7',
    role: 'Content Writer',
    image: afrahphoto,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  }
];

const TeamComponent = () => {
  const teamRef = useRef(null);
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleScroll = (event) => {
    event.stopPropagation();
  };

  useEffect(() => {
    const currentRef = teamRef.current;
    if (currentRef) {
      currentRef.addEventListener('wheel', handleScroll, { passive: false });
      return () => {
        currentRef.removeEventListener('wheel', handleScroll);
      };
    }
  }, []);

  const handleMouseEnter = (index) => {
    setFlippedIndex(index);
  };

  const handleMouseLeave = () => {
    setFlippedIndex(null);
  };

  return (
    // <div 
    //   ref={teamRef} 
    //   className="py-12"  
    //   style={{ overflowY: 'auto', height: '100vh' }}
    // >
    <section className={`h-screen py-12  snap-start px-4`}>
      <h1 className="text-4xl font-bold text-center text-darkColor dark:text-lightColor mb-8">Meet Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 justify-center w-full h-3/4 py-4 px-12 sm:px-24 lg:px-36 overflow-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="card-container"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={`card ${flippedIndex === index ? 'flipped' : ''}`}>
              <div className="card-front bg-thirdprimary">
                <div className="flex justify-center items-center h-32">
                  <img className="w-24 h-24 object-cover rounded-full border-4 border-white" src={member.image} alt={member.name} />
                </div>
                <div className="p-6 flex flex-col items-center text-center">
                  <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-lightColor text-2xl mt-2">{member.role}</p>
                </div>
              </div>
              <div className="card-back bg-gray-500">
                <p className="description text-lightColor">{member.description}</p>
                <div className="social-links flex justify-center items-center gap-2">
                  <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                  </a>
                  <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </a>
                  <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />
                  </a>
                  <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamComponent;