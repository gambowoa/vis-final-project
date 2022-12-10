import React from "react";
import { Canvas } from "@react-three/fiber";
import styles from "./styles.module.scss";

import Model from "./components/Model";
import { Center } from "@react-three/drei";
import useWindowDimensions from "./hooks/useWindowDimensions";
import { motion as motion3D } from "framer-motion-3d";
import { OrbitControls } from "@react-three/drei";
import Stars from "./components/Stars";

const App = () => {
  const { dpr } = useWindowDimensions();

  return (
    <>
      <div className={styles.wrapper}>
        <Canvas flat dpr={dpr}>
          <ambientLight />
          <motion3D.mesh
            whileHover={{
              scale: 1.2,
            }}
            whileTap={{ scale: 1 }}
            transition={{ type: "spring", duration: 1, bounce: 0.6 }}
          >
            <Center>
              <Model />
            </Center>
          </motion3D.mesh>
          <OrbitControls
            autoRotate={true}
            autoRotateSpeed={0.5}
            enableRotate={true}
            enablePan={false}
            enableZoom={false}
            enable
          />
          <Stars />
        </Canvas>
      </div>
      <div className={styles.info}>
        <p>
          This digital experience was developed with HTML, CSS, and Javascript.
          It is best viewed in a desktop browser. Use your mouse to orbit around
          the scene. Hover or click on the pencil to interract with it.
        </p>
      </div>
      <div className={styles.title}>
        <p>Pencil: A Space Odyssey</p>
      </div>
      <div className={styles.author}>
        <p>Leann Gamboa</p>
      </div>
    </>
  );
};

export default App;
