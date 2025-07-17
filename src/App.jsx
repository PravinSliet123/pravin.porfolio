import { useState, useEffect, useRef } from 'react'
import Hero from './components/Hero'
import './components/Hero.css'
import Lenis from 'lenis'
import Projects from "./components/Projects/Projects"
import { AnimatePresence } from 'framer-motion';
import Preloader from "./components/Preloader/Preloader"
import Carousel from './components/slider/Carousel'

function App() {
  const [loading, setIsLoading] = useState(true)
  const lenis = useRef(null)

  useEffect(() => {
    lenis.current = new Lenis({
      duration: 1.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: true,
    })

    function raf(time) {
      lenis.current.raf(time)
      requestAnimationFrame(raf)

    }
    requestAnimationFrame(raf)

    return () => {
      lenis.current && lenis.current.destroy()
    }
  }, [])
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2000);
  }, [])

  const words = [
    "Pravin Kumar",
    "I'm",
    "A Software",
    "Developer",
    "Frontend developer",
    "Backend Developer ",
    "App Developer",
    "And More...",
  ];
  return (
    <div ref={lenis} >
      <AnimatePresence mode="wait">
        {loading && <Preloader words={words} />}
      </AnimatePresence>
      <Hero />
      <div style={{
        overflowX: "hidden"
      }}>
        <Projects />
      </div>
      {/* <FloatProject/> */}
      {/* <Carousel/> */}
    </div>

  )
}

export default App
