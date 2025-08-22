// components/Footer.jsx
import Link from "next/link";
import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
   return (
      <footer className="bg-[#1e2a78] text-white p-16 font-poppins">
         <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-14">
            {/* Left - Logo + Social + Phone */}
            <div className="flex flex-col gap-6">
               {/* Logo */}
               <img
                  src="/images/FULL-LOGO-WHITE.svg"
                  alt="YESCA Logo"
                  className="w-80 md:w-96 h-auto"
               />

               {/* Social & Phone */}
               <div className="flex flex-col gap-4 text-lg md:text-xl leading-snug">
                  {/* Social Icons */}
                  <div className="flex gap-6 text-3xl md:text-4xl">
                     <a
                        href="https://www.linkedin.com/company/yourcompany"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer active:scale-90 transition-transform duration-150"
                     >
                        <FaLinkedin />
                     </a>
                     <a
                        href="https://www.facebook.com/yourpage"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer active:scale-90 transition-transform duration-150"
                     >
                        <FaFacebook />
                     </a>
                     <a
                        href="https://www.instagram.com/yourpage"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer active:scale-90 transition-transform duration-150"
                     >
                        <FaInstagram />
                     </a>
                  </div>

                  {/* Phone */}
                  <p className="text-lg md:text-xl font-medium">📞 +91 9177898146</p>
               </div>
            </div>

            {/* Middle - Address */}
            <div className="flex flex-col gap-3 text-base md:text-lg max-w-xl leading-relaxed">
               <p className="font-semibold flex items-center gap-2">
                  🌍 <span className="font-bold">YESCA TECHNOLOGIES PVT LTD</span>
               </p>
               <p className="text-base md:text-lg">
                  425, Workafella Cyber Crown, <br />
                  Cyber Crown, Sec-II Village, HUDA Techno Enclave, Madhapur, <br />
                  Hyderabad, Telangana 500081
               </p>
            </div>

            {/* Right - Links */}
            <div className="order-1 md:order-3 flex flex-col gap-2 text-base md:text-lg w-full md:w-auto">
               <p className="font-bold text-2xl md:text-3xl text-left mb-2">Links</p>
               <ul className="list-disc list-inside leading-relaxed font-semibold text-base md:text-lg">
                  <li>
                     <Link
                        href="/"
                        className="inline-block px-2 py-1 rounded hover:bg-white/20 hover:text-white active:bg-white/30 active:scale-90 transition-all duration-150 cursor-pointer"
                     >
                        Home
                     </Link>
                  </li>
                  <li>
                     <Link
                        href="/About"
                        className="inline-block px-2 py-1 rounded hover:bg-white/20 hover:text-white active:bg-white/30 active:scale-90 transition-all duration-150 cursor-pointer"
                     >
                        About us
                     </Link>
                  </li>
                  <li>
                     <Link
                        href="/Products"
                        className="inline-block px-2 py-1 rounded hover:bg-white/20 hover:text-white active:bg-white/30 active:scale-90 transition-all duration-150 cursor-pointer"
                     >
                        Products
                     </Link>
                  </li>
                  <li>
                     <Link
                        href="/ItServices"
                        className="inline-block px-2 py-1 rounded hover:bg-white/20 hover:text-white active:bg-white/30 active:scale-90 transition-all duration-150 cursor-pointer"
                     >
                        IT Services
                     </Link>
                  </li>
                  <li>
                     <Link
                        href="/Devservices"
                        className="inline-block px-2 py-1 rounded hover:bg-white/20 hover:text-white active:bg-white/30 active:scale-90 transition-all duration-150 cursor-pointer"
                     >
                        Dev Services
                     </Link>
                  </li>
                  <li>
                     <Link
                        href="/Contact"
                        className="inline-block px-2 py-1 rounded hover:bg-white/20 hover:text-white active:bg-white/30 active:scale-90 transition-all duration-150 cursor-pointer"
                     >
                        Contact
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
      </footer>
   );
}
