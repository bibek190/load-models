import { Clone, useAnimations, useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import React, { useEffect } from "react";

const Fox = (props) => {
  const fox = useGLTF("./Fox/glTF/Fox.gltf");
  const animations = useAnimations(fox.animations, fox.scene);

  const { animationName } = useControls({
    animationName: { options: animations.names },
  });

  useEffect(() => {
    const actions = animations.actions[animationName];
    actions.reset().fadeIn(0.5).play();

    return () => {
      actions.fadeOut(0.5).play();
    };
  }, [animationName]);

  return (
    <>
      <primitive object={fox.scene} {...props} />
    </>
  );
};

export default Fox;
