import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import SpaceShip from './sections/SpaceShip'
import MissionMars from './sections/MissionMars'
import MoonSection from './sections/MoonSection'
import Starlink from './sections/Starlink'
import Men from './sections/Men'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SpaceShip />
      <MissionMars />
      <MoonSection />
      <Starlink />
      <Men />
      <Footer />
    </>
  )
}

export default App
