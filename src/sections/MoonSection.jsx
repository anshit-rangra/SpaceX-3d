import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import Moon from "../models/Moon"
import { OrbitControls } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import {gsap} from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MoonSection = () => {
  const canvasRef = useRef(null)

  useGSAP(()=> {

    gsap.from(".moon-section .right p, .moon-section .right h1", {
      x: -300,
      opacity: 0,
      duration: 1.2,
      stagger:0.5 , 
      scrollTrigger: {
        trigger: ".moon-section .right",
        scroller: "body",
        start: "top 85%",
        end: "top 5%",
        scrub: 4,
      }
    })

    gsap.from(canvasRef.current, {
      x: 300,
      opacity: 0,
      duration: 1.2,
      scrollTrigger: {
        trigger: canvasRef.current,
        scroller: "body",
        start: "top 85%",
        end: "top 5%",
        scrub: 4,
      }
    })
  })


  return (
    <section id="moon" className="moon-section">

      <div className="right">
        <h1>X on Moon</h1>

        <p>SpaceX plays a key role in NASA’s Artemis program, which aims to return humans to the Moon. SpaceX’s Starship was selected as the Human Landing System for the Artemis III mission.</p>

            <p>The lunar Starship will transport astronauts from lunar orbit to the Moon’s surface and back. It is designed for deep-space missions with large payload capacity, precision landing, and full reusability.</p>

            <p>SpaceX also supports private Moon missions, including dearMoon, a planned Starship flight around the Moon with civilian passengers led by entrepreneur Yusaku Maezawa.</p>
       
      </div>
      <div className="left">
      <Canvas ref={canvasRef} camera={{ position: [0, 0, 8], fov: 40 }}>

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
