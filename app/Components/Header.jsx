import RevealAnimation from "../R3F/RevealAnimation";

export const Header = () => {
   return (
      <header className="w-full px-6 py-4 flex justify-between items-center bg-white shadow-md fixed top-0 left-0 z-50">
         {/* Left Side */}
         {/* <div className="text-2xl font-bold text-gray-800">MyBrand</div> */}
         <RevealAnimation />

         {/* Right Side - Menu Items */}
         <nav className="space-x-6 text-gray-700 font-medium text-sm">
            <a href="Pages/Home" className="hover:text-blue-500 transition">
               Home
            </a>
            <a href="#services" className="hover:text-blue-500 transition">
               Products
            </a>
            <a href="#work" className="hover:text-blue-500 transition">
               It services
            </a>
            <a href="/About" className="hover:text-blue-500 transition">
               Dev services
            </a>
            <a href="#contact" className="hover:text-blue-500 transition">
               About
            </a>
            <a href="#contact" className="hover:text-blue-500 transition">
               Contact
            </a>
         </nav>
      </header>
   );
};
