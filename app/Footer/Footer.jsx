// components/Footer.jsx
import React from "react";
// Removed Next.js Link import as it's not resolved in this environment
// import Link from "next/link";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

// Removed Next.js font imports as they are not resolved in this environment.
// Instead, using generic Tailwind CSS font classes.

export default function Footer() {
   return (
      <footer className="bg-[#1e2a78] text-white font-sans">
         {" "}
         {/* Using font-sans as a general fallback */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-16 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16">
            {/* Left - Logo */}
            <div className="flex flex-col gap-5 md:gap-6 w-full lg:w-auto items-start">
               <img
                  src="/images/FULL-LOGO-WHITE.svg"
                  alt="YESCA Logo"
                  className="w-56 sm:w-64 md:w-72 lg:w-80 xl:w-96 h-auto"
               />
               <div className="flex flex-col gap-2 md:gap-3 max-w-full md:max-w-lg lg:max-w-xl leading-relaxed">
                  <p className="font-bold flex items-center gap-2 text-base md:text-lg">
                     YESCA TECHNOLOGIES PVT LTD
                  </p>
                  <p className="leading-relaxed md:leading-loose text-sm md:text-base">
                     425, Workafella Cyber Crown, Cyber Crown, Sec-II Village, HUDA Techno Enclave,
                     Madhapur, Hyderabad, Telangana 500081
                  </p>
               </div>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-1 md:gap-2 text-sm sm:text-base lg:text-lg w-full md:w-auto lg:w-auto lg:items-center">
               <p className="font-normal italic text-base mr-10 md:text-lg mb-1">Links</p>{" "}
               {/* Applied normal font weight with italic */}
               <ul className="list-none list-inside font-bold leading-normal space-y-0 text-sm md:text-base">
                  {[
                     { href: "/", label: "Home" },
                     { href: "/About", label: "About us" },
                     { href: "/Products", label: "Products" },
                     { href: "/ItServices", label: "IT services" },
                     { href: "/Devservices", label: "Dev services" },
                     { href: "/Contact", label: "Contact" },
                  ].map((link) => (
                     <li key={link.href}>
                        <a
                           href={link.href}
                           className="inline-block py-1 hover:text-white active:scale-95 transition-all duration-150 cursor-pointer"
                        >
                           {link.label}
                        </a>
                     </li>
                  ))}
               </ul>
            </div>
            {/* IT Services */}
            <div className="flex flex-col gap-1 md:gap-2 text-sm sm:text-base lg:text-lg w-full md:w-auto lg:w-auto lg:items-center">
               <p className="font-normal italic text-base md:text-lg mb-1">
                  {" "}
                  {/* Applied normal font weight with italic */}
                  IT Services
               </p>
               <ul className="list-none list-inside font-bold leading-normal space-y-0 text-sm md:text-base">
                  {[
                     { href: "#", label: "Security Service's" },
                     { href: "#", label: "Networking" },
                     { href: "#", label: "Software's" },
                     { href: "#", label: "Cloud Service's" },
                     { href: "#", label: "Hardware" },
                  ].map((link) => (
                     <li key={link.label}>
                        <a
                           href={link.href}
                           className="inline-block py-1 hover:text-white active:scale-95 transition-all duration-150 cursor-pointer"
                        >
                           {link.label}
                        </a>
                     </li>
                  ))}
               </ul>
            </div>

            {/* Dev Services */}
            <div className="flex flex-col gap-1 md:gap-2 text-sm sm:text-base lg:text-lg w-full md:w-auto lg:w-auto lg:items-center">
               <p className="font-normal italic text-base md:text-lg mb-1">
                  {" "}
                  {/* Applied normal font weight with italic */}
                  Dev Services
               </p>
               <ul className="list-none list-inside font-bold leading-normal space-y-0 text-sm md:text-base">
                  {[
                     { href: "#", label: "Web DEV" },
                     { href: "#", label: "App Dev" },
                     { href: "#", label: "UI/UX" },
                     { href: "#", label: "Prototyping" },
                     { href: "#", label: "Branding" },
                     { href: "#", label: "Marketing" },
                  ].map((link) => (
                     <li key={link.label}>
                        <a
                           href={link.href}
                           className="inline-block py-1 hover:text-white active:scale-95 transition-all duration-150 cursor-pointer"
                        >
                           {link.label}
                        </a>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
         <div className="bg-black text-gray-400 p-4 text-sm flex flex-col md:flex-row justify-between items-center text-center md:text-left font-sans text-xs md:text-sm">
            <p>Yesca Technologies Pvt Ltd. Copyright @ 2025.</p>
            <p>Crafted by yesca</p>
         </div>
      </footer>
   );
}
