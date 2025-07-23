import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackGround from "../components/ParallaxBackGround";
import { Float } from "@react-three/drei";
import { Astronaut } from "../components/Astronaut";
import { useMediaQuery } from "react-responsive";
import Loader from "../components/Loader";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  return (
    <section
      id="home"
      className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space"
    >
      <HeroText />
      <ParallaxBackGround />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3], fov: 50 }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut
                scale={isMobile && 0.5}
                position={isMobile && [-0.9, -1.5, -0.8]}
              />
            </Float>
            {/* <Rig /> */}
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    state.camera.position.lerp(
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.1
    );
  });
}

export default Hero;
