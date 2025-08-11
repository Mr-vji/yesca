export const HomeFourth = () => {
   return (
      <section
         id="section4"
         className="relative w-screen min-h-screen bg-transparent text-center flex flex-col items-center justify-center py-20"
      >
         <div className="px-4">
            <h2 className="text-black text-xl md:text-3xl font-semibold italic">
               More Coming soon...
            </h2>
            <p className="mt-3 text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
               After release of the above products we have a planned roadmap of products for
               different industries.
            </p>
         </div>
         <div className="flex flex-col md:flex-row justify-center items-stretch gap-14 mt-12">
            <div className="flex flex-col items-center w-52">
               <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg">
                  <img
                     src="/images/1.jpg"
                     alt="Community Product"
                     className="w-full h-full object-cover blur-sm"
                  />
               </div>
               <span className="mt-3 text-base md:text-lg text-gray-800 font-medium">
                  Community Product
               </span>
            </div>
            <div className="flex flex-col items-center w-52">
               <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg">
                  <img
                     src="/images/1.jpg"
                     alt="Construction Industry Product"
                     className="w-full h-full object-cover blur-sm"
                  />
               </div>
               <span className="mt-3 text-base md:text-lg text-gray-800 font-medium">
                  Construction Industry Product
               </span>
            </div>
            <div className="flex flex-col items-center w-52">
               <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg">
                  <img
                     src="/images/1.jpg"
                     alt="More..."
                     className="w-full h-full object-cover blur-sm"
                  />
               </div>
               <span className="mt-3 text-base md:text-lg text-gray-800 font-medium">More ...</span>
            </div>
         </div>
      </section>
   );
};
