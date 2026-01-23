<!--
Template Name: Prioritization Guide
Source: Confluence
Owner: Product
Version: v1.0
Last Updated: 2026-01-23
-->

**Purpose:**  
Standardize **relative priority assignment**.

**Used by agents:**

- Read-only reference
- Used for rationale, not enforcement

**Agent behavior rules:**

- Must map reasoning to one of:
  - Highest / High / Medium / Low / Lowest
- Must justify using guide language
- Must not reorder Jira automatically

---

# AGENT OUTPUT:
## Purpose
This guide defines how an AI agent should prioritize Jira tickets within like-themes or the same project, using a standardized set of priority levels: **Highest, High, Medium, Low, Lowest**.

## Key Considerations
1. **Return on Investment (ROI)**  
   - Prioritize tickets that deliver the greatest value relative to effort.

2. **Existing Team Capacity (Story Points)**  
   - Consider the team’s current workload; avoid overcommitting.

3. **Future Team Capacity (Backlog Health)**  
   - Ensure the backlog is healthy and tickets are ready to be worked on.

4. **Existing Priorities**  
   - Respect any pre-established or urgent priorities.

5. **Resource Availability**  
   - Account for the availability of required skills or team members.

## Prioritization Process

### 1. Score Each Ticket
Assign a score (1–5) for each consideration:

- **ROI:** 1 (low) to 5 (high)  
- **Team Capacity Fit:** 1 (over capacity) to 5 (well within capacity)  
- **Backlog Health:** 1 (blocked/unready) to 5 (ready/clear path)  
- **Existing Priority:** 1 (not prioritized) to 5 (top priority)  
- **Resource Availability:** 1 (unavailable) to 5 (fully available)

### 2. Calculate Composite Score
Sum the scores for each ticket (minimum 5, maximum 25).

### 3. Map Composite Score to Priority Level

| Composite Score | Suggested Priority Level |
| -------------- | ------------------------ |
| 22–25          | Highest                  |
| 18–21          | High                     |
| 13–17          | Medium                   |
| 8–12           | Low                      |
| 5–7            | Lowest                   |

- **Highest:** Must be addressed immediately; critical business impact.  
- **High:** Important and should be addressed soon; significant value or risk.  
- **Medium:** Valuable but not urgent; address after higher priorities.  
- **Low:** Minor impact; can be scheduled for later.  
- **Lowest:** Minimal impact; lowest priority for planning.

### 4. Output
- Categorize each ticket that the AI agent is able to prioritize into the suggested priority level (**Highest, High, Medium, Low, Lowest**).  
- If there is not sufficient information to estimate the priority, create a separate section for those tickets.

## Example

| Ticket | ROI | Team Capacity | Backlog Health | Existing Priority | Resource Availability | Composite Score | Suggested Priority |
| ------ | --- | -------------| -------------- | ----------------- | --------------------- | --------------- | ------------------ |
| A      | 5   | 4            | 5              | 5                 | 4                     | 23              | Highest            |
| B      | 3   | 3            | 3              | 3                 | 3                     | 15              | Medium             |
| C      | 1   | 2            | 2              | 1                 | 2                     | 8               | Low                |

## Additional Notes
- This guide provides a baseline; additional factors (e.g., regulatory deadlines, customer commitments) may be incorporated as needed.  
- The AI agent should flag tickets with insufficient information for human review. Do not prioritize tickets without sufficient information.
---
## Template Enforcement Rules

- You must not modify template structure.
- You must not rename sections.
- If a section cannot be completed, leave it blank and explain why.
- You must not remove placeholders.
- You must respect the template version provided.
