export const Weare = () => {
   return (
      <section className="w-full h-screen flex justify-center items-center bg-transparent">
         {/* Wrapper for content to control max width and center */}
         <div className="flex flex-col md:flex-row items-center justify-center max-w-screen-xl px-4 md:px-12 w-full gap-10">
            {/* Left side: "We are" block */}
            <div className="w-full md:w-1/2 flex flex-col items-end justify-center space-y-0 font-mono text-blue-900">
               <h2 className="text-3xl md:text-4xl font-light">We are</h2>
               <h1 className="text-6xl md:text-8xl font-bold italic">BUILDERS</h1>
            </div>

            {/* Right side: paragraph */}
            <p className="w-full md:w-1/2 max-w-lg font-mono text-lg md:text-xl leading-relaxed text-gray-800 mt-8 md:mt-0 md:ml-10 text-left">
               We make tech accessible, accessible to the un-reached. We make tech accessible,
               accessible to the un-reached. We make tech accessible, accessible to the un-reached.
               We make tech accessible, accessible to the un-reached. We make tech accessible,
               accessible to the un-reached. We make tech accessible, accessible to the un-reached.
            </p>
         </div>
      </section>
   );
};
