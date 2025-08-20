// components/Footer.jsx
import Link from "next/link";
import React from "react";

export default function Footer() {
   return (
      <footer className="bg-[#1e2a78] text-white p-14 font-poppins">
         <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
            {/* Left - Logo + Social + Phone */}
            <div className="flex flex-col gap-8">
               {/* Logo */}
               <img
                  src="/images/FULL-LOGO-WHITE.svg"
                  alt="YESCA Logo"
                  className="w-80 md:w-96 h-auto"
               />

               {/* Social & Phone */}

               <div className="text-xl md:text-3xl leading-tight">
                  {" "}
                  {/* ⬅️ bigger text */}
                  <p>Lin , FB, Insta,</p>
                  <p>+91 9177898146</p>
               </div>
            </div>

            {/* Middle - Address */}
            <div className="flex flex-col gap-4 text-lg md:text-2xl max-w-xl leading-tight">
               <p className="font-semibold flex items-center gap-2">
                  🌍 <span className="font-bold">YESCA TECHNOLOGIES PVT LTD</span>
               </p>
               <p>
                  425, Workafella Cyber Crown, <br />
                  Cyber Crown, Sec-II Village, HUDA Techno Enclave, Madhapur, <br />
                  Hyderabad, Telangana 500081
               </p>
            </div>

            {/* Right - Links */}
            {/* Right - Links (move to top/left on mobile) */}
            <div className="order-1 md:order-3 flex flex-col gap-1 text-lg md:text-2xl w-full md:w-auto">
               <p className="font-semibold text-3xl md:text-3xl text-left">Links</p>
               <ul className="list-disc text-2xl pt-2 list-inside space-y-2 leading-tight text-left">
                  <li>
                     <Link href="/" className="hover:text-blue-500 transition">
                        Home
                     </Link>
                  </li>
                  <li>
                     <Link href="/About" className="hover:text-blue-500 transition">
                        About us
                     </Link>
                  </li>
                  <li>
                     <Link href="/Products" className="hover:text-blue-500 transition">
                        Products
                     </Link>
                  </li>
                  <li>
                     <Link href="/ItServices" className="hover:text-blue-500 transition">
                        IT Services
                     </Link>
                  </li>
                  <li>
                     <Link href="/Devservices" className="hover:text-blue-500 transition">
                        Dev Services
                     </Link>
                  </li>
                  <li>
                     <Link href="/Contact" className="hover:text-blue-500 transition">
                        Contact
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
      </footer>
   );
}
