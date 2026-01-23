# agents

Purpose
- One folder per role. Each agent folder contains the agent's prompt and constraints only.
- Agents are role descriptions (prompts + constraints) rather than full runtime implementations.

What belongs in each agent folder
- prompt.txt (or prompt.md): the full prompt describing the role, expected behavior, and example interactions.
- constraints.md: explicit constraints, safety checks, allowed/disallowed actions, and resource limits.
- metadata.json (optional): input/output contract (expected artifact names, formats), version, owner.

Suggested layout
- /agents/<role>/
  - prompt.md
  - constraints.md
  - metadata.json (optional)
  - README.md (short summary of role and expected artifacts)

Design guidance
- Keep prompts and constraints small and focused on the role's responsibilities.
- Do NOT include implementation code, credentials, or large binaries in agent folders.
- Make expected inputs/outputs explicit so orchestrator rules can route artifacts correctly.
