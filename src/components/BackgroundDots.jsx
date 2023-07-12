import React from "react";
import * as THREE from "three";

const BackgroundDots = () => {
  const dotsRef = React.useRef();

  React.useEffect(() => {
    const numDots = 1000;

    const dotGeometry = new THREE.BufferGeometry();

    const dotPositions = new Float32Array(numDots * 3);
    for (let i = 0; i < numDots; i++) {
      const index = i * 3;
      dotPositions[index] = (Math.random() - 0.5) * 10;
      dotPositions[index + 1] = (Math.random() - 0.5) * 10;
      dotPositions[index + 2] = (Math.random() - 0.5) * 10;
    }

    dotGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(dotPositions, 3)
    );

    const dotMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.01,
    });

    const dotsMesh = new THREE.Points(dotGeometry, dotMaterial);

    dotsRef.current.add(dotsMesh);

    return () => {
      dotsRef.current.remove(dotsMesh);
    };
  }, []);

  return <group ref={dotsRef} />;
};

export default BackgroundDots;
