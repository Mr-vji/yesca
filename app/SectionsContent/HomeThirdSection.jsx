import React from "react";
import Image from "next/image";
import vaidyaLogo from "@/public/images/vaidya-logo.png"; // Replace with your uploaded image path

export default function HomeThirdSection() {
   return (
      <section className="w-full h-screen flex flex-col items-center justify-center px-4 md:px-12 text-black">
         {/* Top Title */}

         {/* Content Block */}
         <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-14">
            {/* Left: Text */}
            <div className="w-full md:w-1/2 flex flex-col space-y-6 font-mono text-base md:text-lg leading-relaxed text-right ">
               <p>
                  🩺 <span className="font-bold">COMING SOON</span>
               </p>

               <p>What if healthcare could move… just a little faster?</p>

               <p>
                  Something is on its way — built to support the heartbeat behind every hospital.
                  <br />
                  Connections. Continuity. Care — reimagined.
               </p>

               <p>🔒 Not saying more just yet — but it’s exactly what’s been missing.</p>

               {/* Buttons */}
               <div className="w-full max-w-md mx-auto p-1 bg-[#29147a] rounded-xl flex items-center">
                  <input
                     type="text"
                     placeholder="subscribe to get notified."
                     className="text-white text-sm font-mono px-4 py-2 bg-transparent focus:outline-none flex-grow"
                  />
                  <button className="bg-[#fd8c0f] hover:bg-[#e57900] text-white font-mono text-sm px-6 py-2 rounded-md transition">
                     KNOW MORE
                  </button>
               </div>
            </div>

            {/* Right: Logo */}
            <div className="w-full md:w-1/2 flex justify-center">
               <Image
                  src={vaidyaLogo}
                  alt="Farm Dosth Logo"
                  className="w-auto h-auto max-w-[460px]"
               />
            </div>
         </div>
      </section>
   );
}
