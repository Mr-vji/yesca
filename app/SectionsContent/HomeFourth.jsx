export const HomeFourth = () => {
   return (
      <section
         id="section4"
         className="relative w-screen min-h-screen bg-white text-center flex flex-col items-center justify-center py-24"
      >
         {/* Heading */}
         <div className="w-full px-4 max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-extrabold italic text-gray-700 font-roboto-condensed">
               MORE COMING SOON...
            </h2>
            <p className="mt-6 text-xl md:text-2xl text-black w-full mx-auto leading-snug font-poppins">
               After release of the above products we have a planned roadmap of products for
               diffrent industries.
            </p>
         </div>

         {/* Product Cards */}
         <div className="flex flex-col md:flex-row justify-center items-start gap-x-56 gap-y-16 mt-20 w-full">
            {/* Community */}
            <div className="flex flex-col items-center w-72">
               <div className="w-64 h-64 rounded-md overflow-hidden flex items-center justify-center">
                  <img
                     src="/images/one.jpeg"
                     alt="Community Product"
                     className="max-w-full max-h-full object-contain blur-sm"
                  />
               </div>
               <span className="mt-5 text-xl md:text-1xl text-gray-600 font-bold text-center font-poppins">
                  Community Product
               </span>
            </div>

            {/* Construction */}
            <div className="flex flex-col items-center w-72">
               <div className="w-64 h-64 rounded-md overflow-hidden flex items-center justify-center">
                  <img
                     src="/images/two.jpeg"
                     alt="Construction Industry Product"
                     className="max-w-full max-h-full object-contain blur-sm"
                  />
               </div>
               <span className="mt-5 text-xl md:text-1xl text-gray-600 font-bold text-center font-poppins">
                  Construction Industry Product
               </span>
            </div>

            {/* More */}
            <div className="flex flex-col items-center w-72">
               <div className="w-64 h-64 rounded-md overflow-hidden flex items-center justify-center">
                  <img
                     src="/images/three.jpeg"
                     alt="More..."
                     className="max-w-full max-h-full object-contain blur-sm"
                  />
               </div>
               <span className="mt-5 text-xl md:text-1xl text-gray-600 font-bold text-center font-poppins">
                  More ...
               </span>
            </div>
         </div>
      </section>
   );
};

export default HomeFourth;
