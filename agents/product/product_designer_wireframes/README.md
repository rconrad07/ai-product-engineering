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

- The agent **does not** output raw Excalidraw JSON directly in chat.
- Its responsibility is to emit `product_wireframe_v1` JSON, which is then converted to Excalidraw scene JSON for storage.
- A separate, lightweight tool can:
  - Read the `product_wireframe_v1` JSON artifact.
  - Map screens and elements to Excalidraw shapes.
  - Export an Excalidraw file you can import into the web app.

### CLI converter (`convert_to_excalidraw.js`)

- A simple Node.js script is provided in this folder: `convert_to_excalidraw.js`.
- Usage:

  ```bash
  node agents/product/product_designer_wireframes/convert_to_excalidraw.js \
    workspaces/Initiative_Evals/dermai/product_wireframes.json \
    workspaces/Initiative_Evals/dermai/product_wireframes.excalidraw.json
  ```

- The output file (`*.excalidraw.json`) is directly importable into Excalidraw via **File → Open**.

## Orchestration usage (conceptual)

Typical call sequence:

1. Other product agents (e.g. business analyst) produce a reasonably complete product spec.
2. The orchestrator calls `product_designer_wireframes` with:
   - Product objective and context.
   - Personas / flows / acceptance criteria.
3. This agent returns a single `product_wireframe_v1` JSON artifact.
4. The orchestrator:
   - Stores the `product_wireframe_v1` JSON **inside the corresponding Workspace folder** for the initiative (for example, if inputs came from `workspaces/Initiative_Evals/dermai`, persist the artifact as `workspaces/Initiative_Evals/dermai/product_wireframes.json`).
   - Immediately runs `convert_to_excalidraw.js` to generate an Excalidraw-readable scene file in the same folder, e.g. `product_wireframes.excalidraw.json`.
   - Ensures that all wireframe artifacts (both schema JSON and Excalidraw scene JSON) for an initiative live alongside that initiative’s other artifacts, not in the agent directory.
   - Optionally passes the Excalidraw scene file to any downstream tooling or workflows.

