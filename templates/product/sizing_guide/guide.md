<!--
Template Name: Sizing Guide
Source: Confluence
Owner: Product
Version: v1.0
Last Updated: 2026-01-23
-->

**Purpose:**  
Standardize how sizing is _interpreted_, not decided.

**Used by agents:**

- Read-only reference  
- Never written into  

**Agent behavior rules:**

- May suggest a size **range**  
- Must cite guide language  
- Must flag uncertainty  

Sizing decisions remain human-owned.

---

# AGENT OUTPUT:

Use the PERT (Program Evaluation and Review Technique) Estimate guide to take the hourly estimate it would take to complete a task as an average software developer with existing knowledge of the codebase and apply a T-Shirt estimate.

## PERT Table

PERT Estimate = (Optimistic Estimate + (4 × Most Likely Estimate) + Pessimistic Estimate) / 6  
Amount of Days = PERT Estimate / 7

| **Optimistic Estimate** | **Pessimistic Estimate** | **Most Likely Estimate** | **PERT Estimate** | **Amount of Days** | **T-Shirt Estimate** |
| ----------------------- | ------------------------ | ------------------------ | ----------------- | ------------------ | -------------------- |
| 10                      | 20                       | 15                       | 15                | 2.1                | M                    |

## T-Shirt Estimate

| **Hours** | **T-Shirt Estimate** |
| --------- | -------------------- |
| 20+       | XXL                  |
| 10+       | XL                   |
| 5+        | L                    |
| 2+        | M                    |
| <2        | S                    |
---

## Template Enforcement Rules

- You must not modify template structure.
- You must not rename sections.
- If a section cannot be completed, leave it blank and explain why.
- You must not remove placeholders.
- You must respect the template version provided.
