# workspaces

Purpose
- Shared project state: where agents read and write artifacts during runs.
- Centralized storage for intermediate outputs, experiment data, and persisted artifacts needed by multiple agents.

What belongs here
- Per-project or per-run folders that store artifacts (JSON, CSV, model checkpoints, reports).
- README or index files describing the workspace layout for each project.

Suggested layout
- /workspaces/<project>/
  - artifacts/
  - runs/
  - experiments/
  - meta.json (optional manifest for runs and artifacts)

Best practices
- Treat workspaces as ephemeral for long-running experiments but persistent enough for reproducibility.
- Use clear artifact naming conventions and a manifest to track provenance.
- Add workspace-level .gitignore entries to avoid committing large or binary files into Git.
