import { useRef, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react'
import { pipelineStages } from '../project'

const positions = [
  { left: 8.5, top: 21 },
  { left: 34, top: 21 },
  { left: 62, top: 21 },
  { left: 89.5, top: 21 },
  { left: 76, top: 69 },
  { left: 46, top: 69 },
  { left: 15, top: 69 },
]

const progressStops = [0, 0.16, 0.32, 0.48, 0.64, 0.82, 1]

export function PipelineStory() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState(0)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    restDelta: 0.001,
  })
  const packetX = useTransform(smoothProgress, progressStops, [85, 340, 620, 895, 760, 460, 150])
  const packetY = useTransform(smoothProgress, progressStops, [110, 110, 110, 110, 360, 360, 360])

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    if (reduceMotion) return
    setActiveIndex(Math.min(pipelineStages.length - 1, Math.floor(value * pipelineStages.length)))
  })

  return (
    <section ref={sectionRef} className="pipeline-story" id="pipeline" aria-labelledby="pipeline-title">
      <div className="pipeline-sticky">
        <div className="section-heading pipeline-heading">
          <h2 id="pipeline-title">Follow the governed path.</h2>
          <p>Each handoff changes the data, its guarantees, or the decision it can support.</p>
        </div>

        <div className="pipeline-desktop">
          <div className="pipeline-canvas" aria-hidden="true">
            <svg viewBox="0 0 1000 470" preserveAspectRatio="xMidYMid meet">
              <path
                className="pipeline-path-base"
                d="M85 110 H895 Q950 110 950 165 V305 Q950 360 895 360 H150"
              />
              <motion.path
                className="pipeline-path-live"
                d="M85 110 H895 Q950 110 950 165 V305 Q950 360 895 360 H150"
                style={{ pathLength: reduceMotion ? 1 : smoothProgress }}
              />
              <motion.g style={reduceMotion ? { x: 150, y: 360 } : { x: packetX, y: packetY }}>
                <circle className="pipeline-packet-ring" r="15" />
                <circle className="pipeline-packet" r="6" />
              </motion.g>
            </svg>

            {pipelineStages.map((stage, index) => {
              const Icon = stage.Icon
              return (
                <div
                  className={`pipeline-node ${index === activeIndex || reduceMotion ? 'is-active' : ''}`}
                  key={stage.name}
                  style={{ left: `${positions[index].left}%`, top: `${positions[index].top}%` }}
                >
                  <span className="pipeline-node-icon"><Icon size={22} weight="duotone" /></span>
                  <span>{stage.name}</span>
                </div>
              )
            })}
          </div>

          <div className="pipeline-detail" aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeIndex}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="pipeline-proof">{pipelineStages[activeIndex].proof}</span>
                <h3>{pipelineStages[activeIndex].role}</h3>
                <p>{pipelineStages[activeIndex].detail}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <ol className="pipeline-mobile">
          {pipelineStages.map((stage) => {
            const Icon = stage.Icon
            return (
              <motion.li
                key={stage.name}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="pipeline-mobile-icon"><Icon size={22} weight="duotone" /></span>
                <div>
                  <span className="pipeline-proof">{stage.name}</span>
                  <h3>{stage.role}</h3>
                  <p>{stage.detail}</p>
                </div>
              </motion.li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
