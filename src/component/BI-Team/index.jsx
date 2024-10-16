
import React, { useEffect, useRef, useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa'; // Importing GitHub icon
import './team.css';

const teamMembers = [
  {
    name: 'Person 1',
    role: 'Project Manager',
    image: 'https://via.placeholder.com/150',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Person 2',
    role: 'Developer',
    image: 'https://via.placeholder.com/150',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Person 3',
    role: 'Designer',
    image: 'https://via.placeholder.com/150',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Person 4',
    role: 'Project Manager',
    image: 'https://via.placeholder.com/150',
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
    role: 'Developer',
    image: 'https://via.placeholder.com/150',
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
    image: 'https://via.placeholder.com/150',
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
    role: 'Project Manager',
    image: 'https://via.placeholder.com/150',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Person 8',
    role: 'Developer',
    image: 'https://via.placeholder.com/150',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Person 9',
    role: 'Designer',
    image: 'https://via.placeholder.com/150',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Person 10',
    role: 'Designer',
    image: 'https://via.placeholder.com/150',
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