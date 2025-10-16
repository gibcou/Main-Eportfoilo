import "./App.css"
import { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MouseFollower from "./components/MouseFollower"
import Header from "./components/Header"
import About from "./components/About"
import TechStack from "./components/TechStack"
import Projects from "./components/Projects"
import Resume from "./components/Resume"
import Footer from "./components/Footer"
import ResumePage from "./components/ResumePage"

function HomePage() {
  async function initLocomotiveScroll() {
    const LocomotiveScroll = (await import("locomotive-scroll")).default
    new LocomotiveScroll()
  }

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      initLocomotiveScroll()
    }
  }, [])

  return (
    <main>
      <MouseFollower />
      <Header />
      <About />
      <TechStack />
      <Projects />
      <Resume />
      <Footer />
    </main>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </Router>
  )
}

export default App
