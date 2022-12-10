import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Edges } from "@react-three/drei";
import { LayerMaterial, Noise } from "lamina";

const GradientMaterial = ({
  colorA,
  colorB,
  colorC,
  colorD,
  edgesColor,
  scale = 0.25,
  speed = 0.5,
}) => {
  const ref = useRef();

  useFrame((state) => {
    const tick = state.clock.elapsedTime * speed;
    ref.current.layers[0].offset.set(
      (tick * 1) / scale,
      (tick * 1) / scale,
      (tick * 1) / scale
    );
  });

  return (
    <>
      <LayerMaterial ref={ref} toneMapped={false}>
        <Noise
          type="perlin"
          scale={scale}
          colorA={colorA}
          colorB={colorB}
          colorC={colorC}
          colorD={colorD}
          offset={[0, 0, 0]}
        />
      </LayerMaterial>
      <Edges color={edgesColor} scale={1} threshold={1} />
    </>
  );
};

export default GradientMaterial;
