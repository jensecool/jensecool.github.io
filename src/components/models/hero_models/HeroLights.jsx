import * as THREE from "three";

const HeroLights = () => (
  <>
    {/* lamp's light */}
    <spotLight
      position={[19, -2.5, 1.3]}
      angle={3}
      penumbra={1}
      intensity={400}
      color="white"
    />
    {/* bluish overhead lamp */}
    <spotLight
      position={[-20, 20, 4]}
      angle={10}
      penumbra={0.2}
      intensity={700}
      color="#d78c34"
    />
    {/* purplish side fill */}
    <spotLight
      position={[-20, 20, 5]}
      angle={0.6}
      penumbra={1}
      intensity={900}
      color="#d78c34"
    />
    {/* area light for soft moody fill */}
    <primitive
      object={new THREE.RectAreaLight("#ffc141", -20, 20, 2)}
      position={[60, 70, -20]}
      rotation={[2, 2, 0]}
      intensity={600}
    />
    {/* subtle point light for atmospheric tone */}
    <pointLight position={[0, 1, 0]} intensity={10} color="#7209b7" />
    <pointLight position={[1, 2, -2]} intensity={10} color="#0d00a4" />
  </>
);

export default HeroLights;
