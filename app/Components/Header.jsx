"use client";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import RevealAnimation from "../R3F/RevealAnimation";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const menuRef = useRef(null);
   const topLineRef = useRef(null);
   const middleLineRef = useRef(null);
   const bottomLineRef = useRef(null);

   useEffect(() => {
      gsap.to(topLineRef.current, {
         y: isMenuOpen ? 6 : 0,
         rotation: isMenuOpen ? 45 : 0,
         transformOrigin: "center",
         duration: 0.3,
         ease: "power2.inOut",
      });
      gsap.to(middleLineRef.current, {
         opacity: isMenuOpen ? 0 : 1,
         duration: 0.3,
         ease: "power2.inOut",
      });
      gsap.to(bottomLineRef.current, {
         y: isMenuOpen ? -6 : 0,
         rotation: isMenuOpen ? -45 : 0,
         transformOrigin: "center",
         duration: 0.3,
         ease: "power2.inOut",
      });
      gsap.to(menuRef.current, {
         height: isMenuOpen ? "auto" : 0,
         duration: 0.3,
         ease: "power2.inOut",
      });
   }, [isMenuOpen]);

   // Page transition effect

   const router = useRouter();
   const coverRef = useRef(null);

   useEffect(() => {
      if (!document.startViewTransition) return; // Fallback for browsers without support

      // Override Next.js routing to use view transitions
      const originalPush = router.push;
      router.push = (href, options) => {
         document.startViewTransition(() => {
            originalPush(href, options);
         });
      };
   }, [router]);

   const handleNavClick = (e, href) => {
      e.preventDefault(); // stop immediate navigation
      gsap.to(coverRef.current, {
         yPercent: 0, // slide cover down
         duration: 0,
         ease: "power2.inOut",
         onComplete: () => {
            router.push(href);
         },
      });
   };

   return (
      <header className="w-full px-6 py-4 flex justify-between items-center bg-white/100 backdrop-blur-md shadow-lg fixed top-0 left-0 z-50">
         {/* Logo / Left */}
         <div className="flex items-center">
            <RevealAnimation />
         </div>

         {/* Hamburger Menu Button */}
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
               <line
                  ref={topLineRef}
                  x1="4"
                  y1="6"
                  x2="20"
                  y2="6"
                  strokeWidth="2"
                  strokeLinecap="round"
               />
               <line
                  ref={middleLineRef}
                  x1="4"
                  y1="12"
                  x2="20"
                  y2="12"
                  strokeWidth="2"
                  strokeLinecap="round"
               />
               <line
                  ref={bottomLineRef}
                  x1="4"
                  y1="18"
                  x2="20"
                  y2="18"
                  strokeWidth="2"
                  strokeLinecap="round"
               />
            </svg>
         </button>

         {/* Desktop Menu */}
         {/* <nav className="hidden md:flex space-x-6 text-gray-800 font-medium text-sm">
            <Link href="/" className="hover:text-blue-500 transition">
               Home
            </Link>
            <Link href="/Products" className="hover:text-blue-500 transition">
               Products
            </Link>
            <Link href="/ItServices" className="hover:text-blue-500 transition">
               IT Services
            </Link>
            <Link href="/Devservices" className="hover:text-blue-500 transition">
               Dev Services
            </Link>
            <Link href="/About" className="hover:text-blue-500 transition">
               About
            </Link>
            <Link href="/Contact" className="hover:text-blue-500 transition">
               Contact
            </Link>
         </nav> */}

         {/* Page transition effect menus  */}
         <nav className="hidden md:flex space-x-6 text-gray-800 font-medium text-sm">
            <a href="/" onClick={(e) => handleNavClick(e, "/")}>
               Home
            </a>
            <a href="/Products" onClick={(e) => handleNavClick(e, "/Products")}>
               Products
            </a>
            <a href="/ItServices" onClick={(e) => handleNavClick(e, "/ItServices")}>
               IT Services
            </a>
            <a href="/Devservices" onClick={(e) => handleNavClick(e, "/Devservices")}>
               Dev Services
            </a>
            <a href="/About" onClick={(e) => handleNavClick(e, "/About")}>
               About
            </a>

            <a href="/Contact" onClick={(e) => handleNavClick(e, "/Contact")}>
               Contact
            </a>
         </nav>

         {/* Mobile Menu */}
         <div
            ref={menuRef}
            className="md:hidden absolute top-19 left-0 w-full bg-white/10 backdrop-blur-lg shadow-lg overflow-hidden"
            style={{ height: 0 }}
         >
            <nav className="flex flex-col space-y-4 p-6 text-white font-medium text-sm">
               <Link href="/" className="hover:text-blue-500 transition">
                  Home
               </Link>
               <Link href="/Products" className="hover:text-blue-500 transition">
                  Products
               </Link>
               <Link href="/ItServices" className="hover:text-blue-500 transition">
                  IT Services
               </Link>
               <Link href="/Devservices" className="hover:text-blue-500 transition">
                  Dev Services
               </Link>
               <Link href="/About" className="hover:text-blue-500 transition">
                  About
               </Link>
               <Link href="/Contact" className="hover:text-blue-500 transition">
                  Contact
               </Link>
            </nav>
         </div>
      </header>
   );
};
