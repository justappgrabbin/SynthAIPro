# SynthAIPro Coherent Assembly Blueprint

## Product truth

SynthAIPro is a computational Morph neural net with a web OS body and Cynthia Server as the backend spine.

It is not a graph viewer. It is not only a chatbot. It is not only a static OS shell.

The system must preserve functionality while learning from uploaded code, folders, and zip bundles. It must ingest source, understand functional contracts, preserve reconstructable source chunks, orchestrate build/run/morph workflows, and produce usable evolved versions without lying about what was lost or changed.

## Core system layers

```txt
Morph OS
  Interface/body: upload, terminal, app center, builder, playable outputs, morph controls

Cynthia Server - Node side
  API gateway, upload handling, zip extraction, routing, build orchestration, SSE/realtime, static serving

Cynthia Server - Python side
  Inference, deeper code analysis, learning routines, computational workers, MIR/ANN tasks where Python is best

Trident
  Full intelligence subsystem: RAG, P2P, MCP/tool use, coding, math, research, gap filling, routing, synthesis, repair planning

MIR / Morph Memory
  Source-dominant file memory, indexed chunks, contracts, blueprints, exact/equivalent/morph_runtime/improved regeneration

Learning / Orchestrator
  Job queue, worker registry, outcomes, reusable capabilities, repair history, next-action decisions
```

## Trident scope

Trident is not just chat.

Trident includes:

- RAG search and retrieval
- P2P knowledge routing
- MCP/tool orchestration
- coding help and code generation
- math/reasoning
- research support
- gap detection and gap filling
- project/task routing
- synthesis across uploaded systems
- repair planning
- autonomous next-action selection

Trident answers the question: **what should happen next, and how do we do it without breaking the system?**

## Runtime flow

```txt
User uploads code / zip / HTML / project
  ↓
Morph OS sends upload to Cynthia Node API
  ↓
Node extracts zip safely, preserves paths, identifies project structure
  ↓
MIR analyzes source into chunks, contracts, imports, functions, gaps, build metadata
  ↓
Python workers handle deeper inference / learning / code analysis when needed
  ↓
Trident reasons over the project, routes tools, fills gaps, proposes repairs, writes code/math/research outputs
  ↓
Node executes build/run/morph actions
  ↓
Morph OS displays status, terminal logs, playable app, artifacts, and morph modes
  ↓
Learning layer records outcomes, reusable capabilities, failed assumptions, and improvement paths
```

## Target repository structure

```txt
SynthAIPro/
├── server/                  # Cynthia Node server: upload, extract, build, serve, API gateway
├── workers/                 # Cynthia Python workers: inference, learning, heavy analysis
├── web/                     # Morph OS frontend
├── packages/
│   ├── mir/                 # Morph MIR v3 source memory package
│   └── trident-client/      # Client wrappers for Trident RAG/P2P/MCP/coding/math/research routes
├── modules/
│   ├── ann-engine/          # Persistent learning and software generation features
│   ├── orchestrator/        # Job queue, classifier, worker registry
│   ├── interface-next/      # Optional Next.js interface prototype
│   ├── inference-axis/      # Assistant/dashboard/project management features
│   └── resonance-core/      # Higher-order intelligence/orchestration experiments
└── prototypes/              # Archived HTML/prototype zips; preserve before replacing
```

## Source ancestors

### Backend spine
- `cynthia-render-engine.zip`
- Role: deployable server ancestor for zip intake, project creation, build runner, static app serving, and morph endpoints.

### Live backend
- `https://synthia-server-1.onrender.com/`
- Role: active Cynthia Server endpoint. Treat as the current hosted backend until replaced or versioned.

### MIR / memory spine
- `morph-mir-system-v3.zip`
- Role: source-dominant memory and regeneration package.
- Required modes: `exact`, `equivalent`, `morph_runtime`, `improved`.
- Non-negotiable honesty rule: exact means byte-identical or it must say it is not exact.

### Frontend shell ancestors
- `MorphOS_v2.html`
- `morph_os_real.html`
- `morph_shell_with_upload.html`
- Role: web OS, terminal, chat, upload, builder, MIR control panel, and substrate movement.

### Feature modules
- `ANN-Powered Software Generation Engine with Persistent Learning.zip`
- `Content Aware Orchestrator Development.zip`
- `Building an Autonomous AI Site Orchestrator (2).zip`
- `AI Assistant for Coding, Business, and Project Management.zip`
- `axis (1).zip`
- `inference-engine.zip`
- `Creating a Neural Network with 5-Mesh 13-Layer Structure (5).zip`

These are extracted as modules after the server + MIR + OS + Trident loop works.

## Non-negotiables

1. Do not replace the computational neural net with a graph visualizer.
2. Do not shrink Trident into a chatbot. Trident includes RAG, P2P, MCP, coding, math, research, and gap filling.
3. Do not remove upload, zip intake, code ingestion, reconstruction, morphing, learning, or orchestration behavior.
4. Do not flatten prototypes into decorative UI only.
5. Archive before replacing.
6. Prefer a working full-stack loop over perfect architecture diagrams.
7. Every morph result must report what was preserved, what changed, and what is missing.

## MVP target

A full-stack deployment where the user can:

1. Open Morph OS in the browser.
2. Upload a zip or source file.
3. See extracted files and detected project metadata.
4. Run MIR analysis.
5. Ask Trident to inspect, code, do math/research, fill gaps, or route work.
6. Trigger build if package scripts exist.
7. Open playable build output.
8. Generate morph modes: exact/equivalent/runtime/improved.
9. Save learning events, project notes, memory, and repair outcomes.

## Next implementation order

1. Create a clean branch before major restructuring.
2. Extract Cynthia Node server into `server/`.
3. Extract Python worker side into `workers/` if present, or create worker bridge stubs.
4. Extract `morph-mir-system-v3.zip` into `packages/mir/`.
5. Place strongest Morph OS UI into `web/`.
6. Add `packages/trident-client/` wrappers for Trident RAG/P2P/MCP/coding/math/research routes.
7. Wire `web` upload to Cynthia Node.
8. Wire Cynthia Node to MIR + Python workers + Trident.
9. Archive all old prototypes under `prototypes/`.
