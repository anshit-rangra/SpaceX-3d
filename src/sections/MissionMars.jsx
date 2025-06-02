import { Canvas } from "@react-three/fiber";
import React from "react";
import Mars from "../models/Mars"
import { OrbitControls } from "@react-three/drei";

const MissionMars = () => {
  return (
    <section className="mars-section">
      <div className="left">
      <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>

        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 10]} />
            <Mars scale={2} />
            <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      <div className="right">
        <h1>Our Mission</h1>

        <p>SpaceX, founded by Elon Musk, aims to establish a self-sustaining city on Mars, making humans a multiplanetary species. The mission centers around Starship, a massive, reusable rocket system designed to transport cargo and eventually human settlers to the Red Planet.</p>

            <p>Starship features stainless-steel construction and is powered by Raptor engines using methane and liquid oxygen, ideal for Mars operations. It includes in-orbit refueling, large cargo capacity, and landing capabilities on unprepared terrain—key components to support exploration, infrastructure deployment, and colonization.</p>

            <p>SpaceX plans to send cargo missions first, followed by crewed flights. Elon Musk aims to start building Mars settlements sometime in the 2030s.</p>
       
      </div>
    </section>
  );
};

export default MissionMars;
