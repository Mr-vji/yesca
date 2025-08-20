// components/Footer.jsx
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
            <div className="flex flex-col gap-1 text-lg md:text-2xl">
               <p className="font-semibold text-2xl md:text-3xl">Links</p>
               <ul className="list-disc list-inside space-y-2 leading-tight">
                  <li className="hover:text-gray-300 cursor-pointer">Home</li>
                  <li className="hover:text-gray-300 cursor-pointer">About us</li>
                  <li className="hover:text-gray-300 cursor-pointer">Products</li>
                  <li className="hover:text-gray-300 cursor-pointer">IT services</li>
                  <li className="hover:text-gray-300 cursor-pointer">Dev services</li>
                  <li className="hover:text-gray-300 cursor-pointer">Contact</li>
               </ul>
            </div>
         </div>
      </footer>
   );
}
