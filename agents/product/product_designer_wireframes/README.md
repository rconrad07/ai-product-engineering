# Product Wireframe Designer (`product_designer_wireframes`)

This agent turns product specs into a **structured wireframe specification** that can be converted into Excalidraw drawings or other visual diagrams by a later tool.

## Wireframe schema → Excalidraw mapping (conceptual)

The agent emits a `product_wireframe_v1` JSON artifact (see `metadata.json`). It is intentionally simple so a small script can transform it into Excalidraw JSON:

- **Screens → Scenes or groups**
  - Each `screen` in `screens[]` can map to:
    - A separate Excalidraw scene, or
    - A grouped set of elements inside a larger canvas.
  - `screen.name` and `screen.goal` become:
    - A title text element at the top of the screen, or
    - Metadata used only in your orchestration layer.

- **Elements → Shapes**
  - Each `element` becomes one or more Excalidraw shapes:
    - `button`, `input`, `textarea`, `card`, `modal`, `list`, `image-placeholder` → rectangular shapes with a text label.
    - `navbar`, `tab` → horizontal groups of rectangles and text.
    - `checkbox`, `radio-group` → small rectangles/circles with labels.
  - The script can map `element.type` to:
    - Shape kind (`rectangle`, `ellipse`, `text`, etc.).
    - Basic styling presets (border, fill, font size).

- **Coordinates → Positions**
  - `x`, `y`, `width`, `height` are **grid coordinates** on a 12x12 layout.
  - A script can translate grid units to pixels, e.g. 1 grid column = 100 px.
  - This keeps the agent token usage low while still encoding relative layout.

- **States and Notes**
  - `state` (e.g. `error`, `disabled`) can:
    - Influence styling (e.g. red border for error) in the converter.
  - `notes` can:
    - Become small text annotations near the element, or
    - Be stored as metadata only.

## Excalidraw integration strategy (v1)

- The agent **never** outputs raw Excalidraw JSON.
- Its only responsibility is to emit `product_wireframe_v1` JSON.
- A separate, lightweight tool can later:
  - Read the JSON artifact.
  - Map screens and elements to Excalidraw shapes.
  - Export an Excalidraw file you can import into the web app.

## Orchestration usage (conceptual)

Typical call sequence:

1. Other product agents (e.g. business analyst) produce a reasonably complete product spec.
2. The orchestrator calls `product_designer_wireframes` with:
   - Product objective and context.
   - Personas / flows / acceptance criteria.
3. This agent returns a single `product_wireframe_v1` JSON artifact.
4. The orchestrator:
   - Stores the JSON with the initiative.
   - Optionally passes it to a future `excalidraw_export` tool or script.

