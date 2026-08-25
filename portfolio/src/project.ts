import type { Icon } from '@phosphor-icons/react'
import {
  AirplaneTilt,
  Brain,
  ChartLineUp,
  CloudArrowUp,
  Database,
  FlowArrow,
  Stack,
} from '@phosphor-icons/react'

export type ProjectMetric = {
  value: string
  label: string
  source: string
}

export type PipelineStage = {
  name: string
  role: string
  plain: string
  detail: string
  output: string
  proof: string
  Icon: Icon
}

export type TechnicalDecision = {
  title: string
  choice: string
  reason: string
  evidence: string
}

export type ChallengeFix = {
  challenge: string
  fix: string
  outcome: string
}

export const metrics: ProjectMetric[] = [
  { value: '10M', label: 'orders', source: 'warehouse facts' },
  { value: '~23M', label: 'order items', source: 'warehouse facts' },
  { value: '300K', label: 'reviews', source: 'raw source' },
  { value: '17', label: 'dbt models', source: 'repository' },
  { value: '4', label: 'Airflow tasks', source: 'daily DAG' },
]

export const pipelineStages: PipelineStage[] = [
  {
    name: 'Amazon S3',
    role: 'Land seven source groups',
    plain: 'Collect the raw delivery files',
    detail: 'Food-delivery CSVs enter a raw data lake with one folder per source table.',
    output: 'A durable landing zone for the original files.',
    proof: '7 source folders',
    Icon: CloudArrowUp,
  },
  {
    name: 'Snowflake RAW',
    role: 'Load without stored cloud keys',
    plain: 'Put the files in a reliable warehouse',
    detail: 'A Snowflake storage integration assumes an AWS IAM role before COPY INTO loads immutable raw tables.',
    output: 'Raw tables that can be reloaded without exposing passwords or keys.',
    proof: 'keyless storage integration',
    Icon: Database,
  },
  {
    name: 'dbt Silver / Gold',
    role: 'Clean, model, and test',
    plain: 'Turn messy files into trusted tables',
    detail: 'Staging views normalize source data. Dimensions, incremental facts, and marts answer business questions.',
    output: 'Tested tables for orders, restaurants, delivery, and reviews.',
    proof: '17 SQL models',
    Icon: Stack,
  },
  {
    name: 'Apache Airflow',
    role: 'Run one governed sequence',
    plain: 'Run every step in the right order',
    detail: 'The daily DAG reloads raw data, builds core models, enriches reviews, and then builds the AI mart.',
    output: 'A repeatable daily workflow instead of a manual checklist.',
    proof: '4 ordered tasks',
    Icon: FlowArrow,
  },
  {
    name: 'Gemini enrichment',
    role: 'Structure customer language',
    plain: 'Read customer reviews at scale',
    detail: 'Gemini classifies sentiment, score, topic, and key issue as deterministic JSON for new reviews only.',
    output: 'Consistent labels that make thousands of reviews easier to analyze.',
    proof: 'idempotent enrichment',
    Icon: Brain,
  },
  {
    name: 'AI mart',
    role: 'Model AI output like data',
    plain: 'Connect review themes to the business',
    detail: 'dbt joins enriched review labels back to review and restaurant context in a queryable insights mart.',
    output: 'One analysis-ready table linking customer voice to restaurants and operations.',
    proof: 'mart_review_insights',
    Icon: Database,
  },
  {
    name: 'Streamlit',
    role: 'Turn marts into decisions',
    plain: 'Make the results easy to use',
    detail: 'A read-only dashboard exposes demand, delivery, restaurant performance, and customer voice.',
    output: 'A decision surface for trends, service levels, and review issues.',
    proof: '3 analysis views',
    Icon: ChartLineUp,
  },
]

export const decisions: TechnicalDecision[] = [
  {
    title: 'Keyless cloud access',
    choice: 'Snowflake storage integration plus an AWS IAM role',
    reason: 'The warehouse can read the S3 landing zone without long-lived access keys in project code.',
    evidence: 'snowflake/02_storage_integration.sql',
  },
  {
    title: 'Incremental warehouse facts',
    choice: 'dbt MERGE for orders and order items',
    reason: 'Large facts process only new records on reruns instead of rebuilding tens of millions of rows.',
    evidence: 'fct_orders.sql + fact_order_items.sql',
  },
  {
    title: 'AI as a transformation step',
    choice: 'Structured Gemini JSON written back to Snowflake',
    reason: 'Sentiment and topic become governed columns that dbt can test, join, and aggregate.',
    evidence: 'ai/enrich_reviews.py',
  },
  {
    title: 'Separate core and AI builds',
    choice: 'Airflow runs dbt core, enrichment, then the tagged AI mart',
    reason: 'The AI-dependent mart never builds before its source table has been updated.',
    evidence: 'airflow/dags/zomato_batch.py',
  },
]

export const challengeFixes: ChallengeFix[] = [
  {
    challenge: 'Snowflake IAM trust is a two-sided handshake, and replacing the integration regenerates its external ID.',
    fix: 'Create the IAM role, inspect Snowflake identifiers, then finalize the trust policy without recreating the integration.',
    outcome: 'Keyless S3 reads with an explicit, repeatable setup order.',
  },
  {
    challenge: 'A full rebuild of 10M orders and roughly 23M line items would turn every rerun into unnecessary work.',
    fix: 'Materialize both facts incrementally with unique keys, MERGE strategy, and schema-change handling.',
    outcome: 'Reruns process new facts while preserving the modeled history.',
  },
  {
    challenge: 'LLM enrichment can duplicate spend and labels when an orchestration job is retried.',
    fix: 'Select only review IDs absent from the enrichment table and cap each batch.',
    outcome: 'Retry-safe AI work with a bounded cost surface.',
  },
  {
    challenge: 'Natural-language warehouse access creates an obvious write-risk if generated SQL is executed blindly.',
    fix: 'Run text-to-SQL through a SELECT-only guard under the constrained dbt role.',
    outcome: 'Self-service exploration without granting mutation access.',
  },
]

export const stack = [
  'Python',
  'Pandas',
  'Amazon S3',
  'Snowflake',
  'dbt',
  'Apache Airflow',
  'Gemini',
  'OpenAI',
  'Streamlit',
  'Docker',
]

export const dashboardModes = [
  { id: 'executive', label: 'Executive pulse', Icon: ChartLineUp },
  { id: 'operations', label: 'Operations', Icon: AirplaneTilt },
  { id: 'voice', label: 'Customer voice', Icon: Brain },
] as const
