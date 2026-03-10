#!/usr/bin/env node

/**
 * Simple CLI to convert a `product_wireframe_v1` artifact
 * into an Excalidraw scene JSON that can be imported at
 * `https://excalidraw.com` (File → Open).
 *
 * Usage:
 *   node convert_to_excalidraw.js input_wireframes.json output_scene.excalidraw.json
 */

const fs = require("fs");
const path = require("path");

if (process.argv.length < 4) {
  console.error("Usage: node convert_to_excalidraw.js <input.json> <output.json>");
  process.exit(1);
}

const inputPath = process.argv[2];
const outputPath = process.argv[3];

function readWireframes(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw);
}

function randomId() {
  return Math.random().toString(36).slice(2, 10);
}

function now() {
  return Date.now();
}

/**
 * Map 12x12 grid coords to pixel space.
 * These are layout hints, not exact UI.
 */
const COLS = 12;
const ROWS = 12;
const COL_WIDTH = 120; // px
const ROW_HEIGHT = 80; // px

function gridToPixels(x, y, width, height, screenIndex) {
  // Stack screens vertically with spacing
  const screenOffsetY = screenIndex * (ROWS * ROW_HEIGHT + 200);
  return {
    x: x * COL_WIDTH,
    y: screenOffsetY + y * ROW_HEIGHT,
    w: width * COL_WIDTH,
    h: height * ROW_HEIGHT,
  };
}

function makeRectangle({ x, y, w, h, label, screenId }) {
  return {
    type: "rectangle",
    version: 1,
    versionNonce: Math.floor(Math.random() * 1e9),
    isDeleted: false,
    id: randomId(),
    fillStyle: "hachure",
    strokeWidth: 1,
    strokeStyle: "solid",
    roughness: 1,
    opacity: 100,
    angle: 0,
    x,
    y,
    strokeColor: "#000000",
    backgroundColor: "transparent",
    width: w,
    height: h,
    seed: Math.floor(Math.random() * 1e9),
    groupIds: [screenId],
    roundness: null,
    boundElements: [],
    updated: now(),
    link: null,
    locked: false,
  };
}

function makeText({ x, y, text, screenId, align = "left" }) {
  return {
    type: "text",
    version: 1,
    versionNonce: Math.floor(Math.random() * 1e9),
    isDeleted: false,
    id: randomId(),
    fillStyle: "hachure",
    strokeWidth: 1,
    strokeStyle: "solid",
    roughness: 1,
    opacity: 100,
    angle: 0,
    x,
    y,
    strokeColor: "#000000",
    backgroundColor: "transparent",
    width: text.length * 8 + 20,
    height: 24,
    seed: Math.floor(Math.random() * 1e9),
    groupIds: [screenId],
    roundness: null,
    boundElements: [],
    updated: now(),
    link: null,
    locked: false,
    fontSize: 20,
    fontFamily: 1,
    text,
    textAlign: align,
    verticalAlign: "top",
    baseline: 20,
    containerId: null,
    originalText: text,
  };
}

function convertToExcalidraw(wireframes) {
  const elements = [];

  (wireframes.screens || []).forEach((screen, screenIndex) => {
    const screenGroupId = randomId();

    // Screen header text
    elements.push(
      makeText({
        x: 40,
        y: screenIndex * (ROWS * ROW_HEIGHT + 200) + 20,
        text: `${screen.name} — ${screen.goal || ""}`.trim(),
        screenId: screenGroupId,
        align: "left",
      })
    );

    (screen.elements || []).forEach((el) => {
      const { x, y, width, height } = el;
      const { x: px, y: py, w, h } = gridToPixels(
        x || 0,
        y || 0,
        width || 1,
        height || 1,
        screenIndex
      );

      // Base rectangle for the element
      elements.push(
        makeRectangle({
          x: px,
          y: py,
          w,
          h,
          label: el.label || el.id,
          screenId: screenGroupId,
        })
      );

      // Text label inside the rectangle
      elements.push(
        makeText({
          x: px + 8,
          y: py + 8,
          text: el.label || el.id,
          screenId: screenGroupId,
          align: "left",
        })
      );
    });
  });

  const scene = {
    type: "excalidraw",
    version: 2,
    source: "https://excalidraw.com",
    elements,
    appState: {
      gridSize: null,
      viewBackgroundColor: "#ffffff",
    },
    files: {},
  };

  return scene;
}

const wireframes = readWireframes(inputPath);
const scene = convertToExcalidraw(wireframes);

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(scene, null, 2), "utf8");

console.log(`Excalidraw scene written to ${outputPath}`);

