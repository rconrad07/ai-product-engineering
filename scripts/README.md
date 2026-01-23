# scripts

Purpose
- Entry points for running or interacting with the system (manual for now).
- Later: place for GitHub Actions hooks and CI/CD integration scripts.

What belongs here
- Short executable scripts that perform manual operations (start a flow, run an agent locally, collect artifacts).
- Small helper scripts used by developers (formatters, validators, workspace initializers).

Suggested layout
- /scripts/start_flow.sh
- /scripts/run_agent.sh
- /scripts/init_folders.sh

How to use (manual)
- Executables should be POSIX-compliant where possible and documented with a usage header.
- Mark scripts executable (chmod +x) and document required environment variables in the script header.

Future
- When automating, move action-specific wrappers into .github/workflows and keep reusable helpers here.
