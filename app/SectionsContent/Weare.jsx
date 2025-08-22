import React from "react";
import { Roboto_Condensed, Poppins } from "next/font/google";

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

export const Weare = () => {
   return (
      <section
         className={`${robotoCondensed.variable} ${poppins.variable} w-full h-screen flex justify-center items-center bg-transparent`}
      >
         <div className="flex flex-col md:flex-row items-center justify-center max-w-screen-xl px-4 md:px-12 w-full gap-10">
            {/* Left side: "We are" block */}
            <div className="w-full md:w-1/2 flex flex-col items-end justify-center space-y-2 text-right">
               <h2 className="font-robotoCondensed text-4xl md:text-5xl text-blue-900">We are</h2>
               <h1 className="font-robotoCondensed font-bold text-7xl md:text-9xl italic text-blue-900">
                  BUILDERS
               </h1>
            </div>

            {/* Right side: paragraph */}
            <p className="w-full md:w-1/2 max-w-lg font-poppins text-lg md:text-2xl leading-relaxed text-gray-800 mt-8 md:mt-0 md:ml-10 text-left">
               At Yesca Technologies, we ground our work in strategic thinking, carefully mapping
               each phase to ensure seamless execution with a creative edge. From building standout
               brands to designing cutting-edge websites, we deliver powerful digital experiences.
            </p>
         </div>
      </section>
   );
};
