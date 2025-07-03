import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg px-6 py-3 flex items-center justify-between rounded-none md:rounded-full">
      
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <span className="text-[#372aac] font-bold text-xl tracking-wide">LxJ</span>
      </div>

      {/* Center Links: Desktop */}
      <div className="hidden md:flex space-x-8 text-[#57534d] font-medium">
        <a href="#" className="hover:text-[#8ec5ff] transition">Home</a>
        <a href="#" className="hover:text-[#8ec5ff] transition">Our Story</a>
        <a href="#" className="hover:text-[#8ec5ff] transition">Join Us</a>
      </div>

      {/* Right Auth Buttons: Desktop */}
      <div className="hidden md:flex items-center space-x-4">
        <button className="text-[#57534d] hover:text-[#d8315b] transition font-semibold">Sign In</button>
        <button className="bg-[#d8315b] hover:bg-[#b92549] text-white px-4 py-2 rounded-full text-sm font-semibold shadow">
          Get Started
        </button>
      </div>

      {/* Mobile Toggle Button */}
      <div className="md:hidden z-50">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6 text-[#1e1b18]" /> : <Menu className="h-6 w-6 text-[#1e1b18]" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div className={`absolute top-full left-0 w-full bg-white px-6 py-4 md:hidden shadow-lg transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
        <a href="#" className="block py-2 text-[#1e1b18] hover:text-[#3e92cc]">Home</a>
        <a href="#" className="block py-2 text-[#1e1b18] hover:text-[#3e92cc]">Our Story</a>
        <a href="#" className="block py-2 text-[#1e1b18] hover:text-[#3e92cc]">Join Us</a>
        <hr className="my-2" />
        <button className="block w-full text-left py-2 text-[#1e1b18] hover:text-[#3e92cc] font-semibold">Sign In</button>
        <button className="w-full bg-[#d8315b] hover:bg-[#b92549] text-white px-4 py-2 rounded-full text-sm font-semibold shadow mt-2">
          Get Started
        </button>
      </div>
    </nav>
  );
}
