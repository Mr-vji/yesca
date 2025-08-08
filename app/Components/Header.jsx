"use client";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import RevealAnimation from "../R3F/RevealAnimation";

export const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const menuRef = useRef(null);
   const topLineRef = useRef(null);
   const middleLineRef = useRef(null);
   const bottomLineRef = useRef(null);

   useEffect(() => {
      gsap.to(topLineRef.current, {
         y: isMenuOpen ? 8 : 0,
         rotation: isMenuOpen ? 45 : 0,
         duration: 0.3,
         ease: "power2.inOut",
      });
      gsap.to(middleLineRef.current, {
         opacity: isMenuOpen ? 0 : 1,
         duration: 0.3,
         ease: "power2.inOut",
      });
      gsap.to(bottomLineRef.current, {
         y: isMenuOpen ? -8 : 0,
         rotation: isMenuOpen ? -45 : 0,
         duration: 0.3,
         ease: "power2.inOut",
      });
      gsap.to(menuRef.current, {
         height: isMenuOpen ? "auto" : 0,
         duration: 0.3,
         ease: "power2.inOut",
      });
   }, [isMenuOpen]);

   return (
      <header className="w-full px-6 py-4 flex justify-between items-center bg-white shadow-md fixed top-0 left-0 z-50">
         <div className="flex items-center">
            <RevealAnimation />
         </div>

         <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 relative w-6 h-6"
         >
            <svg
               className="w-full h-full absolute top-0 left-0"
               fill="none"
               stroke="currentColor"
               viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  ref={topLineRef}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16"
               ></path>
               <path
                  ref={middleLineRef}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 12h16"
               ></path>
               <path
                  ref={bottomLineRef}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 18h16"
               ></path>
            </svg>
         </button>

         <nav className="hidden md:flex space-x-6 text-gray-700 font-medium text-sm">
            <a href="Pages/Home" className="hover:text-blue-500 transition">
               Home
            </a>
            <a href="#services" className="hover:text-blue-500 transition">
               Products
            </a>
            <a href="#work" className="hover:text-blue-500 transition">
               It services
            </a>
            <a href="/About" className="hover:text-blue-500 transition">
               Dev services
            </a>
            <a href="#contact" className="hover:text-blue-500 transition">
               About
            </a>
            <a href="#contact" className="hover:text-blue-500 transition">
               Contact
            </a>
         </nav>

         <div
            ref={menuRef}
            className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md overflow-hidden"
            style={{ height: 0 }}
         >
            <nav className="flex flex-col space-y-4 p-6 text-gray-700 font-medium text-sm">
               <a href="Pages/Home" className="hover:text-blue-500 transition">
                  Home
               </a>
               <a href="#services" className="hover:text-blue-500 transition">
                  Products
               </a>
               <a href="#work" className="hover:text-blue-500 transition">
                  It services
               </a>
               <a href="/About" className="hover:text-blue-500 transition">
                  Dev services
               </a>
               <a href="#contact" className="hover:text-blue-500 transition">
                  About
               </a>
               <a href="#contact" className="hover:text-blue-500 transition">
                  Contact
               </a>
            </nav>
         </div>
      </header>
   );
};
