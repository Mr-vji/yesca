import React from "react";

export const HomeFourth = () => {
   return (
      <section
         id="section4"
         className="w-full min-h-screen bg-white text-center flex flex-col items-center justify-start py-24 px-4 md:px-16"
      >
         {/* Heading */}
         <div className="w-full max-w-4xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold italic text-gray-700 font-roboto-condensed">
               MORE COMING SOON...
            </h2>
            <p className="mt-6 text-sm sm:text-base md:text-lg text-black w-full mx-auto leading-snug font-poppins">
               After release of the above products we have a planned roadmap of products for
               different industries.
            </p>
         </div>

         {/* Product Cards */}
         <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-y-12 sm:gap-y-16 md:gap-y-16 gap-x-8 sm:gap-x-16 md:gap-x-24 mt-20 w-full">
            {/* Community */}
            <div className="flex flex-col items-center w-full sm:w-64 md:w-72">
               <div className="w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 rounded-md overflow-hidden flex items-center justify-center">
                  <img
                     src="/images/one.jpeg"
                     alt="Community Product"
                     className="max-w-full max-h-full object-contain blur-sm"
                  />
               </div>
               <span className="mt-4 sm:mt-5 text-sm sm:text-base md:text-base text-gray-600 font-poppins text-center font-bold">
                  Community Product
               </span>
            </div>

            {/* Construction */}
            <div className="flex flex-col items-center w-full sm:w-64 md:w-72">
               <div className="w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 rounded-md overflow-hidden flex items-center justify-center">
                  <img
                     src="/images/two.jpeg"
                     alt="Construction Industry Product"
                     className="max-w-full max-h-full object-contain blur-sm"
                  />
               </div>
               <span className="mt-4 sm:mt-5 text-sm sm:text-base md:text-base text-gray-600 font-poppins text-center font-bold">
                  Construction Industry Product
               </span>
            </div>

            {/* More */}
            <div className="flex flex-col items-center w-full sm:w-64 md:w-72">
               <div className="w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 rounded-md overflow-hidden flex items-center justify-center">
                  <img
                     src="/images/three.jpeg"
                     alt="More..."
                     className="max-w-full max-h-full object-contain blur-sm"
                  />
               </div>
               <span className="mt-4 sm:mt-5 text-sm sm:text-base md:text-base text-gray-600 font-poppins text-center font-bold">
                  More ...
               </span>
            </div>
         </div>
      </section>
   );
};

export default HomeFourth;
