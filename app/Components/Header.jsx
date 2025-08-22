"use client";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import RevealAnimation from "../R3F/RevealAnimation";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Roboto_Condensed, Poppins } from "next/font/google";

// Roboto Condensed Black Italic
const robotoCondensed = Roboto_Condensed({
   subsets: ["latin"],
   weight: "900", // Black
   style: "italic",
   variable: "--font-roboto-condensed",
});

// Poppins Regular
const poppins = Poppins({
   subsets: ["latin"],
   weight: "400", // Regular
   variable: "--font-poppins",
});

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

   // useEffect(() => {
   //    if (!document.startViewTransition) return; // Fallback for browsers without support

   //    // Override Next.js routing to use view transitions
   //    const originalPush = router.push;
   //    router.push = (href, options) => {
   //       document.startViewTransition(() => {
   //          originalPush(href, options);
   //       });
   //    };
   // }, [router]);

   // const handleNavClick = (e, href) => {
   //    e.preventDefault(); // stop immediate navigation
   //    gsap.to(coverRef.current, {
   //       yPercent: 0, // slide cover down
   //       duration: 0,
   //       ease: "power2.inOut",
   //       onComplete: () => {
   //          router.push(href);
   //       },
   //    });
   // };

   /* Day two */

   const handleNavClick = (e, href) => {
      e.preventDefault();
      const leftDoor = document.querySelector(".door.left");
      const rightDoor = document.querySelector(".door.right");

      // Step 1: Close doors
      leftDoor.classList.add("door-close-left");
      rightDoor.classList.add("door-close-right");

      // Step 2: Wait 1s for close animation
      setTimeout(() => {
         // Navigate after doors are closed
         router.push(href);

         // Step 3: Wait 1s while doors stay closed, then open
         setTimeout(() => {
            leftDoor.classList.remove("door-close-left");
            rightDoor.classList.remove("door-close-right");

            leftDoor.classList.add("door-open-left");
            rightDoor.classList.add("door-open-right");

            // Step 4: Remove open classes after opening finishes
            setTimeout(() => {
               leftDoor.classList.remove("door-open-left");
               rightDoor.classList.remove("door-open-right");
            }, 1000); // duration of open animation
         }, 400); // wait while closed
      }, 1000); // duration of close animation
   };

   return (
      <header className="w-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center text-white backdrop-blur-md fixed top-0 left-0 z-50">
         {/* Logo / Left */}
         <div className="flex items-center">
            <RevealAnimation />
         </div>

         {/* Hamburger Menu Button */}
         <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-[#fff] relative w-5 h-5 sm:w-6 sm:h-6"
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
         <nav className="hidden lg:flex space-x-6 xl:space-x-8 mr-8 lg:mr-12 xl:mr-16 text-[#fff] font-medium text-sm lg:text-base font-poppins">
            <a
               href="/"
               onClick={(e) => handleNavClick(e, "/")}
               className="cursor-pointer hover:text-blue-300 active:scale-90 transition-all duration-150"
            >
               Home
            </a>
            <a
               href="/Products"
               onClick={(e) => handleNavClick(e, "/Products")}
               className="cursor-pointer hover:text-blue-300 active:scale-90 transition-all duration-150"
            >
               Products
            </a>
            <a
               href="/Services/ItServices"
               onClick={(e) => handleNavClick(e, "/Services/ItServices")}
               className="cursor-pointer hover:text-blue-300 active:scale-90 transition-all duration-150"
            >
               IT Services
            </a>
            <a
               href="/Devservices"
               onClick={(e) => handleNavClick(e, "/Devservices")}
               className="cursor-pointer hover:text-blue-300 active:scale-90 transition-all duration-150"
            >
               Dev Services
            </a>
            <a
               href="/About"
               onClick={(e) => handleNavClick(e, "/About")}
               className="cursor-pointer hover:text-blue-300 active:scale-90 transition-all duration-150"
            >
               About
            </a>
            <a
               href="/Contact"
               onClick={(e) => handleNavClick(e, "/Contact")}
               className="cursor-pointer hover:text-blue-300 active:scale-90 transition-all duration-150"
            >
               Contact
            </a>
         </nav>

         {/* Mobile Menu */}
         <div
            ref={menuRef}
            className="lg:hidden absolute top-16 sm:top-19 left-0 w-full bg-white/10 backdrop-blur-lg shadow-lg overflow-hidden"
            style={{ height: 0 }}
         >
            <nav className="flex flex-col space-y-3 sm:space-y-4 p-4 sm:p-6 text-white font-medium text-sm sm:text-base lg:hidden">
               <Link
                  href="/"
                  className="block px-3 py-2 sm:px-4 sm:py-3 rounded cursor-pointer active:scale-95 transition-all duration-150 bg-transparent hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
               >
                  Home
               </Link>
               <Link
                  href="/Products"
                  className="block px-3 py-2 sm:px-4 sm:py-3 rounded cursor-pointer active:scale-95 transition-all duration-150 bg-transparent hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
               >
                  Products
               </Link>
               <Link
                  href="/Services/ItServices"
                  className="block px-3 py-2 sm:px-4 sm:py-3 rounded cursor-pointer active:scale-95 transition-all duration-150 bg-transparent hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
               >
                  IT Services
               </Link>
               <Link
                  href="/Devservices"
                  className="block px-3 py-2 sm:px-4 sm:py-3 rounded cursor-pointer active:scale-95 transition-all duration-150 bg-transparent hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
               >
                  Dev Services
               </Link>
               <Link
                  href="/About"
                  className="block px-3 py-2 sm:px-4 sm:py-3 rounded cursor-pointer active:scale-95 transition-all duration-150 bg-transparent hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
               >
                  About
               </Link>
               <Link
                  href="/Contact"
                  className="block px-3 py-2 sm:px-4 sm:py-3 rounded cursor-pointer active:scale-95 transition-all duration-150 bg-transparent hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
               >
                  Contact
               </Link>
            </nav>
         </div>
      </header>
   );
};
