// BgTransitionController.jsx
"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BgTransitionController({ containerRef }) {
   useEffect(() => {
      if (!containerRef?.current) return;

      const colors = ["#2d358e", "#76a8e5", "#ff6b6b", "#4caf50", "#fbc02d"]; // 5 colors
      const sections = gsap.utils.toArray("section");

      sections.forEach((section, i) => {
         ScrollTrigger.create({
            trigger: section,
            start: "top 80%", // trigger earlier so last section works
            onEnter: () =>
               gsap.to(containerRef.current, {
                  backgroundColor: colors[i],
                  duration: 1.2,
                  ease: "power2.out",
               }),
            onEnterBack: () =>
               gsap.to(containerRef.current, {
                  backgroundColor: colors[i],
                  duration: 1.2,
                  ease: "power2.out",
               }),
         });
      });

      return () => {
         ScrollTrigger.getAll().forEach((t) => t.kill());
      };
   }, [containerRef]);

   return null;
}
