import React from 'react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import BuildIncredibleslogo from '../../assets/build-incredibles.png';

export function FooterComponent() {
  return (
    <footer className="bg-gray-600 text-white py-8">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start">
          <div className="flex items-center">
            <img src={BuildIncredibleslogo} alt="Build Incredibles Logo" className="h-10 mr-2 rounded-full" />
            <span className="text-lg font-bold">Build Incredibles</span>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:mt-0 sm:grid-cols-3">
            {/* <div>
              <h3 className="font-semibold">About</h3>
              <ul>
                <li><a href="#" className="hover:underline">BuildIncredibles</a></li>
                <li><a href="#" className="hover:underline">Tailwind CSS</a></li>
              </ul>
            </div> */}
            <div>
              <h3 className="font-semibold">Follow us</h3>
              <ul>
                <li><a href="#" className="hover:underline">Github</a></li>
                <li><a href="#" className="hover:underline">Discord</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Legal</h3>
              <ul>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-500 my-4" />
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Build Incredibles™</p>
          <div className="mt-4 flex space-x-6 sm:mt-0">
            <a href="#" className="hover:text-gray-400"><BsFacebook size={20} /></a>
            <a href="#" className="hover:text-gray-400"><BsInstagram size={20} /></a>
            <a href="#" className="hover:text-gray-400"><BsTwitter size={20} /></a>
            <a href="#" className="hover:text-gray-400"><BsGithub size={20} /></a>
            <a href="#" className="hover:text-gray-400"><BsDribbble size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
