import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="navbar w-full h-full flex flex-row items-center justify-between m-auto">
        
        {/* Logo & Name */}
        <a href="#about-me" className="flex items-center">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-2 hidden md:block text-gray-300 text-sm md:text-base">
            WebChain Dev
          </span>
        </a>

        {/* Center Nav Links */}
        <div className="hidden md:flex w-auto h-full items-center justify-between md:mr-20">
          <div className="flex items-center space-x-6 border border-[#7042f861] bg-[#0300145e] px-4 py-2 rounded-full text-gray-200 text-sm">
            <a href="#about-me" className="cursor-pointer hover:text-white">About me</a>
            <a href="#skills" className="cursor-pointer hover:text-white">Skills</a>
            <a href="#projects" className="cursor-pointer hover:text-white">Projects</a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-row gap-4">
          <Instagram size={20} className="text-gray-300 hover:text-white cursor-pointer transition-colors" />
          <Linkedin size={20} className="text-gray-300 hover:text-white cursor-pointer transition-colors" />
          <Twitter size={20} className="text-gray-300 hover:text-white cursor-pointer transition-colors" />
          <Github size={20} className="text-gray-300 hover:text-white cursor-pointer transition-colors" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
