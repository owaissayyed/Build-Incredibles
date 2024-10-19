import React, { useEffect, useRef, useState } from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram, FaMedium } from 'react-icons/fa'; 
import './team.css';
import Arhamphoto from './Team-img/Arham.jpg';
import Yashphoto from './Team-img/Yash.jpeg';
import Owaisphoto from './Team-img/Owais.jpeg';
import Arsalanphoto from './Team-img/Arsalan.jpg';
import Fardeenphoto from './Team-img/Fardeen.jpg';
import afrahphoto from './Team-img/afrah.jpg';
import Sufiyanphoto from './Team-img/Sufiyan.jpg';

const teamMembers = [
  {
    name: 'Arham Sayyed',
    role: 'Founder & Full Stack Developer',
    image: Arhamphoto,
    description: 'Passionate Full Stack Developer & Security Researcher',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/arham-sayyed',
      github: 'http://github.com/arham-sayyed',
      instagram: 'http://instagram.com/_thatguywearinghoodie',
    },
  },
  {
    name: 'Yash Chauhan',
    role: 'Full Stack Developer',
    image: Yashphoto,
    description: 'A passionate and innovative software developer with hands-on experience in full-stack development and blockchain technology.',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/yash-chauhan-180031203/',
      github: 'http://github.com/itsYashASeeker',
      instagram: 'https://www.instagram.com/yashck.iso/',
    },
  },
  {
    name: 'Owais Sayyed',
    role: 'Frontend & API Developer',
    image: Owaisphoto,
    description: 'Dedicated to building responsive user interfaces and seamless API integrations.',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/owais-sayyed-361a04290/',
      github: 'http://github.com/owaissayyed',
      instagram: 'https://www.instagram.com/owaissayyed__/',
    },
  },
  {
    name: 'Arsalan Mirza',
    role: 'Security & Penetration Tester',
    image: Arsalanphoto,
    description: 'A passionate bug hunter and security researcher.',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/arsalan-mirza-b1a87b216/',
      instagram: 'https://www.instagram.com/arsalan.mirza/',
    },
  },
  {
    name: 'Fardeen Khan',
    role: 'Finance & Management',
    image: Fardeenphoto,
    description: 'Web Developer with a Keen Interest In Finance & Management.',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/fardeenfkhan',
      instagram: 'http://instagram.com/jst_fardeen',
    },
  },
  {
    name: 'Sufiyan Shaikh',
    role: 'Editor and videographer',
    image: Sufiyanphoto,
    description: 'Editor and videographer who loves using imagination to create engaging stories.',
    socialLinks: {
      instagram: 'https://www.instagram.com/iam___sufiyan?igsh=c2ZwcXU3emtyOXk5&utm_source=qr',
    },
  },
  {
    name: 'Afrah Shaikh',
    role: 'Content Writer',
    image: afrahphoto,
    description: 'A creative content writer who enjoys crafting engaging stories.',
    socialLinks: {
      medium: 'https://medium.com/@afrahshaikh114'
    },
  }
];

const TeamComponent = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleClick = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <section className=" py-12 snap-start px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-darkColor dark:text-lightColor">Meet Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 justify-center w-full h-auto py-4 px-12 sm:px-24 lg:px-36">
        {teamMembers.map((member, index) => (
          <div key={index} className="card-container" onClick={() => handleClick(index)} >
            <div className={`card ${flippedIndex === index ? 'flipped' : ''}`}>
              <div className="card-front bg-thirdprimary" >
                <div className="flex justify-center items-center h-32">
                  <img className="w-24 h-24 object-cover rounded-full border-4 border-white" src={member.image} alt={member.name} />
                </div>
                <div className="p-6 flex flex-col items-center text-center">
                  <h3 className="text-2xl font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-lightColor text-lg mt-2">{member.role}</p>
                </div>
              </div>
              <div className="card-back bg-gray-500">
                <p className="description text-lightColor">{member.description}</p>
                <div className="social-links flex justify-center items-center gap-2 hover:shadow-white">
                  <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />
                  </a>
                  <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                  <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                  <a href={member.socialLinks.medium} target="_blank" rel="noopener noreferrer">
                    <FaMedium />
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
