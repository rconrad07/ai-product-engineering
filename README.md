# ai-product-engineering
Product and Engineering agents

---

## What This Repo Does

**ai-product-engineering** is a **multi-agent product-engineering system**. It defines:

- **Orchestration** — how to run workflows and choose agents
- **Agents** — role prompts and rules (no code)
- **Templates** — Initiative, Epic, sizing, prioritization
- **Workspaces** — where agents read/write artifacts
- **Evals** — how to judge agent outputs

### How It Works

1. **You send a product request** (e.g. “define an initiative for X”, “break down this epic”).

2. **The Product Orchestrator**:
   - Classifies the request (Initiative, Epic, Discovery, etc.) via a decision tree
   - Picks a template (Initiative, Epic, Sizing Guide, Prioritization Guide)
   - Assigns template sections to the right agents

3. **Three product agents** fill their sections:
   - **Product Business Analyst (Jr)** — problem, goals, metrics, scope, requirements, acceptance criteria
   - **Product Solutions Architect (Conceptual)** — high-level constraints, dependencies, technical risks (including PCI-DSS, ADA/WCAG)
   - **Product Market / Competitive Analyst** — competitors and market context, **with external research and citations**

4. **Orchestrator**:
   - Runs agents (in sequence or parallel as needed)
   - Writes everything into `/workspaces`
   - **Never exports to Confluence/Jira** until a human approves
   - Flags when the Market Analyst used external research so it can be verified

5. **Human review** is required before anything is published or used to create Epics.

### Design Choices

- **Orchestrator does not generate content** — it only routes and coordinates.
- **Agents are junior-style** — they don’t approve, change scope, or invent requirements; they flag gaps.
- **Templates are fixed** — agents only fill sections; structure comes from templates.
- **External research is cited** — Market Analyst must cite sources; those outputs are explicitly flagged for verification.

### Supporting Pieces

- **Templates** — Confluence-style Initiative and Epic templates (RICE, scope, milestones, sign-offs, etc.).
- **State** — `product_state_schema` and `project_state` track objective, task type, template, agents used, artifacts, and approval.
- **Evals** — criteria for template compliance, factual integrity, citations, scope discipline, and human edit rate.

### TL;DR

This is a **product-documentation workflow**: you describe a product ask, the system routes it through specialized agents, fills structured templates, and stores drafts in workspaces—all gated by human approval before Confluence/Jira.
