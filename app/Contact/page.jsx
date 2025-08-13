"use client"; // This directive marks the component as a Client Component

import { motion } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";

// Hexagon component to manage individual spark and fade effects
const Hexagon = ({ x, y, size }) => {
   const HEX_HEIGHT = size * 2;
   const HEX_WIDTH = (Math.sqrt(3) / 2) * HEX_HEIGHT;

   const [sparking, setSparking] = useState(false);
   const [fadeTimeoutId, setFadeTimeoutId] = useState(null);

   const handleMouseEnter = useCallback(() => {
      // Clear any existing fade-out timeout to restart the sparkle
      if (fadeTimeoutId) {
         clearTimeout(fadeTimeoutId);
         setFadeTimeoutId(null);
      }
      setSparking(true); // Trigger spark effect
   }, [fadeTimeoutId]);

   const handleMouseLeave = useCallback(() => {
      // Start fade-out process after mouse leaves
      const id = setTimeout(() => {
         setSparking(false); // End spark, allowing transition back to default
      }, 100); // Short delay before fading starts after mouse leaves
      setFadeTimeoutId(id);
   }, []);

   return (
      <motion.div
         className="hexagon-shape absolute"
         style={{
            left: x,
            top: y,
            width: HEX_WIDTH,
            height: HEX_HEIGHT,
         }}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
         // Framer Motion `animate` based on `sparking` state for dynamic styles
         animate={{
            backgroundColor: sparking ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0)", // Brighter white fill when sparkling
            borderColor: `rgba(255, 255, 255, ${sparking ? 0.9 : 0.25})`, // Stronger white border when sparkling, subtle otherwise
            boxShadow: sparking
               ? "0 0 40px rgba(117, 167, 218, 1)"
               : "0 0 0px rgba(117, 167, 218, 0)", // More intense blue glow
         }}
         transition={{
            backgroundColor: { duration: 0.15 }, // Faster flash for background color
            borderColor: { duration: 0.3 },
            boxShadow: { duration: 0.3 },
         }}
      />
   );
};

export default function Contact() {
   const sectionRef = useRef(null);
   const [sectionDimensions, setSectionDimensions] = useState({ width: 0, height: 0 });

   useEffect(() => {
      const handleResize = () => {
         if (sectionRef.current) {
            setSectionDimensions({
               width: sectionRef.current.offsetWidth,
               height: sectionRef.current.offsetHeight,
            });
         }
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);

   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.1,
         },
      },
   };

   const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
         y: 0,
         opacity: 1,
         transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
         },
      },
   };

   const buttonVariants = {
      hover: {
         scale: 1.05,
         boxShadow: "0px 0px 15px rgba(117, 167, 218, 0.9)",
         transition: {
            duration: 0.3,
         },
      },
      tap: {
         scale: 0.95,
      },
   };

   const inputVariants = {
      focus: {
         borderColor: "#75a7da",
         boxShadow: "0px 0px 10px rgba(117, 167, 218, 0.7)",
         transition: {
            duration: 0.2,
         },
      },
   };

   const HEX_SIZE = 40;
   const HEX_HEIGHT = HEX_SIZE * 2;
   const HEX_WIDTH = (Math.sqrt(3) / 2) * HEX_HEIGHT;
   const rowOffset = HEX_WIDTH / 2;
   const colOffset = HEX_HEIGHT * 0.75;

   const generateHexagons = () => {
      const hexagons = [];
      if (!sectionDimensions.width || !sectionDimensions.height) return [];

      const numRows = Math.ceil(sectionDimensions.height / colOffset) + 2;
      const numCols = Math.ceil(sectionDimensions.width / HEX_WIDTH) + 2;

      for (let row = -1; row < numRows; row++) {
         for (let col = -1; col < numCols; col++) {
            let x = col * HEX_WIDTH + (row % 2 === 1 ? rowOffset : 0);
            let y = row * colOffset;

            hexagons.push(<Hexagon key={`${row}-${col}`} x={x} y={y} size={HEX_SIZE} />);
         }
      }
      return hexagons;
   };

   return (
      <section
         id="contact"
         ref={sectionRef}
         className="w-full min-h-screen relative text-white flex flex-col items-center py-20 px-6 overflow-hidden"
         style={{
            backgroundColor: "#2d358e",
         }}
      >
         <style jsx>{`
            .hexagon-shape {
               clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
               border: 1px solid;
               box-sizing: border-box;
            }

            .glassy-effect::before {
               content: "";
               position: absolute;
               top: 0;
               left: 0;
               right: 0;
               bottom: 0;
               background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
               background-size: 100px 100px;
               opacity: 0.15;
               pointer-events: none;
               border-radius: inherit;
               z-index: 1;
            }
         `}</style>

         <div className="absolute inset-0 z-0">{generateHexagons()}</div>

         <motion.div
            className="text-center mb-14 z-20"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            viewport={{ once: true }}
         >
            <motion.button
               className="px-5 py-1.5 rounded-full bg-blue-900/40 border border-blue-400 text-xs md:text-sm tracking-wide mb-6"
               variants={buttonVariants}
               whileHover="hover"
               whileTap="tap"
            >
               🤝 CONTACT
            </motion.button>
            <motion.h2
               className="text-4xl md:text-6xl font-semibold leading-tight"
               variants={itemVariants}
            >
               Let&apos;s <span className="text-sky-400">talk business</span>. But
               <br /> you first.
            </motion.h2>
         </motion.div>

         <motion.div
            className="w-full max-w-7xl flex flex-col lg:flex-row gap-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-8 md:p-12 shadow-lg z-10 relative glassy-effect"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            viewport={{ once: true }}
         >
            <motion.form
               className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 z-20"
               variants={containerVariants}
            >
               <motion.div variants={itemVariants}>
                  <label className="block mb-2 text-base text-gray-300">Hello, my name is:</label>
                  <motion.input
                     type="text"
                     placeholder="Name"
                     className="w-full px-5 py-4 bg-[#111827] rounded-lg border border-gray-700 focus:border-sky-400 focus:outline-none text-base"
                     whileFocus="focus"
                     variants={inputVariants}
                  />
               </motion.div>

               <motion.div variants={itemVariants}>
                  <label className="block mb-2 text-base text-gray-300">Here is my email:</label>
                  <motion.input
                     type="email"
                     placeholder="Email"
                     className="w-full px-5 py-4 bg-[#111827] rounded-lg border border-gray-700 focus:border-sky-400 focus:outline-none text-base"
                     whileFocus="focus"
                     variants={inputVariants}
                  />
               </motion.div>

               <motion.div variants={itemVariants}>
                  <label className="block mb-2 text-base text-gray-300">
                     Tell us about your project
                  </label>
                  <motion.select
                     className="w-full px-5 py-4 bg-[#111827] rounded-lg border border-gray-700 focus:border-sky-400 focus:outline-none text-base"
                     whileFocus="focus"
                     variants={inputVariants}
                  >
                     <option value="">Select</option>
                     <option value="Social media marketing">Social media marketing.</option>
                     <option value="Website Development">Website Development.</option>
                     <option value="App Development">App Development.</option>
                     <option value="Brand Identity">Brand Identity.</option>
                     <option value="SEO Optimization">SEO Optimization.</option>
                     <option value="Software Solutions">Software Solutions.</option>
                     <option value="Hardware Solutions">Hardware Solutions.</option>
                     <option value="Technical Solutions">Technical Solutions.</option>
                  </motion.select>
               </motion.div>

               <motion.div variants={itemVariants}>
                  <label className="block mb-2 text-base text-gray-300">
                     How did you hear about YESCA?
                  </label>
                  <motion.select
                     className="w-full px-5 py-4 bg-[#111827] rounded-lg border border-gray-700 focus:border-sky-400 focus:outline-none text-base"
                     whileFocus="focus"
                     variants={inputVariants}
                  >
                     <option value="">Select</option>
                     <option value="Google">Google</option>
                     <option value="Friend or Colleague">Friend or Colleague</option>
                     <option value="Instagram">Instagram</option>
                     <option value="Facebook">Facebook</option>
                     <option value="Linkedin">Linkedin</option>
                     <option value="Email Newsletter">Email Newsletter</option>
                  </motion.select>
               </motion.div>

               <motion.div className="md:col-span-2" variants={itemVariants}>
                  <label className="block mb-2 text-base text-gray-300">About project:</label>
                  <motion.textarea
                     placeholder="Your project description"
                     rows="4"
                     className="w-full px-5 py-4 bg-[#111827] rounded-lg border border-gray-700 focus:border-sky-400 focus:outline-none text-base"
                     whileFocus="focus"
                     variants={inputVariants}
                  />
               </motion.div>

               <motion.div className="md:col-span-2 flex flex-col gap-5" variants={itemVariants}>
                  {/* ReCAPTCHA-like component */}
                  <div className="flex items-center justify-between bg-white rounded-md w-full max-w-xs h-16 p-3 shadow-md border border-gray-300 text-black">
                     <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-600 rounded mr-2"
                     />
                     <label className="text-sm">I'm not a robot</label>
                     <img
                        src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                        alt="reCAPTCHA logo"
                        className="h-10"
                     />
                  </div>
                  <motion.button
                     type="submit"
                     className="bg-gradient-to-r from-sky-500 to-cyan-300 text-white py-3 rounded-lg font-semibold text-lg"
                     variants={buttonVariants}
                     whileHover="hover"
                     whileTap="tap"
                  >
                     Send
                  </motion.button>
               </motion.div>
            </motion.form>

            {/* Right: Contact Info */}
            <motion.div className="flex-1 flex flex-col gap-10 z-20" variants={containerVariants}>
               <motion.div variants={itemVariants}>
                  <h3 className="text-xl font-semibold underline underline-offset-4 mb-4">
                     Connect with us
                  </h3>
                  <p className="text-base">📧 contact@yesca.in</p>
                  <p className="text-base">💬 +91 9000359717</p>
               </motion.div>
               <motion.div variants={itemVariants}>
                  <h3 className="text-xl font-semibold underline underline-offset-4 mb-4">
                     Address
                  </h3>
                  <p className="text-base">
                     25, Workafella Cyber Crown, Cyber <br /> Crown, Sec-II Village, HUDA Techno
                     Enclave,
                     <br />
                     Madhapur, Hyderabad, Telangana 500081
                  </p>
                  <p className="text-base">🕒 Monday → Friday 9am to 5pm</p>
               </motion.div>
            </motion.div>
         </motion.div>
      </section>
   );
}
