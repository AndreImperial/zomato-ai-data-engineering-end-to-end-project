---
name: Zomato AI Data Engineering Portfolio
description: An operations-runbook visual system for presenting governed data work with technical clarity.
colors:
  graphite-ground: "#0d1013"
  graphite-surface: "#12171b"
  graphite-raised: "#171d21"
  graphite-soft: "#20272c"
  ink-on-signal: "#090b0d"
  off-white: "#f2f0ea"
  steel-muted: "#a4a9ad"
  steel-faint: "#8e969c"
  steel-seam: "#30363b"
  steel-seam-soft: "#22272b"
  steel-route: "#687279"
  signal-red: "#df3f3b"
  signal-red-deep: "#a92d2b"
  signal-red-hover: "#ed514d"
  signal-red-wash: "#382021"
  signal-red-node: "#241515"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(3.6rem, 6vw, 6rem)"
    fontWeight: 780
    lineHeight: 0.92
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(3rem, 5.7vw, 5.7rem)"
    fontWeight: 720
    lineHeight: 0.95
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(1.6rem, 2.2vw, 2.3rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  node-label:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(0.78rem, 1vw, 1rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "normal"
  body:
    fontFamily: "Manrope, Segoe UI, sans-serif"
    fontSize: "1.04rem"
    fontWeight: 400
    lineHeight: 1.72
    letterSpacing: "normal"
  nav-label:
    fontFamily: "Manrope, Segoe UI, sans-serif"
    fontSize: "0.88rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "normal"
  control-label:
    fontFamily: "Manrope, Segoe UI, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "normal"
  mono-label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.62rem"
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: "0.08em"
  mono-tag:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.78rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "normal"
rounded:
  micro: "4px"
  trace: "5px"
  skip: "8px"
  compact: "10px"
  control: "12px"
  module: "14px"
spacing:
  hairline-gap: "5px"
  xs: "10px"
  sm: "12px"
  md: "16px"
  lg: "20px"
  xl: "24px"
  2xl: "32px"
  3xl: "48px"
  4xl: "64px"
  section-min: "92px"
  section-max: "150px"
components:
  button-primary:
    backgroundColor: "{colors.signal-red}"
    textColor: "{colors.ink-on-signal}"
    typography: "{typography.nav-label}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "48px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.off-white}"
    typography: "{typography.nav-label}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "48px"
  navigation:
    backgroundColor: "rgb(13 16 19 / 0.96)"
    textColor: "{colors.steel-muted}"
    typography: "{typography.nav-label}"
    rounded: "0"
    padding: "0 clamp(20px, 4vw, 64px)"
    height: "68px"
  evidence-cell:
    backgroundColor: "transparent"
    textColor: "{colors.off-white}"
    rounded: "0"
    padding: "28px clamp(18px, 3vw, 44px)"
    height: "150px"
  technical-node:
    backgroundColor: "{colors.graphite-surface}"
    textColor: "{colors.off-white}"
    typography: "{typography.node-label}"
    rounded: "{rounded.trace}"
    padding: "11px 8px 15px"
  pipeline-route:
    backgroundColor: "{colors.graphite-ground}"
    textColor: "{colors.off-white}"
    rounded: "{rounded.module}"
    padding: "0"
  decision-module:
    backgroundColor: "{colors.graphite-surface}"
    textColor: "{colors.off-white}"
    rounded: "{rounded.module}"
    padding: "clamp(28px, 4vw, 52px)"
  dashboard-tab:
    backgroundColor: "transparent"
    textColor: "{colors.steel-muted}"
    typography: "{typography.control-label}"
    rounded: "{rounded.compact}"
    padding: "0 11px"
    height: "38px"
  dashboard-tab-active:
    backgroundColor: "{colors.signal-red-wash}"
    textColor: "{colors.off-white}"
    typography: "{typography.control-label}"
    rounded: "{rounded.compact}"
    padding: "0 11px"
    height: "38px"
  stack-tag:
    backgroundColor: "{colors.graphite-surface}"
    textColor: "{colors.steel-muted}"
    typography: "{typography.mono-tag}"
    rounded: "{rounded.control}"
    padding: "18px 22px"
---

# Design System: Zomato AI Data Engineering Portfolio

## Overview

**Creative North Star: "Operations Runbook"**

This system feels like a finished operating artifact: cool, controlled, inspectable, and built around evidence. Cooler graphite creates the working field; off-white carries conclusions; fine steel seams expose structure; one signal red marks action, active state, and governed movement. The visual language is technical without becoming terminal cosplay and editorial without becoming a magazine layout.

Information is organized as routes, ruled rails, low-radius modules, and asymmetric but disciplined grids. Static content does the explanatory work. Motion is reserved for meaningful state changes and the signature packet that demonstrates data moving through a governed path. The system should always look engineered rather than decorated.

**Key Characteristics:**

- Cooler graphite field with off-white evidence and restrained steel hierarchy.
- One signal-red channel for action, selection, focus, and routed flow.
- Compressed display typography paired with calm body copy and mono annotations.
- Fine seams, ruled evidence rails, sparse dot grids, and low-radius technical modules.
- Semantic icons and SVG routes that explain systems instead of ornamenting them.
- Static reading sections, concentrated functional motion, and an equivalent reduced-motion path.

## Colors

The palette is deliberately narrow: a cool graphite ladder, legible neutral text, steel structure, and a single red signal family.

### Primary

- **Signal Red** (`colors.signal-red`): Primary actions, focus outlines, active routes, data marks, and selected state. It is a scarce operational signal, never an ambient brand wash.
- **Deep Signal Red** (`colors.signal-red-deep`): Selection backgrounds and darker red interaction states where the main signal would be too loud.
- **Signal Hover** (`colors.signal-red-hover`): The brighter response for large primary controls only.

### Neutral

- **Cooler Graphite** (`colors.graphite-ground`): The continuous page field and default canvas.
- **Graphite Surface / Raised / Soft** (`colors.graphite-surface`, `colors.graphite-raised`, `colors.graphite-soft`): A compact tonal ladder for modules, previews, and hover states.
- **Runbook Off-White** (`colors.off-white`): Headlines, primary values, and high-priority labels.
- **Muted Steel / Faint Steel** (`colors.steel-muted`, `colors.steel-faint`): Body support copy and annotations, in that order.
- **Steel Seam / Soft Seam / Route Steel** (`colors.steel-seam`, `colors.steel-seam-soft`, `colors.steel-route`): Dividers, secondary dividers, schematic paths, and technical node outlines.
- **Signal Ink** (`colors.ink-on-signal`): Text and icons placed on signal-red controls.

The shipped pairings provide strong reading contrast: off-white on cooler graphite is 16.74:1, muted steel is 8.05:1, and faint steel is 6.35:1. Signal ink on signal red is 4.61:1. Signal red against the graphite field is 4.46:1, so use it confidently for controls, focus, diagrams, and large emphasis—not as a replacement for small neutral body copy. The terse proof annotation is the existing narrow exception and must not be made smaller or dimmer.

**The One Signal Rule.** Red owns action, active state, focus, exceptions, and live routing; adding a second accent destroys the operational hierarchy.

## Typography

**Display Font:** Barlow Condensed (with Arial Narrow and sans-serif fallbacks)
**Body Font:** Manrope (with Segoe UI and sans-serif fallbacks)
**Label/Mono Font:** JetBrains Mono (with monospace fallback)

**Character:** Barlow Condensed gives evidence the force and density of a control-room headline. Manrope keeps explanations humane and quiet. JetBrains Mono makes sources, coordinates, proof labels, code evidence, and stack names read like machine-verifiable metadata.

### Hierarchy

- **Display** (`typography.display`): Hero-scale proof statements. Keep lines short, balanced, and packed tightly.
- **Headline** (`typography.headline`): Major section conclusions, not generic section labels.
- **Title** (`typography.title`): Module roles, detail headings, and technical decisions.
- **Node Label** (`typography.node-label`): Compressed names inside schematic stages.
- **Body** (`typography.body`): Explanatory copy with a practical maximum line length of 65 characters.
- **Navigation Label** (`typography.nav-label`): Controls, author identity, navigation, and compact outcome labels.
- **Control Label** (`typography.control-label`): Compact tab names and quiet toolbar actions.
- **Mono Label** (`typography.mono-label`): Coordinates, sequence numbers, sources, evidence paths, and disclaimers. Use tabular numerals for metrics.
- **Mono Tag** (`typography.mono-tag`): Technology tags and other compact machine-readable items.

**The Evidence Scale Rule.** The largest type states a verified conclusion; supporting prose explains it; mono text identifies its source or system location.

## Layout

Use a centered content shell capped at 1400px, with full-width ruled rails allowed to break out when cross-screen comparison is the point. The primary shell uses responsive vertical padding from 92px to 150px and horizontal page gutters that grow from 20px to 64px; at mobile widths, gutters settle at 16px. Large statements and technical diagrams may use a wider 1580px frame, while long comparison copy may narrow to 1200px.

Desktop compositions favor explicit grids with asymmetry that communicates priority: roughly 60/40 or 65/35 splits, five-column evidence rails, and mixed-span modules. Keep gaps deliberate and compact inside technical systems, then give major sections substantial separation. Use the documented spacing scale for repeated rhythm rather than introducing near-duplicate values.

Responsive behavior is structural, not a uniform shrink. At 1180px, complex two-column showcases stack and explanatory copy receives the full line length. At 900px, navigation simplifies, horizontal system diagrams become explicit vertical sequences, sticky scrollytelling returns to normal document flow, decision grids become one column, and challenge arrows rotate to preserve reading direction. At 640px, controls become full-width where appropriate, evidence becomes a two-column rail with a final spanning cell, dashboard tabs scroll horizontally, secondary dense visual panels may be omitted, and every layout remains usable from 320px.

**The Ruled Rhythm Rule.** Use spacing for hierarchy and one-pixel seams for evidence relationships; do not solve grouping by placing every block in an isolated card.

**The Explicit Mobile Path Rule.** A routed system must become a visible vertical sequence on small screens; never hide the route or leave users to infer order from wrapped nodes.

## Elevation & Depth

This is a mostly flat system. Depth comes first from tonal graphite layers, one-pixel steel boundaries, inset shading, and the occasional sparse dot grid. Ambient shadows are reserved for dense interactive or illustrative modules that need separation from the page field: the pipeline canvas, its detail panel, decision modules, chart preview, and data marks. Large reading sections and evidence rails stay flat.

The fixed viewport vignette is subtle and global. Module shadows are broad, dark, and low-opacity rather than bright or colored. Never add glass blur, colored glow, glossy highlights, or stacked floating elevations.

### Shadow Vocabulary

- **Viewport Vignette** (`shadows.viewport-vignette`): Fixed inset edge density for the graphite field.
- **Pipeline Instrument** (`shadows.pipeline-instrument`): Combined inset and ambient depth for the routed canvas.
- **Module Ambient** (`shadows.module-ambient`): Low separation for large decision modules.
- **Detail Ambient** (`shadows.detail-ambient`): Focused separation for the active route explanation.
- **Preview Ambient** (`shadows.preview-ambient`): The strongest allowed shadow, reserved for dense dashboard previews.
- **Data Mark** (`shadows.data-mark`): Local lift for plotted marks, never for decorative dots.

**The Structural Depth Rule.** A surface earns shadow only when it behaves like an instrument, preview, or focused operating module; ordinary content relies on seams and tonal contrast.

## Shapes

The form language is rectilinear with restrained rounding. Major operating modules use the module radius; primary controls and metric panels use the control radius; compact tabs use the compact radius. Schematic nodes deliberately tighten to the trace radius, and tiny heatmap cells use the micro radius. Full-width rails and major section boundaries remain square.

Borders are fine and cool: one-pixel steel seams for structure, brighter route steel for diagram nodes, and signal red only for active routing or focus. Circles are reserved for packets, route junctions, scatter marks, and icon geometry. Avoid pills unless the content is intrinsically a compact status or control.

**The Low-Radius Rule.** Keep the silhouette technical and restrained: square rails, tight schematic nodes, and modestly rounded operating modules.

## Components

### Buttons

- **Shape:** Compact rounded rectangle (`rounded.control`) with a 48px minimum height; never capsule-like.
- **Primary:** Signal-red field, signal-ink label, semibold Manrope, and 20px inline padding. Hover brightens and lifts 2px; active presses 1px and scales to 0.985.
- **Secondary:** Transparent field with a steel border. Hover strengthens the border, adds a graphite surface, and lifts 2px.
- **Focus:** A 2px signal-red outline offset by 4px. Focus remains visible independently of hover.

### Navigation

Use a 68px sticky graphite bar with a one-pixel lower seam, strong author label, muted centered links, and a compact red repository action. Links reveal a red underline on hover. Below 900px, remove the center link group rather than compressing it; below 640px, reduce the bar to 62px and tighten the action.

### Evidence Rails

Evidence cells are flat and separated by steel rules. Each cell combines a red semantic icon, a large condensed tabular value, a plain-language label, a short ruled mark, and a mono source. The grammar is icon → result → label → provenance, with no decorative badges or unverified values.

### Cards / Containers

- **Corner Style:** Major modules use `rounded.module`; dense subpanels use `rounded.control`; schematic nodes use `rounded.trace`.
- **Background:** Choose one step from the graphite surface ladder. Red-tinted panels are reserved for active or exception states.
- **Shadow Strategy:** Flat by default; use the structural elevation vocabulary only for instrument-like modules.
- **Border:** Prefer a one-pixel steel seam when relationships or bounds matter.
- **Internal Padding:** 22–32px for compact modules and up to 52px for large decision modules.

### Dashboard Tabs

Tabs are real buttons in a semantic tablist with roving focus. The default state is muted on transparent; hover uses graphite soft; active uses the dark signal wash with off-white text. Keep the 38px control height, icon-plus-label pairing, arrow-key navigation, Home/End support, and visible focus.

### Signature Pipeline Route

The signature grammar is a semantic SVG route beneath positioned technical nodes, with a steel base path, signal-red live path, and a ringed red packet. On desktop, scroll progress draws the route and moves the packet through fixed stage coordinates while an adjacent live region updates. The spring is controlled rather than bouncy. On mobile or under reduced motion, replace the performance with a normal-flow ordered list and a continuous vertical red rail; all stages and details remain available.

**The Routed Motion Rule.** Animate causality—packet position, active handoff, selected panel, and control response—not ambient page content.

### Iconography

Use Phosphor icons with semantic subjects and consistent weights: duotone for systems and evidence, fill for familiar brand or media controls, and bold for directional actions. Control icons sit around 16–24px; evidence and hero-system icons may reach 34–40px. Inline SVG owns charts, routes, and connector geometry because those marks encode relationships. Decorative SVG paths stay hidden from assistive technology; explanatory graphics receive concise labels.

### Motion Grammar

Micro-interactions use 180–280ms transitions. Entrances use 450–700ms fades with short vertical travel and the system ease-out curve; stagger only tightly related elements. Dashboard panel changes use a 250ms crossfade/vertical shift. The scroll-linked packet uses a damped spring and deterministic route stops. Static content sections do not receive reveal choreography.

### Accessibility Contract

Preserve semantic headings and reading order, a keyboard-visible skip link, 2px focus outlines with 4px offset, semantic links and buttons, labeled diagrams, and keyboard-complete tabs. Do not communicate status by red alone: pair it with text, border, position, icon, or route progress. Respect `prefers-reduced-motion` by removing smooth scrolling, collapsing sticky story height, completing the route, showing all nodes as available, and reducing transitions to effectively instant.

## Do's and Don'ts

### Do:

- **Do** start with the cooler graphite field, off-white evidence, and steel structure before introducing signal red.
- **Do** use Barlow Condensed for conclusions, Manrope for explanation, and JetBrains Mono for provenance.
- **Do** keep content modules low-radius, technically aligned, and connected by seams or explicit routes.
- **Do** make icons, charts, labels, and motion explain system state or evidence.
- **Do** preserve the vertical ordered pipeline and normal document flow for mobile and reduced-motion users.
- **Do** keep public values traceable and clearly label illustrative dashboard data.

### Don't:

- **Don't** add a second accent, multicolor data palette, neon glow, or warm charcoal cast.
- **Don't** use glassmorphism, blurred translucent panels, glossy gradients, or decorative ambient light.
- **Don't** turn every section into a rounded card, pill every control, or soften the system into generic SaaS UI.
- **Don't** add stock photography, abstract blobs, mascots, or decorative icons that do not carry meaning.
- **Don't** animate ordinary reading sections, create perpetual motion, or make understanding depend on scroll choreography.
- **Don't** collapse, reorder, or hide the governed path on narrow screens.
- **Don't** use signal red for paragraphs or low-contrast small copy; keep neutral text in the steel/off-white hierarchy.
