// components/Footer.jsx
import Link from "next/link";
import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
   return (
      <footer className="bg-[#1e2a78] text-white p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 font-poppins">
         <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 md:gap-10 lg:gap-16">
            {/* Left - Logo + Social + Phone */}
            <div className="flex flex-col gap-5 md:gap-6 w-full lg:w-auto items-start">
               <img
                  src="/images/FULL-LOGO-WHITE.svg"
                  alt="YESCA Logo"
                  className="w-56 sm:w-64 md:w-72 lg:w-80 xl:w-96 h-auto"
               />

               {/* Social & Phone */}
               <div className="flex flex-col gap-3 md:gap-4 text-sm sm:text-base lg:text-lg">
                  {/* Social Icons */}
                  <div className="flex gap-4 sm:gap-5 md:gap-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                     <a
                        href="https://www.linkedin.com/company/yescatechbytes/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer hover:scale-110 active:scale-90 transition-transform duration-150"
                     >
                        <FaLinkedin />
                     </a>
                     <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer hover:scale-110 active:scale-90 transition-transform duration-150"
                     >
                        <FaFacebook />
                     </a>
                     <a
                        href="https://www.instagram.com/yesca.tech.bytes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer hover:scale-110 active:scale-90 transition-transform duration-150"
                     >
                        <FaInstagram />
                     </a>
                  </div>

                  {/* Phone */}
                  <p className="font-medium text-sm sm:text-base md:text-lg">📞 +91 9177898146</p>
               </div>
            </div>

            {/* Middle - Address */}
            <div className="flex flex-col gap-2 md:gap-3 text-sm sm:text-base lg:text-lg max-w-full md:max-w-lg lg:max-w-xl leading-relaxed">
               <p className="font-semibold flex items-center gap-2 text-base md:text-lg lg:text-xl">
                  🌍 <span className="font-bold">YESCA TECHNOLOGIES PVT LTD</span>
               </p>
               <p className="leading-relaxed md:leading-loose">
                  425, Workafella Cyber Crown, <br />
                  Cyber Crown, Sec-II Village, HUDA Techno Enclave, Madhapur, <br />
                  Hyderabad, Telangana 500081
               </p>
            </div>

            {/* Right - Links */}
            {/* Right - Links */}
            <div className="flex flex-col gap-1 md:gap-2 text-sm sm:text-base lg:text-lg w-full md:w-auto lg:w-auto">
               <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-1">Links</p>
               <ul className="list-disc list-inside font-semibold leading-normal space-y-0">
                  {[
                     { href: "/", label: "Home" },
                     { href: "/About", label: "About us" },
                     { href: "/Products", label: "Products" },
                     { href: "/ItServices", label: "IT Services" },
                     { href: "/Devservices", label: "Dev Services" },
                     { href: "/Contact", label: "Contact" },
                  ].map((link) => (
                     <li key={link.href}>
                        <Link
                           href={link.href}
                           className="inline-block px-2 py-1 rounded hover:bg-white/20 hover:text-white active:bg-white/30 active:scale-95 transition-all duration-150 cursor-pointer"
                        >
                           {link.label}
                        </Link>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </footer>
   );
}
