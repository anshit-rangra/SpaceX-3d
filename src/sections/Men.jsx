import React from 'react'
import { useGSAP } from "@gsap/react";
import {gsap} from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Men = () => {

  useGSAP(() => {
    gsap.from(".mos h1",{
      y: 200,
      duration: 1,
      opacity:0,
      scrollTrigger: {
        trigger: ".mos",
        scroller: "body",
        start: "top 80%",
        end: "top 80%",
        scrub:4
      }
    })

    gsap.from(".mos p",{
      y: 200,
      duration: 1,
      opacity:0,
      scrollTrigger: {
        trigger: ".mos h1",
        scroller: "body",
        start: "top 80%",
        end: "top 50%",
        scrub: 4
      }
    })
  })
  
  return (
    <section id='MenOnSpace' className='mos'>
        <div>
      <h1>We’re Going to Space</h1>
      <p>
      SpaceX is thrilled to share that we are closer than ever to making space travel a reality for everyday people. Our cutting-edge spacecraft and launch systems have reached milestones that once belonged only to science fiction. We are not just launching satellites or sending astronauts to the International Space Station — we are preparing for missions that will take civilians into orbit, around the Moon, and eventually to Mars. This is more than a scientific achievement; it’s a moment for all of humanity. We believe space should be open to explorers, innovators, and dreamers from every walk of life. Whether you're a student, an engineer, a teacher, or someone who's always looked up at the stars with wonder — this journey is for you. Our future is not limited to Earth. With each launch, we’re pushing the boundaries of possibility. If you've ever dreamed of being part of something bigger, now is your chance. SpaceX invites you to come aboard as we prepare to take humanity's next great leap — into the cosmos.
      </p>
      <p id='elon'>- By Elon Musk</p>
        </div>
    </section>
  )
}

export default Men
