import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Environment, MeshTransmissionMaterial, Text } from "@react-three/drei";

export default function Ring({ text, radius, height, segments }) {
   const ref = useRef();

   useFrame(() => {
      ref.current.rotation.y += 0.01;
      ref.current.rotation.x += 0.01;
      ref.current.rotation.z += 0.01;
   });

   const textPositions = [];
   const angleStep = (2 * Math.PI) / text.length;
   for (let i = 0; i < text.length; i++) {
      const angle = i * angleStep;
      const x = radius * Math.cos(angle);
      const z = radius * Math.sin(angle);
      textPositions.push({ x, z });
   }

   return (
      <group ref={ref}>
         <mesh>
            <cylinderGeometry args={[radius, radius, height, segments]} />
            <MeshTransmissionMaterial backsideThickness={5} thickness={2} />
         </mesh>
         {text.split("").map((char, index) => (
            <Text
               key={index}
               position={[textPositions[index].x, 0, textPositions[index].z]}
               rotation={[0, -angleStep * index + Math.PI / 2, 0]}
               fontSize={0.3}
               lineHeight={1}
               letterSpacing={0.0}
               color="white"
               textAlign="center"
            >
               {char}
            </Text>
         ))}
      </group>
   );
}
