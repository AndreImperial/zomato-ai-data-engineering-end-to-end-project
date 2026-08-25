import { useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { dashboardModes } from '../project'

type Mode = (typeof dashboardModes)[number]['id']

function ExecutiveView() {
  return (
    <div className="preview-executive">
      <div className="preview-metrics">
        {[
          ['₹12.4M', 'GMV'],
          ['184.2K', 'Orders'],
          ['94.6%', 'Fulfillment'],
          ['₹673', 'AOV'],
        ].map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <div className="chart-panel">
        <div className="chart-title"><span>GMV trajectory</span><small>weekly</small></div>
        <svg viewBox="0 0 720 250" role="img" aria-label="Illustrative weekly GMV trend">
          <path className="chart-area" d="M0 218 C72 210 90 160 145 175 S250 210 305 135 S410 118 460 145 S565 78 720 42 L720 250 L0 250 Z" />
          <path className="chart-line" d="M0 218 C72 210 90 160 145 175 S250 210 305 135 S410 118 460 145 S565 78 720 42" />
        </svg>
      </div>
    </div>
  )
}

function OperationsView() {
  return (
    <div className="preview-operations">
      <div className="chart-panel scatter-panel">
        <div className="chart-title"><span>Restaurant performance</span><small>rating vs delivery</small></div>
        <div className="scatter" role="img" aria-label="Illustrative restaurant performance scatterplot">
          {[18, 27, 38, 45, 57, 69, 77, 86].map((left, index) => (
            <span key={left} style={{ left: `${left}%`, bottom: `${20 + ((index * 17) % 61)}%`, width: `${12 + (index % 4) * 4}px`, height: `${12 + (index % 4) * 4}px` }} />
          ))}
        </div>
      </div>
      <div className="chart-panel heat-panel">
        <div className="chart-title"><span>Delivery SLA</span><small>P90 by hour</small></div>
        <div className="heatmap" role="img" aria-label="Illustrative delivery SLA heatmap">
          {Array.from({ length: 48 }, (_, index) => <span key={index} style={{ opacity: 0.14 + ((index * 7) % 10) / 12 }} />)}
        </div>
      </div>
    </div>
  )
}

function VoiceView() {
  return (
    <div className="preview-voice">
      <div className="voice-bars" role="img" aria-label="Illustrative review topic and sentiment distribution">
        {[
          ['Food quality', 88],
          ['Delivery', 72],
          ['Service', 58],
          ['Packaging', 43],
          ['Pricing', 35],
        ].map(([label, width]) => (
          <div key={label as string}>
            <span>{label}</span>
            <i style={{ width: `${width}%` }} />
          </div>
        ))}
      </div>
      <div className="voice-callout">
        <span>Leading signal</span>
        <strong>Delivery</strong>
        <p>Flagged issues move customer language into an operating queue.</p>
      </div>
    </div>
  )
}

export function DashboardPreview() {
  const [mode, setMode] = useState<Mode>('executive')
  const reduceMotion = useReducedMotion()
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])

  const handleTabKey = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex: number

    if (event.key === 'ArrowRight') nextIndex = (index + 1) % dashboardModes.length
    else if (event.key === 'ArrowLeft') nextIndex = (index - 1 + dashboardModes.length) % dashboardModes.length
    else if (event.key === 'Home') nextIndex = 0
    else if (event.key === 'End') nextIndex = dashboardModes.length - 1
    else return

    event.preventDefault()
    setMode(dashboardModes[nextIndex].id)
    tabRefs.current[nextIndex]?.focus()
  }

  return (
    <div className="dashboard-preview">
      <div className="preview-toolbar">
        <div>
          <strong>Zomato Pulse</strong>
          <span>Read-only Snowflake marts</span>
        </div>
        <div className="preview-tabs" role="tablist" aria-label="Dashboard preview modes">
          {dashboardModes.map((item) => {
            const Icon = item.Icon
            return (
              <button
                aria-controls={`dashboard-panel-${item.id}`}
                aria-selected={mode === item.id}
                className={mode === item.id ? 'is-active' : ''}
                id={`dashboard-tab-${item.id}`}
                key={item.id}
                onClick={() => setMode(item.id)}
                onKeyDown={(event) => handleTabKey(event, dashboardModes.indexOf(item))}
                ref={(element) => { tabRefs.current[dashboardModes.indexOf(item)] = element }}
                role="tab"
                tabIndex={mode === item.id ? 0 : -1}
                type="button"
              >
                <Icon size={17} weight="duotone" />
                {item.label}
              </button>
            )
          })}
        </div>
      </div>

      <div className="preview-stage">
        {dashboardModes.map((item) => (
          <div
            aria-labelledby={`dashboard-tab-${item.id}`}
            hidden={mode !== item.id}
            id={`dashboard-panel-${item.id}`}
            key={item.id}
            role="tabpanel"
            tabIndex={0}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mode === item.id && (
                <motion.div
                  key={item.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                >
                  {item.id === 'executive' && <ExecutiveView />}
                  {item.id === 'operations' && <OperationsView />}
                  {item.id === 'voice' && <VoiceView />}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      <p className="preview-note">Interface preview with illustrative values. Production views query Snowflake marts.</p>
    </div>
  )
}
