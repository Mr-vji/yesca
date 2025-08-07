import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function BackgroundChangerGSAP() {
   const scroll = useScroll();
   const timelineRef = useRef(null);

   // Section 1 Gradient
   const gradientOne = {
      startColor: { r: 45, g: 53, b: 142 },
      endColor: { r: 117, g: 167, b: 218 },
      angle: 180,
   };

   // Section 2 Gradient
   const gradientTwo = {
      startColor: { r: 117, g: 167, b: 218 },
      endColor: { r: 255, g: 255, b: 255 },
      angle: 180,
   };

   // Section 3 Gradient
   const gradientThree = {
      startColor: { r: 255, g: 255, b: 255 }, // Changed to white
      endColor: { r: 255, g: 255, b: 255 }, // Changed to white
      angle: 180,
   };

   // Section 4 Gradient
   const gradientFour = {
      startColor: { r: 255, g: 255, b: 255 },
      endColor: { r: 255, g: 255, b: 255 },
      angle: 0,
   };

   // useEffect Hook: Initializes the background and GSAP timeline on component mount
   useEffect(() => {
      // Set initial background gradient for the first section
      document.body.style.background = `linear-gradient(${gradientOne.angle}deg, rgba(${gradientOne.startColor.r}, ${gradientOne.startColor.g}, ${gradientOne.startColor.b}, 1) 0%, rgba(${gradientOne.endColor.r}, ${gradientOne.endColor.g}, ${gradientOne.endColor.b}, 1) 83%)`;

      // Set initial CSS variables on the root HTML element for GSAP to animate
      document.documentElement.style.setProperty("--start-color-r", gradientOne.startColor.r);
      document.documentElement.style.setProperty("--start-color-g", gradientOne.startColor.g);
      document.documentElement.style.setProperty("--start-color-b", gradientOne.startColor.b);
      document.documentElement.style.setProperty("--end-color-r", gradientOne.endColor.r);
      document.documentElement.style.setProperty("--end-color-g", gradientOne.endColor.g);
      document.documentElement.style.setProperty("--end-color-b", gradientOne.endColor.b);
      document.documentElement.style.setProperty("--gradient-angle", gradientOne.angle);

      // Create a GSAP timeline to animate CSS variables based on scroll progress
      const tl = gsap.timeline({
         paused: true,
         onUpdate: () => {
            // Update the body's background gradient dynamically as CSS variables change
            const startR = document.documentElement.style.getPropertyValue("--start-color-r");
            const startG = document.documentElement.style.getPropertyValue("--start-color-g");
            const startB = document.documentElement.style.getPropertyValue("--start-color-b");
            const endR = document.documentElement.style.getPropertyValue("--end-color-r");
            const endG = document.documentElement.style.getPropertyValue("--end-color-g");
            const endB = document.documentElement.style.getPropertyValue("--end-color-b");
            const angle = document.documentElement.style.getPropertyValue("--gradient-angle");

            document.body.style.background = `linear-gradient(${angle}deg, rgba(${startR}, ${startG}, ${startB}, 1) 0%, rgba(${endR}, ${endG}, ${endB}, 1) 83%)`;
         },
      });

      // Animate from Section 1 to Section 2 colors (completes at 25% scroll)
      tl.to(
         document.documentElement,
         {
            "--start-color-r": gradientTwo.startColor.r,
            "--start-color-g": gradientTwo.startColor.g,
            "--start-color-b": gradientTwo.startColor.b,
            "--end-color-r": gradientTwo.endColor.r,
            "--end-color-g": gradientTwo.endColor.g,
            "--end-color-b": gradientTwo.endColor.b,
            "--gradient-angle": gradientTwo.angle,
            ease: "none",
         },
         0.25
      );

      // Animate from Section 2 to Section 3 colors (completes at 50% scroll)
      tl.to(
         document.documentElement,
         {
            "--start-color-r": gradientThree.startColor.r,
            "--start-color-g": gradientThree.startColor.g,
            "--start-color-b": gradientThree.startColor.b,
            "--end-color-r": gradientThree.endColor.r,
            "--end-color-g": gradientThree.endColor.g,
            "--end-color-b": gradientThree.endColor.b,
            "--gradient-angle": gradientThree.angle,
            ease: "none",
         },
         0.5
      );

      // Animate from Section 3 to Section 4 colors (completes at 75% scroll)
      tl.to(
         document.documentElement,
         {
            "--start-color-r": gradientFour.startColor.r,
            "--start-color-g": gradientFour.startColor.g,
            "--start-color-b": gradientFour.startColor.b,
            "--end-color-r": gradientFour.endColor.r,
            "--end-color-g": gradientFour.endColor.g,
            "--end-color-b": gradientFour.endColor.b,
            "--gradient-angle": gradientFour.angle,
            ease: "none",
         },
         0.75
      );

      // Store the timeline in a ref for access in useFrame
      timelineRef.current = tl;

      // Cleanup function: Kills the timeline when the component unmounts
      return () => {
         if (timelineRef.current) {
            timelineRef.current.kill();
            timelineRef.current = null;
         }
      };
   }, []);

   // useFrame Hook: Updates the GSAP timeline progress based on scroll offset
   useFrame(() => {
      const offset = scroll.offset;
      const tl = timelineRef.current;

      // Ensure the timeline is initialized before updating its progress
      if (!tl) return;

      // Set the timeline's progress directly from the scroll offset
      // This will drive the CSS variable animations
      tl.progress(offset);
   });

   return null;
}
