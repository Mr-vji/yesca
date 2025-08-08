import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export const MouseMove = () => {
   let vec3 = new THREE.Vector3();
   const initialCameraPos = useRef();
   useFrame(({ camera, mouse }) => {
      if (!initialCameraPos.current) {
         // Store initial position once
         initialCameraPos.current = camera.position.clone();
      }

      // Calculate target based on initial position
      vec3.set(
         initialCameraPos.current.x + mouse.x * 0.3 * 8,
         initialCameraPos.current.y + mouse.y * 0.3 * 8,
         initialCameraPos.current.z // keep original z fixed
      );
      camera.position.lerp(vec3, 0.02);
      camera.lookAt(0, 0, 0);
   });

   return null;
};
