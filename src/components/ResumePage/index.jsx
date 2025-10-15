import { useState, useEffect } from "react"
import "./style.css"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Link } from "react-router-dom"

// components
import BackgroundLines from "../BackgroundLines"
import Button from "../Button"
import ScrambleText from "../ScrambleText"

// assets
import ProfilePic from "../../assets/Images/7D443AA2-FCD7-4367-8093-F37928A6843E_1_201_a.jpeg"
import ResumePDF from "../../assets/Gibson's Resume  (4).pdf"
import ArrowLeftIcon from "../../assets/Icon/arrow-up-right.svg"

export default function ResumePage() {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const [hasAnimated, setHasAnimated] = useState(false)

  const handleComplete = () => {
    setHasAnimated(true)
  }

  useEffect(() => {
    // Start animation when the component is in view
    if (inView && !hasAnimated) {
      controls.start("visible")
    }
  }, [inView, controls])

  const opacityVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const blurVariants = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  }

  const scaleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    },
  }

  return (
    <div ref={ref} className="resume-page">
      <BackgroundLines />
      
      {/* Header with back button */}
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={blurVariants} 
        transition={{ duration: 1, delay: 0.2 }} 
        className="resume-page--header"
      >
        <Link to="/" className="back-button">
          <Button label="Back to Portfolio" icon={ArrowLeftIcon} />
        </Link>
      </motion.div>

      {/* Resume content */}
      <motion.div 
        initial="hidden" 
        animate={controls} 
        variants={scaleVariants} 
        transition={{ duration: 1, delay: 0.8 }}
        onAnimationComplete={() => handleComplete()}
        className="resume-page--content"
      >
        <div className="resume-page--image-container">
          <img src={ProfilePic} alt="Gibson Coutley Resume" />
        </div>
        
        <motion.div 
          initial="hidden" 
          animate={controls} 
          variants={opacityVariant} 
          transition={{ duration: 1, delay: 1.2 }}
          className="resume-page--actions"
        >
          <a href={ResumePDF} target="_blank" rel="noopener noreferrer">
            <Button label="Download PDF" />
          </a>
          <a href={ResumePDF} target="_blank" rel="noopener noreferrer">
            <Button label="View PDF" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  )
}