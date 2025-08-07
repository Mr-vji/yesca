export const Lights = () => {
   return (
      <>
         {/* Ambient light for soft base fill */}
         <ambientLight intensity={0.5} />

         {/* Main sunlight coming from above */}
         <directionalLight position={[0, 10, 10]} intensity={1.2} color="#2d358e" />

         {/* Fill light from the side for depth */}
         <directionalLight position={[-10, 5, 5]} intensity={0.4 * 2} color="#2d358e" />

         {/* Optional backlight for rim lighting */}
         <directionalLight position={[0, -5, -10]} intensity={0.3 * 2} color="#2d358e" />
      </>
   );
};
