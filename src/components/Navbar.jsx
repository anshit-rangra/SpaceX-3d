import React from 'react'

const Navbar = () => {
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
