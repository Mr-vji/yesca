import React from "react";

function HomeFo() {
   return (
      <section className="w-full min-h-screen flex flex-col items-center justify-center bg-white px-4 md:px-16 py-16">
         {/* Main Title */}
         <div className="w-full max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold italic text-gray-700 font-roboto-condensed">
               MORE COMING SOON...
            </h2>
            <p className="mt-6 text-lg sm:text-xl md:text-2xl text-black mx-auto leading-snug font-poppins">
               After release of the above products we have a planned roadmap of products for
               different industries.
            </p>
         </div>

         {/* Images with titles */}
         <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-12 mt-16">
            {/* Image 1 */}
            <div className="flex flex-col items-center text-center w-full sm:w-1/3">
               <img
                  src="/images/one.jpeg"
                  alt="Product 1"
                  className="w-48 h-48 sm:w-40 sm:h-40 md:w-44 md:h-44 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
               />
               <p className="mt-4 text-base sm:text-lg md:text-xl font-medium">Product 1</p>
            </div>

            {/* Image 2 */}
            <div className="flex flex-col items-center text-center w-full sm:w-1/3">
               <img
                  src="/images/two.jpeg"
                  alt="Product 2"
                  className="w-48 h-48 sm:w-40 sm:h-40 md:w-44 md:h-44 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
               />
               <p className="mt-4 text-base sm:text-lg md:text-xl font-medium">Product 2</p>
            </div>

            {/* Image 3 */}
            <div className="flex flex-col items-center text-center w-full sm:w-1/3">
               <img
                  src="/images/three.jpeg"
                  alt="Product 3"
                  className="w-48 h-48 sm:w-40 sm:h-40 md:w-44 md:h-44 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
               />
               <p className="mt-4 text-base sm:text-lg md:text-xl font-medium">Product 3</p>
            </div>
         </div>
      </section>
   );
}

export default HomeFo;
