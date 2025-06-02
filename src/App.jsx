import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import SpaceShip from './sections/SpaceShip'
import MissionMars from './sections/MissionMars'

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SpaceShip />
      <MissionMars />
    </>
  )
}

export default App
