import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import Mars from "../models/Mars"
import { OrbitControls } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import {gsap} from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MissionMars = () => {

  const canvasRef = useRef(null)

  useGSAP(()=> {

    gsap.from(".mars-section .right p, .mars-section .right h1", {
      x: 300,
      opacity: 0,
      duration: 1.2,
      stagger:0.5 , 
      scrollTrigger: {
        trigger: ".mars-section .right",
        scroller: "body",
        start: "top 85%",
        end: "top 5%",
        scrub: 4,
      }
    })

    gsap.from(canvasRef.current, {
      x: -300,
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
    <section id="mars" className="mars-section">
      <div className="left">
      <Canvas ref={canvasRef} camera={{ position: [0, 0, 5], fov: 40 }}>

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
