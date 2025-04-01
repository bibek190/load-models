import { useLoader } from "@react-three/fiber";
import React from "react";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Fox = () => {
  const foxModel = useLoader(GLTFLoader, "./Fox/glTF/Fox.gltf", (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("./draco/");
    loader.setDRACOLoader(dracoLoader);
  });

  return (
    <>
      <primitive object={foxModel.scene} scale={0.03} position-x={-3} />
    </>
  );
};

export default Fox;
