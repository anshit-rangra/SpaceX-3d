import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import SpaceShuttle from '../models/SpaceShuttle'

const SpaceShip = () => {
  return (
    <section id='shuttle' className='space-ship'>
        <div className="left">
            <h1>Space Shuttle</h1>
            <p>The space shuttle was a reusable spacecraft developed by SpaceX. It launched like a rocket, orbited Earth like a spacecraft, and landed like a plane, revolutionizing human spaceflight and satellite deployment.</p>

            <p>It carried astronauts, cargo, and scientific equipment. The shuttle enabled construction of the International Space Station and repaired satellites, including the Hubble Space Telescope.</p>

            <p>Each mission expanded our understanding of space and technology. Although retired in 2011, the space shuttle remains a symbol of innovation and exploration for humanity.</p>
        </div>

        <div className="right">
            <Canvas camera={{position:[40,25,20], fov:100}} >
                <ambientLight intensity={0.8} />
                <directionalLight position={[3, 5, 7]} />
                <SpaceShuttle scale={4} />
                <OrbitControls enableZoom={false} />
            </Canvas>
        </div>
    </section>
  )
}

export default SpaceShip
