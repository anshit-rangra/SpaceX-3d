import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export default function Moon(props) {
  const ref = useRef();
  const { scene } = useGLTF('./moon.glb');

  // Rotate the model every frame
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.0026; // Adjust speed here
    }
  });

  return <primitive ref={ref} object={scene} {...props} />;
}
