"use client";
import { UI } from "@/app/Components/UI";
import { BackgroundChangerGSAP } from "@/app/R3F/BackgroundChangerGSAP";
import { Lights } from "@/app/R3F/Lights";
import { MouseMove } from "@/app/R3F/MouseMove";
import Yesca from "@/app/R3F/One/Yesca";
import { useMobile } from "@/app/R3F/useMobile";
import { Environment, OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export default function HomePage() {
   const { isMobile } = useMobile();
   return (
      <>
         {/* Fixed full-screen Canvas */}
         <div className="relative top-0 left-0 w-full h-full bg-transparent z-20 ">
            <Canvas shadows camera={{ position: [3, 1.5, 19], fov: 10 }}>
               <Suspense fallback={null}>
                  {isMobile ? "null" : <MouseMove />}
                  <Yesca />
               </Suspense>
            </Canvas>
         </div>
      </>
   );
}
