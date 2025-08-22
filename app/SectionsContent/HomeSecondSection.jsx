import React from "react";
import Image from "next/image";
import { Roboto_Condensed, Poppins } from "next/font/google";
import farmDosthLogo from "@/public/images/FD.png";

// Roboto Condensed Black Italic
const robotoCondensed = Roboto_Condensed({
   subsets: ["latin"],
   weight: "900",
   style: "italic",
   variable: "--font-roboto-condensed",
});

// Poppins Regular
const poppins = Poppins({
   subsets: ["latin"],
   weight: "400",
   variable: "--font-poppins",
});

export default function HomeSecondSection() {
   return (
      <section
         className={`${robotoCondensed.variable} ${poppins.variable} w-full min-h-screen flex flex-col items-center justify-center px-6 md:px-16 text-black`}
      >
         {/* Top Title */}
         <h2 className="text-3xl md:text-5xl lg:text-6xl font-b italic tracking-wide mb-14 uppercase text-center font-roboto-condensed text-gray-700">
            OUR PRODUCTS
         </h2>

         {/* Content Block */}
         <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-12 md:gap-16">
            {/* Left: Logo */}
            <div className="w-full md:w-1/2 flex justify-center">
               <Image
                  src={farmDosthLogo}
                  alt="Farm Dosth Logo"
                  className="w-2/3 md:w-3/4 lg:w-2/3 h-auto"
                  priority
               />
            </div>

            {/* Right: Text */}
            <div className="w-full md:w-1/2 flex flex-col space-y-6 md:space-y-8 text-sm md:text-base leading-relaxed text-left md:text-start">
               <p className="font-roboto">
                  <span className="text-base md:text-lg">🌾 COMING SOON</span>
               </p>

               <p className="font-poppins">One platform. Every step. Every harvest.</p>

               <p className="font-poppins">
                  From the first seed to the final sale — something game-changing is sprouting for
                  farmers.
                  <br />
                  Tools, support, and smart solutions — all in one place.
               </p>

               <p className="font-poppins">🌱 Stay tuned. The future of farming is almost here.</p>

               {/* Buttons */}
               <div className="w-full max-w-lg p-0 md:pl-4 md:pr-0 md:py-2 bg-gray-100 rounded-xl flex items-center mr-2">
                  <input
                     type="text"
                     placeholder="subscribe to get notified."
                     className="text-gray-900 text-xs md:text-sm font-poppins px-3 py-2 bg-gray-100 focus:outline-none flex-grow"
                  />
                  <button className="bg-[#3fba4f] mr-2 hover:bg-[#2e52c2] text-white font-roboto text-xs md:text-sm px-5 md:px-6 py-2 rounded-md transition">
                     KNOW MORE
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
}
