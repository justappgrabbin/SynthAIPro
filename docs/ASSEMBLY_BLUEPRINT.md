# SynthAIPro Coherent Assembly Blueprint

## Product truth

SynthAIPro is a computational Morph neural net with a web OS body and Cynthia Server as the backend spine.

It is not a graph viewer. It is not only a chatbot. It is not only a static OS shell.

The system must preserve functionality while learning from uploaded code, folders, and zip bundles. It must ingest source, understand functional contracts, preserve reconstructable source chunks, orchestrate build/run/morph workflows, and produce usable evolved versions without lying about what was lost or changed.

## Address vs glyph ontology

This distinction is non-negotiable:

```txt
Address = an entity/location in the system that can be addressed, routed to, messaged, visited, or recognized as having a place in the mesh.
Glyph = the visible/callable symbol for an entity, function, action, or capability.
```

Addresses are not limited to pages. A human can have an address. An app can have an address. A service/function like Trident can also have an address when it is a real addressed entity in the system.

Glyphs are how the OS shows or invokes something. A glyph can point to an addressed entity, or it can invoke a smaller capability that does not need its own address.

### Addressed places / entities

```txt
Browser
You-N-I-Verse
Stellar Proximology
Symbiont Circle
The Grove
Admin / Root
Home / Dashboard
Trident
Cynthia
MIR / Morph Memory
Human users
Agents
Root entry points
```

### Glyph-bearing functions / capabilities

```txt
Trident
MIR Morphing
Upload / Zip Intake
Code Runner
Terminal
RAG Search
MCP Tools
Math
Research
Gap Filler
Memory
Learning
Websocket Mesh
Action Log / Undo
Broadcast
Environmental Observer
Dynamic Component Renderer
Cynthia Node Call
Cynthia Python Worker Call
```

Important nuance:

```txt
Some things are both addressed entities and glyph-bearing functions.
Trident is both.
MIR may be both, depending on whether it is being routed to as a service or invoked as a capability.
A human has an address, and may also have glyphs/actions attached to them.
```

Rule of thumb:

```txt
Addresses identify entities/places/services in the mesh.
Glyphs present capabilities/actions/entities to the user.
Morph OS routes glyph invocation to addressed entities or local capabilities.
```

## Core system layers

```txt
Morph OS
  Interface/body: addressed apps/pages/entities, smart browser, upload surfaces, terminal surfaces, app center, builder, playable outputs, morph controls

Cynthia Server - Node side
  API gateway, upload handling, zip extraction, routing, build orchestration, SSE/websocket realtime, static serving

Cynthia Server - Python side
  Inference, deeper code analysis, learning routines, computational workers, MIR/ANN tasks where Python is best

Trident addressed function/entity
  Full intelligence function: RAG, P2P, MCP/tool use, coding, math, research, gap filling, routing, synthesis, repair planning

MIR / Morph Memory addressed function/service
  Source-dominant morph function: indexed chunks, contracts, blueprints, exact/equivalent/morph_runtime/improved regeneration

Learning / Orchestrator function
  Job queue, worker registry, outcomes, reusable capabilities, repair history, next-action decisions
```

## Trident scope

Trident is not just chat and it is not merely an app icon.

Trident is an addressed intelligence function/entity.

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
User opens an addressed place in Morph OS
  ↓
That place presents glyphs for available functions/entities
  ↓
User invokes a glyph/function such as upload, Trident, MIR, research, memory, build, or morph
  ↓
Morph OS routes the invocation to an addressed entity/service or local capability
  ↓
Cynthia Node routes to MIR, Trident, Python workers, build runner, memory, or realtime mesh
  ↓
Realtime mesh streams status, logs, tokens, progress, and receiving-side morph updates
  ↓
Morph OS updates the addressed place without flattening the addressed entity into a mere button
  ↓
Learning layer records outcomes, reusable capabilities, failed assumptions, and improvement paths
```

## Target repository structure

```txt
SynthAIPro/
├── server/                  # Cynthia Node server: upload, extract, build, serve, API gateway, websocket
├── workers/                 # Cynthia Python workers: inference, learning, heavy analysis
├── web/                     # Morph OS frontend and address router
├── apps/                    # User-facing addressed places inside Morph OS
│   ├── browser/
│   ├── you-n-i-verse/
│   ├── stellar-proximology/
│   ├── symbiont-circle/
│   ├── grove/
│   ├── admin-root/
│   └── home/
├── packages/                # Addressed functions/services and shared service clients
│   ├── mir/                 # Morph MIR v3 source memory function/service
│   ├── trident-client/      # Trident RAG/P2P/MCP/coding/math/research client
│   ├── realtime-client/     # Websocket client hooks and event contracts
│   └── cynthia-client/      # Cynthia Node/Python function calls
├── modules/                 # Feature systems extracted after core loop works
│   ├── ann-engine/
│   ├── orchestrator/
│   ├── interface-next/
│   ├── inference-axis/
│   └── resonance-core/
└── prototypes/              # Archived HTML/prototype zips; preserve before replacing
```

## Source ancestors

### Backend spine
- `cynthia-render-engine.zip`
- Role: deployable server ancestor for zip intake, project creation, build runner, static app serving, and morph endpoints.

### Live backend
- `https://synthia-server-1.onrender.com/`
- Role: active Cynthia Server endpoint. Treat as the current hosted backend until replaced or versioned.

### MIR / memory function
- `morph-mir-system-v3.zip`
- Role: source-dominant memory and regeneration package.
- Required modes: `exact`, `equivalent`, `morph_runtime`, `improved`.
- Non-negotiable honesty rule: exact means byte-identical or it must say it is not exact.

### Frontend shell ancestors
- `MorphOS_v2.html`
- `morph_os_real.html`
- `morph_shell_with_upload.html`
- Role: web OS, terminal, chat, upload, builder, MIR control panel, and substrate movement.

## Non-negotiables

1. Do not replace the computational neural net with a graph visualizer.
2. Do not shrink Trident into a chatbot or mere app icon. Trident is an addressed intelligence function/entity that includes RAG, P2P, MCP, coding, math, research, and gap filling.
3. Do not flatten MIR into decoration. MIR is a source-preserving morph function/service and may be addressed when routed to as a service.
4. Do not remove upload, zip intake, code ingestion, reconstruction, morphing, learning, or orchestration behavior.
5. Do not flatten prototypes into decorative UI only.
6. Archive before replacing.
7. Prefer a working full-stack loop over perfect architecture diagrams.
8. Every morph result must report what was preserved, what changed, and what is missing.

## MVP target

A full-stack deployment where the user can:

1. Open Morph OS in the browser.
2. Visit addressed places like Browser, You-N-I-Verse, Stellar Proximology, Symbiont Circle, Grove, Admin/Root, and Home.
3. Invoke glyph-bearing functions/entities from those places: upload, Trident, MIR, memory, research, build, morph, action log, realtime, etc.
4. Upload a zip or source file.
5. See extracted files and detected project metadata.
6. Run MIR analysis as a function/service.
7. Ask Trident as an addressed function/entity to inspect, code, do math/research, fill gaps, or route work.
8. Trigger build if package scripts exist.
9. Open playable build output.
10. Generate morph modes: exact/equivalent/runtime/improved.
11. Save learning events, project notes, memory, and repair outcomes.

## Next implementation order

1. Create a clean branch before major restructuring.
2. Extract Cynthia Node server into `server/`.
3. Extract Python worker side into `workers/` if present, or create worker bridge stubs.
4. Extract `morph-mir-system-v3.zip` into `packages/mir/`.
5. Place strongest Morph OS UI into `web/`.
6. Add address registry for Browser, You-N-I-Verse, Stellar Proximology, Symbiont Circle, Grove, Admin/Root, Home, Trident, Cynthia, MIR, users, agents, and root entry points.
7. Add glyph/function registry for Trident, MIR, upload, memory, realtime, research, build, morph, and orchestration.
8. Add realtime websocket client/server contracts.
9. Wire addressed places to glyph-bearing functions and addressed entities.
10. Wire Cynthia Node to MIR + Python workers + Trident.
11. Archive all old prototypes under `prototypes/`.
