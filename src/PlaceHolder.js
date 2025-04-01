import React from "react";

const PlaceHolder = (props) => {
  return (
    <>
      <mesh {...props}>
        <boxGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="red" />
      </mesh>
    </>
  );
};

export default PlaceHolder;
