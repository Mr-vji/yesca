import React from "react";

export const HomeFourth = () => {
   return (
      <section
         id="section4"
         className="w-full min-h-screen bg-white text-center flex flex-col items-center justify-start py-24 px-4 md:px-16"
      >
         {/* Heading */}
         <div className="w-full max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-extrabold italic text-gray-700 font-roboto-condensed">
               MORE COMING SOON...
            </h2>
            <p className="mt-6 text-xl md:text-2xl text-black w-full mx-auto leading-snug font-poppins">
               After release of the above products we have a planned roadmap of products for
               different industries.
            </p>
         </div>

         {/* Product Cards */}
         <div className="flex flex-col md:flex-row justify-center items-start gap-x-16 md:gap-x-56 gap-y-16 mt-20 w-full">
            {/* Community */}
            <div className="flex flex-col items-center w-full md:w-72">
               <div className="w-64 h-64 rounded-md overflow-hidden flex items-center justify-center">
                  <img
                     src="/images/one.jpeg"
                     alt="Community Product"
                     className="max-w-full max-h-full object-contain blur-sm"
                  />
               </div>
               <span className="mt-5 text-2xl md:text-3xl text-gray-600  text-center font-poppins whitespace-nowrap">
                  Community Product
               </span>
            </div>

            {/* Construction */}
            <div className="flex flex-col items-center w-full md:w-72">
               <div className="w-64 h-64 rounded-md overflow-hidden flex items-center justify-center">
                  <img
                     src="/images/two.jpeg"
                     alt="Construction Industry Product"
                     className="max-w-full max-h-full object-contain blur-sm"
                  />
               </div>
               <span className="mt-5 text-2xl md:text-3xl text-gray-600 text-center font-poppins whitespace-nowrap">
                  Construction Industry <br />
                  Product
               </span>
            </div>

            {/* More */}
            <div className="flex flex-col items-center w-full md:w-72">
               <div className="w-64 h-64 rounded-md overflow-hidden flex items-center justify-center">
                  <img
                     src="/images/three.jpeg"
                     alt="More..."
                     className="max-w-full max-h-full object-contain blur-sm"
                  />
               </div>
               <span className="mt-5 text-2xl md:text-3xl text-gray-600 text-center font-poppins">
                  More ...
               </span>
            </div>
         </div>
      </section>
   );
};

export default HomeFourth;
