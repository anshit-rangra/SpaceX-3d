import React from 'react';
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { useGSAP } from "@gsap/react";
import {gsap} from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {

  useGSAP(()=>{
    gsap.from(".logo-text", {
      x: -200,
      opacity:0,
      duration:1,
      scrollTrigger:{
        trigger: ".spacex-footer",
        scroller: "body",
        start: "top 70%",
        end: "top top"
      }
    })

    gsap.from(".footer-links a, .footer-social a", {
      y: 100,
      opacity:0,
      duration:2,
      stagger: 0.3,
      ease: "elastic.out(0.5,0.3)",
      scrollTrigger:{
        trigger: ".spacex-footer",
        scroller: "body",
        start: "top 70%",
      }
    })

    gsap.from(".footer-bottom * ", {
      y: 100,
      duration: 1.5,
      opacity: 0,
      ease: "back.out(1.7)",
      stagger:0.2,
      scrollTrigger:{
        trigger: ".spacex-footer",
        scroller: "body",
        start: "top 70%",
      }
    })
  })

  return (
    <footer className="spacex-footer">
      {/* Top Section */}
      <div className="footer-top">
        <div className="footer-logo">
          <span className="logo-text"><a href="#"><img src="./logo.svg" alt="SpaceX" /></a></span>
        </div>
        
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#shuttle">Shuttle</a>
          <a href="#mars">Mars</a>
          <a href="#moon">Moon</a>
          <a href="#rover">Rover</a>
        </div>
        
        <div className="footer-social">
          <a href="https://twitter.com/SpaceX" aria-label="Twitter"><FaTwitter /></a>
          <a href="https://instagram.com/SpaceX" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://youtube.com/SpaceX" aria-label="YouTube"><FaYoutube /></a>
          <a href="https://linkedin.com/company/SpaceX" aria-label="LinkedIn"><FaLinkedin /></a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SPACEX. ALL RIGHTS RESERVED.</p>
        <div className="legal-links">
          <a href="#">PRIVACY POLICY</a>
          <a href="#">TERMS OF USE</a>
          <a href="#">CONTACT</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;