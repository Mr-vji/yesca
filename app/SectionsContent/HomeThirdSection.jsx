import React from "react";
import Image from "next/image";
import vaidyaLogo from "@/public/images/vaidya-svg.svg";
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

export default function HomeThirdSection() {
   return (
      <section
         className={`${robotoCondensed.variable} ${poppins.variable} w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-12 text-black`}
      >
         {/* Content Block */}
         <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-10 md:gap-14">
            {/* Left: Text */}
            <div className="w-full md:w-1/2 flex flex-col space-y-4 md:space-y-6 text-sm md:text-base leading-relaxed text-left md:text-end">
               <p className="font-roboto">
                  🩺 <span className="text-base md:text-lg">COMING SOON</span>
               </p>

               <p className="font-poppins">What if healthcare could move… just a little faster?</p>

               <p className="font-poppins">
                  Something is on its way — built to support the heartbeat behind every hospital.
                  <br />
                  Connections. Continuity. Care — reimagined.
               </p>

               <p className="font-poppins">
                  🔒 Not saying more just yet — but it’s exactly what’s been missing.
               </p>

               {/* Buttons */}
               <div className="w-full max-w-lg mx-auto pl-4 pr-0 py-2 bg-gray-100 rounded-xl flex items-center mr-2">
                  <input
                     type="text"
                     placeholder="subscribe to get notified."
                     className="text-gray-900 text-xs md:text-sm font-poppins px-3 py-2 bg-gray-100 focus:outline-none flex-grow"
                  />
                  <button className="bg-[#2c2a78] mr-2 hover:bg-[#e57900] text-white font-roboto text-xs md:text-sm px-5 md:px-6 py-2 rounded-md transition">
                     KNOW MORE
                  </button>
               </div>
            </div>

            {/* Right: Logo */}
            <div className="w-full md:w-1/2 flex justify-center">
               <Image
                  src={vaidyaLogo}
                  alt="Farm Dosth Logo"
                  className="w-2/3 md:w-3/4 lg:w-2/3 h-auto"
               />
            </div>
         </div>
      </section>
   );
}
