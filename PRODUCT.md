# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Vite, React, TypeScript, Tailwind CSS v4, Motion, and Phosphor Icons. The portfolio is a static site deployed from an isolated `portfolio/` directory, with Vercel as the primary host.

## Users

Recruiters, hiring managers, and technical interviewers evaluating Andre Imperial's data engineering work. They need to understand the system's scale, architecture, technical judgment, and finished analytics experience quickly.

## Product Purpose

Showcase the completed Zomato AI Data Engineering project as a clear, credible, and memorable end-to-end case study. Success means a first-time visitor understands the pipeline, sees evidence of engineering decisions, and can open the repository or video walkthrough without hunting.

## Positioning

The project demonstrates one governed path from raw food-delivery data to business and AI analytics: S3 ingestion, Snowflake warehouse layers, dbt transformation, Airflow orchestration, Gemini review enrichment, an AI mart, and a Streamlit decision surface.

## Operating Context

The portfolio draws from the repository's SQL, dbt models, Airflow DAG, Gemini enrichment script, Streamlit dashboard, architecture documentation, GitHub repository, and video walkthrough. It does not require a live warehouse connection.

## Capabilities and Constraints

- Present the project overview, architecture, technical decisions, dashboard highlights, challenges and fixes, tech stack, and clear GitHub and video actions.
- Keep the site static, responsive, accessible, and deployable on free hosting.
- Preserve all existing pipeline code and uncommitted work.
- Never expose environment values, credentials, account identifiers, or private infrastructure details.
- Use Gemini for the enrichment stage while accurately distinguishing the separate OpenAI RAG and text-to-SQL utilities.
- Do not fabricate production metrics, testimonials, customers, or dashboard results.

## Brand Commitments

Project-led presentation with Andre Imperial credited in navigation and the closing action. The approved visual direction is Operations Runbook: a precise, recruiter-friendly case file with guided pipeline motion and one Zomato-inspired signal-red accent.

## Evidence on Hand

- Repository README and architecture documentation.
- Seven CSV source groups, 10 million orders, approximately 23 million order items, and 300,000 reviews as documented in the repository.
- Seventeen dbt SQL models and a four-task daily Airflow DAG visible in source.
- Streamlit source implementing KPI cards, city and date filters, trend and ranking charts, restaurant performance, SLA analysis, and AI review insights.
- Public GitHub repository and YouTube walkthrough.
- No current local dashboard screenshots or public Streamlit URL. The existing architecture PNG contains stale OpenAI enrichment labels and must not be used as the primary architecture visual.

## Product Principles

- Lead with evidence, then explain the mechanism.
- Make engineering judgment legible to both technical and non-technical reviewers.
- Use motion to explain data flow, never as decoration.
- Keep every public claim traceable to repository evidence.
- Make the next action obvious without interrupting the case study.

## Accessibility & Inclusion

Meet WCAG AA contrast, preserve full keyboard access, use semantic reading order, provide non-animated equivalents, and collapse the pinned pipeline into a readable vertical sequence on small screens or when reduced motion is requested.
