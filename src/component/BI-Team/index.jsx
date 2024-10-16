import React, { useEffect, useRef } from 'react';
import './Team.css';

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
    },
  }
];

const TeamComponent = () => {
  const teamRef = useRef(null);

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

  return (
    // <div 
    //   ref={teamRef} 
    //   className="py-12"  
    //   style={{ overflowY: 'auto', height: '100vh' }}
    // >
    <section className={`h-screen py-12  snap-start`}>
      <h2 className="text-3xl font-bold text-center mb-8 text-darkColor dark:text-lightColor ">Meet Our Team</h2>

      <div className="flex flex-wrap justify-center ">
        {teamMembers.map((member, index) => (
          <div key={index} className="card-container">
            <div className="card">
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
                <p className="description">{member.description}</p>
                <div className="social-links">
                  <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
                  <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
                  <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
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