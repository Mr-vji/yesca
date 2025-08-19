// import { useEffect, useState } from "react";

// const REFERENCE_WIDTH = 1920;
// const MOBILE_THRESHOLD = 990;

// export const useMobile = () => {
//    const [scaleFactor, setScaleFactor] = useState(window.innerWidth / REFERENCE_WIDTH);
//    const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_THRESHOLD);

//    useEffect(() => {
//       const handleResize = () => {
//          setScaleFactor(window.innerWidth / REFERENCE_WIDTH);
//          if (window.innerWidth <= MOBILE_THRESHOLD) {
//             setIsMobile(true);
//          } else {
//             setIsMobile(false);
//          }
//       };
//       window.addEventListener("resize", handleResize);
//       return () => window.removeEventListener("resize", handleResize);
//    }, []);

//    return {
//       scaleFactor,
//       isMobile,
//    };
// };

import { useEffect, useState } from "react";

const REFERENCE_WIDTH = 1920;
const MOBILE_THRESHOLD = 990;

export const useMobile = () => {
   const [scaleFactor, setScaleFactor] = useState(1); // default value
   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
      // Safe: runs only in browser
      const handleResize = () => {
         setScaleFactor(window.innerWidth / REFERENCE_WIDTH);
         setIsMobile(window.innerWidth <= MOBILE_THRESHOLD);
      };

      // Run once on mount
      handleResize();

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, []);

   return {
      scaleFactor,
      isMobile,
   };
};
