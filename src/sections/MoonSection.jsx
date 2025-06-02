import { Canvas } from "@react-three/fiber";
import React from "react";
import Moon from "../models/Moon"
import { OrbitControls } from "@react-three/drei";

const MoonSection = () => {
  return (
    <section className="moon-section">

      <div className="right">
        <h1>X on Moon</h1>

        <p>SpaceX plays a key role in NASA’s Artemis program, which aims to return humans to the Moon. SpaceX’s Starship was selected as the Human Landing System for the Artemis III mission.</p>

            <p>The lunar Starship will transport astronauts from lunar orbit to the Moon’s surface and back. It is designed for deep-space missions with large payload capacity, precision landing, and full reusability.</p>

            <p>SpaceX also supports private Moon missions, including dearMoon, a planned Starship flight around the Moon with civilian passengers led by entrepreneur Yusaku Maezawa.</p>
       
      </div>
      <div className="left">
      <Canvas camera={{ position: [0, 0, 8], fov: 40 }}>

        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 10]} />
            <Moon scale={2} />
            <OrbitControls enableZoom={false}    />
        </Canvas>
      </div>

    </section>
  );
};

export default MoonSection;
