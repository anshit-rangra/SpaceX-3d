# 🚀 SpaceX Inspired 3D Web Experience

A stunning, interactive 3D SpaceX-themed website built with **React**, **React Three Fiber (Three.js)**, and **GSAP**. This project reimagines SpaceX's digital presence through immersive 3D models, scroll-triggered animations, and a cinematic UI.

---

## 🌌 Overview

This website is a personal re-imagination of SpaceX's digital identity. It features interactive 3D models of spacecraft, planets, and satellites — all rendered in the browser using WebGL. Smooth scroll-based animations powered by GSAP bring the experience to life, creating a futuristic and bold aesthetic true to the SpaceX brand.

---

## ✨ Features

- 🛸 **Interactive 3D Models** — Space Station, Space Shuttle, Mars, Moon, and Starlink satellite rendered with React Three Fiber
- 🎬 **Scroll-Triggered Animations** — GSAP ScrollTrigger drives cinematic entrance effects as you scroll
- 🖱️ **Custom Mouse Follower** — Smooth elastic cursor effect using GSAP
- 🔄 **Auto-Rotating Models** — All 3D models gently spin for a dynamic feel
- 🎛️ **Orbit Controls** — Click and drag to rotate and explore any 3D model
- 🧭 **Animated Navbar** — Staggered GSAP entrance animation for navigation buttons
- 📱 **Responsive Design** — Styled with custom CSS for all screen sizes
- 🦶 **Animated Footer** — Social links and navigation with elastic/back easing animations

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | Component-based UI framework |
| Vite | Fast build tool & dev server |
| React Three Fiber | Declarative Three.js in React |
| Three.js | WebGL 3D rendering engine |
| @react-three/drei | Useful R3F helpers (OrbitControls, useGLTF) |
| GSAP | High-performance animation library |
| @gsap/react | GSAP React integration (useGSAP hook) |
| React Icons | Icon library (social media icons) |

---

## 🗂️ Project Structure

```
SpaceX-3d/
├── index.html                    # Entry HTML file
├── package.json                  # Dependencies & scripts
├── vite.config.js                # Vite configuration
├── eslint.config.js              # ESLint configuration
├── public/
│   ├── logo.svg                  # SpaceX logo
│   ├── space.jpg                 # Background image
│   ├── spaceStation.glb          # 3D Space Station model
│   ├── spaceShuttle.glb          # 3D Space Shuttle model
│   ├── mars.glb                  # 3D Mars model
│   ├── moon.glb                  # 3D Moon model
│   └── starlink.glb              # 3D Starlink satellite model
└── src/
    ├── main.jsx                  # App entry point
    ├── App.jsx                   # Root component — assembles all sections
    ├── index.css                 # Global styles & section layouts
    ├── components/
    │   ├── Navbar.jsx            # Animated navigation bar
    │   ├── Footer.jsx            # Animated footer with social links
    │   └── MouseFollower.jsx     # Custom cursor with elastic GSAP effect
    ├── models/
    │   ├── SpaceStation.jsx      # 3D Space Station (GLB loader + rotation)
    │   ├── SpaceShuttle.jsx      # 3D Space Shuttle (GLB loader + rotation)
    │   ├── Mars.jsx              # 3D Mars planet (GLB loader + rotation)
    │   ├── Moon.jsx              # 3D Moon (GLB loader + rotation)
    │   └── StarlinkModel.jsx     # 3D Starlink satellite (GLB loader + rotation)
    └── sections/
        ├── HeroSection.jsx       # Landing section — Space Station + intro text
        ├── SpaceShip.jsx         # Space Shuttle section with description
        ├── MissionMars.jsx       # Mars mission section with 3D Mars
        ├── MoonSection.jsx       # Moon mission section with 3D Moon
        ├── Starlink.jsx          # Mars Rover / Starlink section
        └── Men.jsx               # "We're Going to Space" — inspirational section
```

---

## 🧭 Sections Walkthrough

| # | Section | Description | 3D Model |
|---|---------|-------------|----------|
| 1 | **Hero** | Landing page with SpaceX intro and animated Space Station | `spaceStation.glb` |
| 2 | **Space Shuttle** | History and significance of the space shuttle program | `spaceShuttle.glb` |
| 3 | **Mission Mars** | SpaceX's mission to colonize Mars with Starship | `mars.glb` |
| 4 | **Moon** | SpaceX's role in NASA Artemis & lunar missions | `moon.glb` |
| 5 | **Rover** | Future Mars rovers and robotic exploration plans | `starlink.glb` |
| 6 | **Spacefarers** | Inspirational message about humanity's journey to space | Background image |
| 7 | **Footer** | Navigation links, social media, and legal info | — |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18 (or **Bun**)

### Installation

```bash
# Clone the repository
git clone https://github.com/anshit-rangra/SpaceX-3d.git
cd SpaceX-3d

# Install dependencies
npm install
# or
bun install

# Start the development server
npm run dev
# or
bun dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The output will be in the `dist/` directory, ready for deployment.

---

## 🎨 Animation Details

### GSAP Animations Used

| Animation | Easing | Trigger |
|-----------|--------|---------|
| Navbar logo slide-in | Default | Page load (timeline) |
| Nav buttons stagger | Default | Page load (stagger: 0.4) |
| Hero title / text | Default | Page load (delay) |
| Section content slide | `scrub: 4` | ScrollTrigger (scroll-linked) |
| 3D Canvas entrance | `scrub: 4` | ScrollTrigger (scroll-linked) |
| Footer links bounce | `elastic.out(0.5, 0.3)` | ScrollTrigger |
| Footer bottom pop | `back.out(1.7)` | ScrollTrigger |
| Mouse follower | `elastic.out(1, 0.3)` | Mouse move event |

---

## 📦 3D Models

All 3D assets are in `.glb` (GL Transmission Format Binary) format, loaded via `useGLTF` from `@react-three/drei`:

| Model | File | Size |
|-------|------|------|
| Space Station | `spaceStation.glb` | ~22 MB |
| Starlink Satellite | `starlink.glb` | ~7 MB |
| Space Shuttle | `spaceShuttle.glb` | ~314 KB |
| Mars | `mars.glb` | ~2.3 MB |
| Moon | `moon.glb` | ~150 KB |

> **Note:** The Space Station model is large (~22 MB). Consider lazy loading or compression for production deployments.

---

## 📄 License

This project is open source. See the repository for details.