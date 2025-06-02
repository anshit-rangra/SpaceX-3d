import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export default function SpaceShuttle(props) {
  const groupRef = useRef(); 
  const { scene } = useGLTF('./spaceShuttle.glb');
  const mouse = useRef([0, 0]);
  const { gl } = useThree();

  useEffect(() => {
    const handlePointerMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      mouse.current = [x, y];
    };

    gl.domElement.addEventListener('pointermove', handlePointerMove);
    return () => gl.domElement.removeEventListener('pointermove', handlePointerMove);
  }, [gl]);

  useFrame(() => {
    if (groupRef.current) {
      const [x, y] = mouse.current;
  
      groupRef.current.rotation.y += 0.005; 
  
      const targetYRotation = x * 0.5; 
      const targetXRotation = -y * 2;
  
     const desiredX = targetXRotation;
      const desiredY = groupRef.current.rotation.y + targetYRotation;
  
      groupRef.current.rotation.x += (desiredX - groupRef.current.rotation.x) * 0.1;
      groupRef.current.rotation.y += (desiredY - groupRef.current.rotation.y) * 0.1;
    }
  });
  
  
  return (
    <group ref={groupRef} {...props}>
      <primitive object={scene} />
    </group>
  );
}
