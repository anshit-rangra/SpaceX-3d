import { Environment, OrbitControls } from "@react-three/drei";
import React from "react";
import StarlinkModel from "../models/StarlinkModel";
import { Canvas } from "@react-three/fiber";

const Starlink = () => {
  return (
    <section className="starlink-section">
        <h1>Mars Rover</h1>
        <p>While SpaceX hasn’t built its own Mars rover yet, it plans to collaborate with scientific and industrial partners to deploy robotic vehicles. These rovers could explore terrain, test soil, search for water, and prepare landing zones for humans. Future missions using the Starship rocket may deliver advanced rovers to assist with infrastructure setup and long-term survival on Mars, supporting Elon Musk’s colonization vision.</p>
      <Canvas camera={{ position: [10, 20, 30], fov: 70 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} />
        {/* <Environment files="./mars.hdr" background /> */}
        <StarlinkModel />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </section>
  );
};

export default Starlink;
