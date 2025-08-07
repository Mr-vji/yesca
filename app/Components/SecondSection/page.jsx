"use client";
import { UI } from "@/app/Components/UI";
import { BackgroundChangerGSAP } from "@/app/R3F/BackgroundChangerGSAP";
import { Lights } from "@/app/R3F/Lights";
import Yesca from "@/app/R3F/One/Yesca";
import { Environment, OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { SecondSectionAnimation } from "./SecondSectionAnimation";

export default function SecondSection() {
   return (
      <>
         {/* Fixed full-screen Canvas */}
         <div className="relative top-0 left-0 w-full h-full bg-transparent ">
            <Canvas shadows camera={{ position: [3, 3, 19], fov: 10 }}>
               <SecondSectionAnimation />
            </Canvas>
         </div>
      </>
   );
}
