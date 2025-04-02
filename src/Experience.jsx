import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Model from "./Model";
import { Suspense } from "react";
import PlaceHolder from "./PlaceHolder";
import Hamburger from "./Hamburger";
import Fox from "./Fox";

export default function Experience() {
  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight
        castShadow
        position={[1, 2, 3]}
        intensity={4.5}
        shadow-normalBias={0.5}
      />
      <ambientLight intensity={1.5} />

      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
      <Suspense fallback={<PlaceHolder scale={[2, 3, 2]} position-y={0.5} />}>
        <Hamburger scale={0.09} position={[2, 0, 3]} />
      </Suspense>
      <Fox scale={0.03} position={[-2.5, -1, -2.5]} rotation-y={0.6} />
    </>
  );
}
