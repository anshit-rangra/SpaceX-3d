import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <img className='logo' src="./logo.svg" alt="logo" />
      <div className="btns">

        <button>
        <span>Home</span>
        <div></div>
        </button>


        <button>
        <span>Mission</span>
        <div></div>
        </button>
        
        <button>
        <span>Research</span>
        <div></div>
        </button>

        <button>
        <span>Rockets</span>
        <div></div>
        </button>
        
        <button>
        <span>Space</span>
        <div></div>
        </button>

        <button>
        <span>Support</span>
        <div></div>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
