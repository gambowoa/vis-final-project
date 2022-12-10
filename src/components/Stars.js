import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = () => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 5 })
  );
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 1000;
    ref.current.rotation.y -= delta / 100;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]} scale={1}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export default Stars;
