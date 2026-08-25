import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  BracketsCurly,
  ChatCenteredText,
  CheckCircle,
  ClockCountdown,
  Database,
  GitBranch,
  GithubLogo,
  LockKey,
  Play,
  ShieldCheck,
  ShoppingBagOpen,
} from '@phosphor-icons/react'
import { DashboardPreview } from './components/DashboardPreview'
import { PipelineStory } from './components/PipelineStory'
import { challengeFixes, decisions, metrics, pipelineStages, stack } from './project'

const githubUrl = 'https://github.com/AndreImperial/zomato-ai-data-engineering-end-to-end-project'
const videoUrl = 'https://youtu.be/kYwaNMQ3XT8?si=Ge8ilVxkmGQS6iIg'
const metricIcons = [Database, ShoppingBagOpen, ChatCenteredText, GitBranch, ClockCountdown]

function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>
}

function HeroTrace() {
  const reduceMotion = useReducedMotion()
  return (
    <div className="hero-trace" aria-label="Pipeline from Amazon S3 to Streamlit">
      <svg className="hero-trace-schematic" viewBox="0 0 900 380" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 54H170V130H330V34H520" />
        <path d="M900 72H760V148H610V286H430" />
        <path d="M40 332H260V264H520V338H850" />
        <path d="M115 0V92M356 0V62M690 380V304M808 380V250" />
      </svg>
      <div className="hero-stage-row">
        {pipelineStages.map((stage, index) => {
          const Icon = stage.Icon
          return (
            <motion.div
              className="hero-trace-node"
              key={stage.name}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.26 + index * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <small>{String(index + 1).padStart(2, '0')}</small>
              <strong>{stage.name}</strong>
              <span><Icon size={34} weight="duotone" /></span>
            </motion.div>
          )
        })}
      </div>
      <div className="hero-route-rail" aria-hidden="true">
        {pipelineStages.map((stage) => <span key={stage.name} />)}
      </div>
      <div className="trace-coordinates" aria-hidden="true">
        <span>RAW.INGEST</span><span>MODELED.CORE</span><span>INSIGHT.SURFACE</span>
      </div>
    </div>
  )
}

function App() {
  const reduceMotion = useReducedMotion()

  return (
    <>
      <a className="skip-link" href="#main">Skip to project</a>
      <header className="site-header">
        <a className="author" href="#overview">Andre Imperial</a>
        <nav aria-label="Primary navigation">
          <a href="#pipeline">Pipeline</a>
          <a href="#decisions">Decisions</a>
          <a href="#dashboard">Dashboard</a>
        </nav>
        <a className="nav-cta" href={githubUrl} target="_blank" rel="noreferrer">
          <GithubLogo size={18} weight="fill" /> View GitHub
        </a>
      </header>

      <main id="main">
        <section className="hero" id="overview">
          <div className="hero-copy">
            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              10M orders. One governed path to insight.
            </motion.h1>
            <motion.p
              className="hero-summary"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.6 }}
            >
              Zomato AI Data Engineering is a production-style platform across S3, Snowflake, dbt, Airflow, Gemini, and Streamlit.
            </motion.p>
            <motion.div
              className="hero-actions"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, duration: 0.55 }}
            >
              <a className="button button-primary" href={githubUrl} target="_blank" rel="noreferrer">
                View GitHub <GithubLogo size={19} weight="fill" />
              </a>
              <a className="button button-secondary" href={videoUrl} target="_blank" rel="noreferrer">
                <Play size={18} weight="fill" /> Watch walkthrough
              </a>
            </motion.div>
          </div>
          <HeroTrace />
        </section>

        <section className="evidence" aria-label="Verified project scale">
          {metrics.map((metric, index) => {
            const MetricIcon = metricIcons[index]
            return (
              <div key={metric.label}>
                <MetricIcon className="evidence-icon" size={40} weight="duotone" aria-hidden="true" />
                <div className="evidence-value">
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                  <i aria-hidden="true" />
                  <small>{metric.source}</small>
                </div>
              </div>
            )
          })}
        </section>

        <section className="project-brief section-shell">
          <Reveal className="brief-statement">
            <h2>Built as a system, not a notebook.</h2>
            <p>Raw delivery data becomes tested warehouse models, structured customer signals, and an operating dashboard through one scheduled path.</p>
          </Reveal>
          <Reveal className="brief-facts">
            <div><ShieldCheck size={24} weight="duotone" /><span>Keyless S3 access</span></div>
            <div><CheckCircle size={24} weight="duotone" /><span>dbt tests in the build graph</span></div>
            <div><LockKey size={24} weight="duotone" /><span>Read-only analytics surface</span></div>
            <div><BracketsCurly size={24} weight="duotone" /><span>Structured AI output</span></div>
          </Reveal>
        </section>

        <PipelineStory />

        <section className="decisions section-shell" id="decisions" aria-labelledby="decisions-title">
          <Reveal className="section-heading">
            <h2 id="decisions-title">Engineering decisions that held under load.</h2>
            <p>The important choices reduced credentials, rebuild cost, orchestration ambiguity, and AI drift.</p>
          </Reveal>
          <div className="decision-grid">
            {decisions.map((decision, index) => (
              <Reveal className={`decision-item decision-${index + 1}`} key={decision.title}>
                <h3>{decision.title}</h3>
                <strong>{decision.choice}</strong>
                <p>{decision.reason}</p>
                <code>{decision.evidence}</code>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="dashboard-section section-shell" id="dashboard" aria-labelledby="dashboard-title">
          <Reveal className="dashboard-copy">
            <h2 id="dashboard-title">The warehouse ends in decisions.</h2>
            <p>Zomato Pulse brings demand, restaurant execution, delivery friction, and customer language into one read-only surface.</p>
            <ul>
              <li>City and date filters with prior-period deltas</li>
              <li>Restaurant performance and delivery SLA analysis</li>
              <li>AI review topics, sentiment, and flagged issues</li>
            </ul>
          </Reveal>
          <Reveal className="dashboard-visual">
            <DashboardPreview />
          </Reveal>
        </section>

        <section className="challenges section-shell" id="challenges" aria-labelledby="challenges-title">
          <Reveal className="section-heading">
            <h2 id="challenges-title">What broke, and what fixed it.</h2>
            <p>The strongest portfolio evidence is the reasoning behind the clean final graph.</p>
          </Reveal>
          <div className="challenge-list">
            {challengeFixes.map((item) => (
              <Reveal className="challenge-row" key={item.challenge}>
                <div>
                  <span>Challenge</span>
                  <p>{item.challenge}</p>
                </div>
                <ArrowRight size={24} weight="bold" aria-hidden="true" />
                <div>
                  <span>Fix</span>
                  <p>{item.fix}</p>
                  <strong>{item.outcome}</strong>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="stack-section section-shell" id="stack" aria-labelledby="stack-title">
          <Reveal className="section-heading">
            <h2 id="stack-title">One stack, end to end.</h2>
            <p>Gemini powers enrichment. OpenAI supports the separate RAG and text-to-SQL utilities.</p>
          </Reveal>
          <div className="stack-track" aria-label="Technology stack">
            {stack.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
        </section>

        <section className="closing section-shell">
          <Reveal>
            <h2>Inspect the implementation.</h2>
            <div className="closing-actions">
              <a className="button button-primary" href={githubUrl} target="_blank" rel="noreferrer">
                View GitHub <ArrowUpRight size={19} weight="bold" />
              </a>
              <a className="text-link" href={videoUrl} target="_blank" rel="noreferrer">
                Watch walkthrough <Play size={16} weight="fill" />
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer>
        <span>Independent educational project. Not affiliated with Zomato.</span>
        <span>Static portfolio. No credentials or live warehouse access.</span>
      </footer>
    </>
  )
}

export default App
