import { useThree } from "@react-three/fiber";
import React, { useEffect, useLayoutEffect } from "react";
import { TextureLoader } from "three";

const ImagePlane = ({ imageUrl, x, y, onImageClick, ind }) => {
  const { size, setSize } = useThree();
  const texture = new TextureLoader().load(imageUrl);
  const { gl } = useThree();

  const handlePointerOver = () => {
    gl.domElement.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    gl.domElement.style.cursor = "auto";
  };

  useLayoutEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window?.removeEventListener("resize", handleResize);
    };
  }, [size]);

  useEffect(() => {
    console.log(size);
  }, [size]);

  return (
    <mesh
      position={[x, y, 0]}
      onClick={(e) => {
        e.stopPropagation();
        onImageClick();
      }}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      renderOrder={ind}
      visible
    >
      <planeGeometry
        args={[size.width * 0.001, size.height * 0.001]}
        attach="geometry"
      />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

export default React.memo(ImagePlane);
