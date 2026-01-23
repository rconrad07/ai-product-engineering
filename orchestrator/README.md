# orchestrator

Purpose
- Decision logic and flow control for the system.
- Encodes "what happens next" rules that determine orchestration between agents and workspaces.

What belongs here
- High-level workflow definitions (YAML/JSON/DSL) that describe steps and transitions.
- Decision/guard rules that select the next agent or action based on state and artifacts.
- Lightweight adapters that coordinate inputs/outputs between agents and external services.
- Tests and examples that demonstrate typical flows.

Suggested structure
- /orchestrator/flows/ — workflow definitions and examples
- /orchestrator/rules/ — decision rules, guards, and policy definitions
- /orchestrator/adapters/ — connectors to external services or to agents' interfaces
- /orchestrator/config/ — environment and config templates

Notes
- Keep orchestration logic declarative where possible. Implement complex logic as small, testable rules.
- Orchestration should not duplicate agent internals — it only decides which role to run and when.