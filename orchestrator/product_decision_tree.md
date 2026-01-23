# Product Orchestrator Decision Tree

## Step 1: Classify Request
IF request references:
- business case, customer problem, outcome → Initiative
- large deliverable broken into chunks → Epic
- refinement or clarification → Discovery
ELSE → Escalate to human

## Step 2: Select Template
- Initiative → Initiative Template
- Epic → Epic Template
- Sizing → Sizing Guide
- Prioritization → Prioritization Guide

## Step 3: Assign Agents
Initiative:
- Problem, Goals, Metrics → Product Business Analyst
- High-level Solution → Product Solutions Architect
- Competitive Landscape → Product Market Analyst

Epic:
- Scope & Breakdown → Product Business Analyst
- Dependencies & Risks → Product Solutions Architect

## Step 4: External Research Handling
IF Competitive Market Analyst is invoked:
- Expect external sources
- Require citations
- Flag for human verification

## Step 5: Workspace Enforcement
- Create /workspaces/<task-name>/
- Write all outputs to workspace
- No publishing allowed

## Step 6: Human Review Gate
- All tasks require approval
- External research requires verification
- Missing inputs must be resolved

## Step 7: Completion
- Mark task “Draft Complete”
- Ready for export to Jira/Confluence
