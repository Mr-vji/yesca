export default function Contact() {
   return (
      <section
         id="contact"
         className="w-full min-h-screen bg-[#060d1b] text-white flex flex-col items-center py-20 px-6"
      >
         {/* Heading */}
         <div className="text-center mb-14">
            <button className="px-5 py-1.5 rounded-full bg-blue-900/40 border border-blue-400 text-xs md:text-sm tracking-wide mb-6">
               💛 CONTACT
            </button>
            <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
               Let&apos;s <span className="text-sky-400">talk business</span>. But
               <br /> you first.
            </h2>
         </div>

         {/* Content */}
         <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-14">
            {/* Left: Form */}
            <form className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
               <div>
                  <label className="block mb-2 text-base text-gray-300">Hello, my name is:</label>
                  <input
                     type="text"
                     placeholder="Name"
                     className="w-full px-5 py-4 bg-[#111827] rounded-lg border border-gray-700 focus:border-sky-400 focus:outline-none text-base"
                  />
               </div>

               <div>
                  <label className="block mb-2 text-base text-gray-300">Here is my email:</label>
                  <input
                     type="email"
                     placeholder="Email"
                     className="w-full px-5 py-4 bg-[#111827] rounded-lg border border-gray-700 focus:border-sky-400 focus:outline-none text-base"
                  />
               </div>

               <div>
                  <label className="block mb-2 text-base text-gray-300">
                     Tell us about your project
                  </label>
                  <select className="w-full px-5 py-4 bg-[#111827] rounded-lg border border-gray-700 focus:border-sky-400 focus:outline-none text-base">
                     <option value="">Select</option>
                     <option value="Web App">Web App</option>
                     <option value="Mobile App">Mobile App</option>
                  </select>
               </div>

               <div>
                  <label className="block mb-2 text-base text-gray-300">
                     How did you hear about YESCA?
                  </label>
                  <select className="w-full px-5 py-4 bg-[#111827] rounded-lg border border-gray-700 focus:border-sky-400 focus:outline-none text-base">
                     <option value="">Select</option>
                     <option value="Google">Google</option>
                     <option value="Friend or Colleague">Friend or Colleague</option>
                     <option value="Instagram">Instagram</option>
                     <option value="Facebook">Facebook</option>
                     <option value="Linkedin">Linkedin</option>
                     <option value="Email Newsletter">Email Newsletter</option>
                  </select>
               </div>

               <div className="md:col-span-2">
                  <label className="block mb-2 text-base text-gray-300">About project:</label>
                  <textarea
                     placeholder="Your project description"
                     rows="4"
                     className="w-full px-5 py-4 bg-[#111827] rounded-lg border border-gray-700 focus:border-sky-400 focus:outline-none text-base"
                  />
               </div>

               <div className="md:col-span-2 flex flex-col gap-5">
                  {/* ReCAPTCHA-like component */}
                  <div className="flex items-center justify-between bg-white rounded-md w-full max-w-xs h-16 p-3 shadow-md border border-gray-300 text-black">
                     <div className="flex items-center">
                        <input
                           type="checkbox"
                           className="form-checkbox h-5 w-5 text-blue-600 rounded mr-2"
                        />
                        <label className="text-sm">I'm not a robot</label>
                     </div>
                     <img
                        src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                        alt="reCAPTCHA logo"
                        className="h-10"
                     />
                  </div>
                  <button
                     type="submit"
                     className="bg-gradient-to-r from-sky-500 to-cyan-300 text-white py-3 rounded-lg font-semibold text-lg"
                  >
                     Send
                  </button>
               </div>
            </form>

            {/* Right: Contact Info */}
            <div className="flex-1 flex flex-col gap-10">
               <div>
                  <h3 className="text-xl font-semibold underline underline-offset-4 mb-4">
                     Connect with us
                  </h3>
                  <p className="text-base">📧 contact@yesca.in</p>
                  <p className="text-base">💬 +91 9000359717</p>
               </div>
               <div>
                  <h3 className="text-xl font-semibold underline underline-offset-4 mb-4">
                     Address
                  </h3>
                  <p className="text-base">
                     🌍 Divya Daimonds Building, Kavuri Hills Phase 2 Road, Madhapur, Hi-Tech City,
                     Hyderabad, Telangana 500033
                  </p>
                  <p className="text-base">🕒 Monday → Friday 9am to 5pm</p>
               </div>
            </div>
         </div>
      </section>
   );
}
