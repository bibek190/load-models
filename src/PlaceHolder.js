import React from "react";

const PlaceHolder = (props) => {
  return (
    <>
      <mesh {...props}>
        <boxGeometry args={[1, 1, 1, 3, 3, 3]} />
        <meshBasicMaterial wireframe color={"red"} />
      </mesh>
    </>
  );
};

export default PlaceHolder;
