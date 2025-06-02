import {  OrbitControls } from "@react-three/drei";
import React, { useRef } from "react";
import StarlinkModel from "../models/StarlinkModel";
import { Canvas } from "@react-three/fiber";
import { useGSAP } from "@gsap/react";
import {gsap} from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Starlink = () => {
  const canvasRef = useRef(null)

  useGSAP(()=>{
    gsap.from("#rover h1",{
      y: 100,
      opacity:0,
      duration:1,
      scrollTrigger:{
        trigger:"#rover h1",
        scroller: "body",
        start: "top 75%",
        end: "top 75%",
        scrub:4
      }
    })

    gsap.from("#rover p",{
      y: 100,
      opacity:0,
      duration:1,
      scrollTrigger:{
        trigger:"#rover h1",
        scroller: "body",
        start: "top 50%",
        end: "top 10%",
        scrub:4
      }
    })

    gsap.from(canvasRef.current,{
      y: 100,
      opacity:0,
      duration:1,
      scrollTrigger:{
        trigger:canvasRef.current,
        scroller: "body",
        start: "top 60%",
        end: "top 30%",
        scrub:4
      }
    })
  })


  return (
    <section id="rover" className="starlink-section">
        <h1>Mars Rover</h1>
        <p>While SpaceX hasn’t built its own Mars rover yet, it plans to collaborate with scientific and industrial partners to deploy robotic vehicles. These rovers could explore terrain, test soil, search for water, and prepare landing zones for humans. Future missions using the Starship rocket may deliver advanced rovers to assist with infrastructure setup and long-term survival on Mars, supporting Elon Musk’s colonization vision.</p>
      <Canvas ref={canvasRef} camera={{ position: [10, 20, 30], fov: 70 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} />
        
        <StarlinkModel />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </section>
  );
};

export default Starlink;
