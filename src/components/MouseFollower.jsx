import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function MouseFollower() {
  const followerRef = useRef(null);

  useEffect(() => {
    const follower = followerRef.current;

    const moveFollower = (e) => {
      // GSAP smooth animation to mouse position
      gsap.to(follower, {
        duration: 2,
        x: e.clientX - follower.offsetWidth / 2,
        y: e.clientY - follower.offsetHeight / 2,
        ease: "elastic.out(1,0.3)",
      });
    };

    window.addEventListener('mousemove', moveFollower);

    return () => {
      window.removeEventListener('mousemove', moveFollower);
    };
  }, []);

  return (
    <>
      <div
        ref={followerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: '#fff',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(0, 0)',
          mixBlendMode: 'difference', // optional cool effect
        }}
      />
    </>
  );
}
