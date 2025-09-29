import { useState, useEffect } from "react"
import "./style.css"
import BackgroundLines from "../BackgroundLines"
import WorkCard from "../WorkCard"
import ScrambleText from "../ScrambleText"
import ParaWriting from "../ParaWriting"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

import work1 from "../../assets/Images/work1.png"
import work2 from "../../assets/Images/work2.png"
import work3 from "../../assets/Images/work3.png"
import work4 from "../../assets/Images/work4.svg"

export default function Projects() {
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

  const works = [
    {
      client: "Personal Project",
      year: "April 2025 - June 2025",
      img: work1,
      title: "Search API Platform",
      detail: "Created a fully functional search platform for movies. Engineered & integrated a search api for (moviename/title) with a fully responsive design, loading states & dynamic routing to showcase movie search and showcase on an individual movie page.",
    },
    {
      client: "Personal Project", 
      year: "June 2025 - August 2025",
      img: work2,
      title: "Subscription Based Marketplace",
      detail: "A subscription-based marketplace platform where sellers pay a monthly fee instead of transaction commissions. This model provides sellers with predictable costs and greater profit retention, while giving buyers access to a trusted marketplace.",
    },
    {
      client: "Skinistic AI",
      year: "September 2024 - April 2025",
      img: work3,
      title: "AI-Powered Skin Analysis Platform",
      detail: "Architected real-time skin analysis platform using OpenAI Vision API and Next.js, achieving 98% detection accuracy across diverse skin conditions with dynamic skincare recommendation system.",
    },
    {
      client: "Personal Project",
      year: "August 2025 - September 2025",
      img: work4,
      title: "Ultraverse NFT Marketplace",
      detail: "Built a comprehensive NFT marketplace platform featuring digital asset trading, blockchain integration, and user wallet connectivity. Implemented secure transaction processing and dynamic pricing with real-time market data.",
      link: "https://gibcou.github.io/gibson-internship/"
    },
  ]

  const opacityVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <section ref={ref} className="projects" id="projects">
      <BackgroundLines />
      <div className="background--glow"></div>

      <div className="projects--grid">
        <motion.div initial="hidden" animate={controls} variants={opacityVariant} transition={{ duration: 1, delay: 0.5 }} className="projects--grid--title">
          <h3 className="theme--text">
            <ScrambleText shuffle delay={0.5}>
              03
            </ScrambleText>{" "}
            <span className="hash">{"//"}</span>{" "}
            <ScrambleText shuffle delay={0.5}>
              Expertise
            </ScrambleText>
          </h3>
        </motion.div>

        <div className="projects--grid--content">
          <div className="projects--grid--content--heading">
            <h2>
              <ParaWriting stagger={0.08} text={"My "} sec={"Works"} />
            </h2>
          </div>
          <div className="projects--grid--content--works">
            {works.map((item, index) => {
              return (
                <WorkCard
                  item={item}
                  key={index}
                  // delay={0.1 * index + 1}
                  // controls={controls}
                />
              )
            })}
          </div>
        </div>

        <motion.div initial="hidden" animate={controls} variants={opacityVariant} transition={{ duration: 1, delay: 1 }} onAnimationComplete={() => handleComplete()} className="projects--grid--detail">
          <p className="theme--detail">
            <ScrambleText delay={1}>Discover a curated portfolio of projects where each line of code tells a story of problem-solving, creativity, and technical finesse.</ScrambleText>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
