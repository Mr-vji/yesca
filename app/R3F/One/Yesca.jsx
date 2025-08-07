import { useRef } from "react";
import { useMobile } from "../useMobile";
import { ContactShadows, Environment, useScroll } from "@react-three/drei";
import { Dot } from "./Dot";
import { YLogo } from "./YLogo";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { VFXParticles } from "./VFXPArticles";
import { useFrame } from "@react-three/fiber";

export default function Yesca() {
   const initialCameraPos = useRef();
   const { isMobile } = useMobile();
   const vfxGroupRef = useRef();

   // const scroll = useScroll(); // Get scroll data

   // useFrame(() => {
   //    if (vfxGroupRef.current) {
   //       // Get current scroll offset
   //       const scrollOffset = scroll.offset;
   //       const targetY = scrollOffset * -5.3; // Adjust the multiplier to control speed
   //       vfxGroupRef.current.position.y += (targetY - vfxGroupRef.current.position.y) * 1;
   //    }
   // });

   return (
      <>
         <>
            <group>
               <Environment preset="city" />
               {/* <OrbitControls enableZoom={false} /> */}

               <directionalLight
                  position={[0, 8, -1]}
                  castShadow
                  intensity={3}
                  shadow-mapSize-width={128}
                  shadow-mapSize-height={128}
               />
               <directionalLight position={[0, 8, -1]} />
               <directionalLight position={[0, 1, 1]} color={"blue"} intensity={2} />

               <group position={[isMobile ? 2.2 : 0, 0, 0]}>
                  <Dot
                     scale={isMobile ? 0.65 : 0.85}
                     position={[isMobile ? -0.82 : -0.45, isMobile ? -1.15 : -1.2, 0]}
                  />

                  <YLogo position={[-2, -0.99, 0]} scale={isMobile ? 0.035 : 0.045} />

                  <mesh
                     position={[isMobile ? -1.9 : -1.88, isMobile ? 0.045 : 0.34, 0]}
                     rotation={[-Math.PI / 2, 0, 0]} // Rotated to lie flat on the XZ plane
                  >
                     <planeGeometry args={[isMobile ? 0.35 : 0.45, isMobile ? 0.15 : 0.2]} />
                     <meshPhongMaterial color={"white"} emissive={"blue"} emissiveIntensity={20} />
                  </mesh>
                  {/* Second glowing plane mesh */}
                  <mesh
                     position={[isMobile ? -2.61 : -2.78, isMobile ? 0.045 : 0.34, 0]}
                     rotation={[-Math.PI / 2, 0, 0]} // Rotated to lie flat on the XZ plane
                  >
                     <planeGeometry args={[isMobile ? 0.35 : 0.45, isMobile ? 0.15 : 0.2]} />
                     <meshPhongMaterial color={"white"} emissive={"blue"} emissiveIntensity={20} />
                  </mesh>

                  {/* Invisible plane acting as a floor, receiving shadows */}
                  <mesh
                     visible={false}
                     receiveShadow
                     rotation={[-Math.PI / 2, 0, 0]}
                     position={[0, -1, 0]}
                  >
                     <planeGeometry args={[100, 100]} />
                     <meshStandardMaterial color="#75a7da" roghness={0} metalness={0.9} />
                  </mesh>
                  {/* Contact shadows for realistic object grounding */}
                  <ContactShadows
                     position={[0, -1, 0]}
                     scale={10}
                     blur={0.5}
                     far={1}
                     opacity={0.28}
                  />
               </group>

               {/* Post-processing effects for visual enhancements */}
               <EffectComposer>
                  {/* Bloom effect for glowing elements */}
                  <Bloom mipmapBlur intensity={1.2} luminanceThreshold={1} />
               </EffectComposer>

               {/* Group for VFX Particles, whose Y position is now controlled manually by scroll */}
               {/* The ref allows the useFrame hook to access and modify this group's properties */}
               {/* Initial position of this group is set to [0, initialVFXGroupY, 0] */}
               <group ref={vfxGroupRef} position={[0, 0, 0]}>
                  {/* Individual VFXParticle components, positioned relative to their parent group */}
                  <VFXParticles position={[isMobile ? 0.15 : -1.38, isMobile ? 0.03 : 0.15, 0]} />
                  <VFXParticles position={[isMobile ? -0.2 : -0.95, isMobile ? 0.03 : 0.15, 0]} />
               </group>
            </group>
         </>
      </>
   );
}
