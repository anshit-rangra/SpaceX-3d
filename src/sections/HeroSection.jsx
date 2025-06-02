import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import SpaceStation from '../models/SpaceStation'

const HeroSection = () => {
  return (
    <main className='hero-section'>
      
      <Canvas  camera={{ position: [-5, 0, -4], fov: 100 }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[3, 5, 7]} />
      <SpaceStation scale={1.5} />
      </Canvas>

      <div className="hero-container">
        <h1>SpaceX</h1>
        <p>SpaceX is an American aerospace company founded by Elon Musk in 2002. It designs, manufactures, and launches advanced rockets and spacecraft with the goal of reducing space transportation costs and enabling human life on Mars. Notable achievements include the Falcon 9 reusable rocket, the Dragon spacecraft, and the Starship system in development. SpaceX also operates Starlink, a satellite internet network. It made history as the first private company to send astronauts to the International Space Station.</p>

      </div>
    </main>
  )
}

export default HeroSection
