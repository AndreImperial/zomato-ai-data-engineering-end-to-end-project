import { useState } from 'react'
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

export function PipelineStory() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="pipeline-story" id="pipeline" aria-labelledby="pipeline-title">
      <div className="pipeline-sticky">
        <div className="section-heading pipeline-heading">
          <h2 id="pipeline-title">How the project was made.</h2>
          <p>Follow the seven handoffs from original files to useful decisions. The active panel explains the build in plain language.</p>
        </div>

        <div className="pipeline-desktop">
          <div className="pipeline-canvas" aria-hidden="true">
            <svg viewBox="0 0 1000 470" preserveAspectRatio="xMidYMid meet">
              <path
                className="pipeline-path-base"
                d="M85 110 H895 Q950 110 950 165 V305 Q950 360 895 360 H150"
              />
              <path
                className="pipeline-path-live"
                d="M85 110 H895 Q950 110 950 165 V305 Q950 360 895 360 H150"
              />
            </svg>

            {pipelineStages.map((stage, index) => {
              const Icon = stage.Icon
              return (
                <button
                  type="button"
                  className={`pipeline-node ${index === activeIndex ? 'is-active' : ''}`}
                  key={stage.name}
                  style={{ left: `${positions[index].left}%`, top: `${positions[index].top}%` }}
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={index === activeIndex}
                >
                  <span className="pipeline-node-icon"><Icon size={22} weight="duotone" /></span>
                  <span>{stage.name}</span>
                </button>
              )
            })}
          </div>

          <div className="pipeline-detail" aria-live="polite">
            <div>
              <span className="pipeline-step">Stage {String(activeIndex + 1).padStart(2, '0')} of 07</span>
              <h3>{pipelineStages[activeIndex].plain}</h3>
              <p>{pipelineStages[activeIndex].detail}</p>
              <strong className="pipeline-output">Result: {pipelineStages[activeIndex].output}</strong>
              <span className="pipeline-proof">Built with {pipelineStages[activeIndex].proof}</span>
            </div>
          </div>
        </div>

        <ol className="pipeline-mobile">
          {pipelineStages.map((stage, index) => {
            const Icon = stage.Icon
            return (
              <li
                key={stage.name}
              >
                <button type="button" className="pipeline-mobile-button" onClick={() => setActiveIndex(index)}>
                  <span className="pipeline-mobile-icon"><Icon size={22} weight="duotone" /></span>
                  <span>
                    <span className="pipeline-step">Stage {String(index + 1).padStart(2, '0')} of 07 · {stage.name}</span>
                    <strong className="pipeline-mobile-title">{stage.plain}</strong>
                    <span className="pipeline-mobile-copy">{stage.detail}</span>
                    <strong className="pipeline-output">Result: {stage.output}</strong>
                  </span>
                </button>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
