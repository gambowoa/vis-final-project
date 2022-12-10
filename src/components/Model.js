import React from "react";
import { Edges, useGLTF } from "@react-three/drei";
import GradientMaterial from "./GradientMaterial";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Model = () => {
  const { width } = useWindowDimensions();

  const { nodes } = useGLTF("/mechanical_pencil.gltf");

  return (
    <group dispose={null} scale={(0.1 * width) / 1000}>
      <mesh geometry={nodes.mesh_0.geometry}>
        <Edges color={"#ffffff"} scale={1} threshold={1} />
        <meshBasicMaterial attach="material" color="#000000" />
      </mesh>
      <mesh geometry={nodes.mesh_0_1.geometry}>
        <Edges color={"#ffffff"} scale={1} threshold={1} />
        <meshBasicMaterial attach="material" color="#000000" />
      </mesh>
      <mesh geometry={nodes.mesh_0_2.geometry}>
        <GradientMaterial
          colorA="#000000"
          colorB="#000000"
          colorC="#0000ff"
          colorD={"#ff00ff"}
          edgesColor="#ffffff"
          scale={0.1}
        />
      </mesh>
    </group>
  );
};

export default Model;

useGLTF.preload("/mechanical_pencil.gltf");
