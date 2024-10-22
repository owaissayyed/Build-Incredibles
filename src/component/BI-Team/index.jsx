import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram, FaMedium } from "react-icons/fa"; 
import PropTypes from "prop-types";
import './team.css';

// Import your team member images
import Arhamphoto from './Team-img/Arham.jpg';
import Yashphoto from './Team-img/Yash.jpeg';
import Owaisphoto from './Team-img/Owais.jpeg';
import Arsalanphoto from './Team-img/Arsalan.jpg';
import Fardeenphoto from './Team-img/Fardeen.jpg';
import afrahphoto from './Team-img/afrah.jpg';
import Sufiyanphoto from './Team-img/Sufiyan.jpg';

const teamMembers = [
  {
    picture: Arhamphoto,
    fullName: 'Arham Sayyed',
    designation: 'Founder & Full Stack Developer',
    bio: 'Passionate Full Stack Developer & Security Researcher',
    socialLinks: [
      { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/arham-sayyed' },
      { icon: FaGithub, href: 'http://github.com/arham-sayyed' },
      { icon: FaInstagram, href: 'http://instagram.com/_thatguywearinghoodie' },
    ],
  },
  {
    picture: Yashphoto,
    fullName: 'Yash Chauhan',
    designation: 'Full Stack Developer',
    bio: 'A passionate and innovative software developer with hands-on experience in full-stack development and blockchain technology.',
    socialLinks: [
      { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/yash-chauhan-180031203/' },
      { icon: FaGithub, href: 'http://github.com/itsYashASeeker' },
      { icon: FaInstagram, href: 'https://www.instagram.com/yashck.iso/' },
    ],
  },
  {
    picture: Owaisphoto,
    fullName: 'Owais Sayyed',
    designation: 'MERN Stack Developer',
    bio: ' A MERN stack developer skilled in building dynamic web applications, combining responsive front-end design with efficient back-end functionality. Proficient in API integration and database management for scalable solutions.',
    socialLinks: [
      { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/owais-sayyed-361a04290/' },
      { icon: FaGithub, href: 'http://github.com/owaissayyed' },
      { icon: FaInstagram, href: 'https://www.instagram.com/owaissayyed__/' },
    ],
  },
  {
    picture: Arsalanphoto,
    fullName: 'Arsalan Mirza',
    designation: 'Security & Penetration Tester',
    bio: 'A passionate bug hunter and security researcher.',
    socialLinks: [
      { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/arsalan-mirza-b1a87b216/' },
      { icon: FaInstagram, href: 'https://www.instagram.com/arsalan.mirza/' },
    ],
  },
  {
    picture: Fardeenphoto,
    fullName: 'Fardeen Khan',
    designation: 'Finance & Management',
    bio: 'Web Developer with a Keen Interest In Finance & Management.',
    socialLinks: [
      { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/fardeenfkhan' },
      { icon: FaInstagram, href: 'http://instagram.com/jst_fardeen' },
    ],
  },
  {
    picture: Sufiyanphoto,
    fullName: 'Sufiyan Shaikh',
    designation: 'Editor and Videographer',
    bio: 'Editor and videographer who loves using imagination to create engaging stories.',
    socialLinks: [
      { icon: FaInstagram, href: 'https://www.instagram.com/iam___sufiyan?igsh=c2ZwcXU3emtyOXk5&utm_source=qr' },
    ],
  },
  {
    picture: afrahphoto,
    fullName: 'Afrah Shaikh',
    designation: 'Content Writer',
    bio: 'A creative content writer who enjoys crafting engaging stories.',
    socialLinks: [
      { icon: FaMedium, href: 'https://medium.com/@afrahshaikh114' },
    ],
  }
];

const TeamMemberItem = ({ member }) => (
  <div className="bg-slate-800 shadow-xl rounded-xl hover:-translate-y-1 duration-500 h-full p-6 lg:p-8">
    <img
      src={member.picture}
      alt={member.fullName}
      className="w-32 h-32 rounded-full border-4 p-1 border-blue-600 mx-auto -mt-20"
      style={{ objectFit: "cover" }} // Ensures images maintain aspect ratio
    />
    <div className="mt-6">
      <h4 className="text-2xl font-medium mb-1">{member.fullName}</h4>
      <p className="mb-4 text-sm">{member.designation}</p>
      <p className="opacity-50">{member.bio}</p>
      <div className="mt-6">
        {member.socialLinks.map((item, i) => (
          <a
            href={item.href}
            className={`inline-block opacity-60 transition duration-300 hover:translate-y-1 hover:opacity-100 ${i + 1 !== member.socialLinks.length && "mr-4"}`}
            key={i}
          >
            <item.icon />
          </a>
        ))}
      </div>
    </div>
  </div>
);

TeamMemberItem.propTypes = {
  member: PropTypes.object.isRequired,
};

const TeamComponent = () => {
  return (
    <section className="ezy__team10 light py-14 md:py-24 text-white">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center mb-6 md:mb-12">
          <div className="max-w-lg text-center ">
            <h2 className="text-3xl leading-none font-bold md:text-[45px] mb-4 text-zinc-900 dark:text-white">Meet Our Team</h2>
            <p className="text-zinc-900 dark:text-white mb-7">Our dedicated team is the heart of Build Incredibles, and we are proud to introduce the talented individuals who make it all happen:</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center pt-6 ">
          {teamMembers.map((member, i) => (
            <div className="flex justify-center mb-8" key={i}>
              <TeamMemberItem member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamComponent;