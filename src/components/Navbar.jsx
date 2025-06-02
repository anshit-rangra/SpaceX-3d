import { useGSAP } from '@gsap/react'
import { gsap } from "gsap";
import React from 'react'

const Navbar = () => {
  useGSAP(() => {
    let tl = new gsap.timeline()
    tl.from(".logo", {
      y: 10,
      opacity:0,
      delay: .5,
      duration:.8
    })

    tl.from(".btns button",{
      x: 400,
      opacity: 0,
      duration:1,
      stagger: 0.4
    })
  })
  return (
    <nav>
      <a href="#">

      <img className='logo' src="./logo.svg" alt="SpaceX" />
      </a>
      <div className="btns">

        <button>
          <a href="#">
            <span>Home</span>
            <div></div>
          </a>
        </button>

        <button>
          <a href="#shuttle">
            <span>Shuttle</span>
            <div></div>
          </a>
        </button>
        
        <button>
          <a href="#mars">
            <span>Mars</span>
            <div></div>
          </a>
        </button>

        <button>
          <a href="#moon">
            <span>Moon</span>
            <div></div>
          </a>
        </button>
        
        <button>
          <a href="#rover">
            <span>Rover</span>
            <div></div>
          </a>
        </button>

        <button>
          <a href="#MenOnSpace">
            <span>Spacefarers</span>
            <div></div>
          </a>
        </button>
        
      </div>
    </nav>
  )
}

export default Navbar
