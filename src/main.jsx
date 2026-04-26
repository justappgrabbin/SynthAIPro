import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ingestFiles,
  loadMorphNet,
  morphArtifact,
  recall,
  saveMorphNet,
  stats
} from './morphNeuralNet.js';
import './styles.css';

const APPS = [
  { id: 'neural', icon: '🧠', title: 'Morph Neural Net', subtitle: 'Computational memory, source preservation, functional morphing' },
  { id: 'upload', icon: '⇪', title: 'Upload Intake', subtitle: 'Upload code, HTML, text, and zip-like source artifacts' },
  { id: 'appcenter', icon: '⬡', title: 'App Center', subtitle: 'Modules, tools, imported prototypes, and OS apps' },
  { id: 'terminal', icon: '⌁', title: 'Terminal', subtitle: 'Command surface' },
  { id: 'agent', icon: '✦', title: 'Syntia Agent', subtitle: 'Companion process for learning and movement' },
  { id: 'body', icon: '◈', title: 'Body OS', subtitle: 'Autopoietic interface shell' }
];

function Clock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return <span>{now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>;
}

function NeuralCore({ net, setNet }) {
  const [query, setQuery] = useState('upload morph runtime');
  const [matches, setMatches] = useState([]);
  const [result, setResult] = useState(null);
  const summary = stats(net);
  const selected = net.artifacts[0];

  const runRecall = () => {
    const next = { ...net, artifacts: [...net.artifacts], memories: [...net.memories], skills: [...net.skills], events: [...net.events] };
    setMatches(recall(next, query));
    saveMorphNet(next);
    setNet(next);
  };

  const runMorph = (mode) => {
    const next = { ...net, artifacts: [...net.artifacts], memories: [...net.memories], skills: [...net.skills], events: [...net.events] };
    setResult(morphArtifact(next, selected?.id, mode));
    setNet({ ...next });
  };

  return <div className="neural-panel">
    <p className="eyebrow">Computational neural net, not a decoration</p>
    <p>This layer preserves uploaded source, learns functional contracts, reconstructs exact chunks, and morphs artifacts into runtime versions without pretending missing pieces are magically present.</p>

    <div className="stat-grid">
      <div><strong>{summary.artifacts}</strong><span>Artifacts</span></div>
      <div><strong>{summary.chunks}</strong><span>Source Chunks</span></div>
      <div><strong>{summary.memories}</strong><span>Memories</span></div>
      <div><strong>{summary.strongestSkill}</strong><span>Strongest Skill</span></div>
    </div>

    <div className="module-card">
      <strong>Recall</strong>
      <span>Search what the neural net has learned from uploaded systems.</span>
      <div className="inline-control"><input value={query} onChange={(e) => setQuery(e.target.value)} /><button onClick={runRecall}>Recall</button></div>
      {matches.length > 0 && <div className="result-list">{matches.map((match, index) => <div key={index}><b>{match.kind}</b> · {match.item.name || match.item.label}</div>)}</div>}
    </div>

    <div className="module-card">
      <strong>Current artifact</strong>
      <span>{selected ? `${selected.name} · ${selected.chunks.length} chunks · ${selected.contract.intent}` : 'No uploaded artifacts yet. Use Upload Intake.'}</span>
      <div className="inline-control"><button onClick={() => runMorph('exact')} disabled={!selected}>Exact</button><button onClick={() => runMorph('morph_runtime')} disabled={!selected}>Morph Runtime</button><button onClick={() => runMorph('improved')} disabled={!selected}>Improved</button></div>
    </div>

    {result && <pre className="result-box">{JSON.stringify({ confidence: result.confidence, modeUsed: result.modeUsed, integrity: result.integrity, isExact: result.isExact, missing: result.missing, chunkCount: result.chunkCount }, null, 2)}</pre>}
  </div>;
}

function UploadIntake({ net, setNet }) {
  const [busy, setBusy] = useState(false);
  const handleFiles = async (event) => {
    const files = event.target.files;
    if (!files?.length) return;
    setBusy(true);
    const next = { ...net, artifacts: [...net.artifacts], memories: [...net.memories], skills: [...net.skills], events: [...net.events] };
    await ingestFiles(next, files);
    setNet({ ...next });
    setBusy(false);
  };

  return <div>
    <p className="eyebrow">Upload intake stays in the plot</p>
    <p>Drop in HTML, code, text, and source artifacts. Zip support is recognized at the contract level now; full unzip extraction is the next adapter.</p>
    <label className="upload-zone">
      <input type="file" multiple onChange={handleFiles} />
      <strong>{busy ? 'Learning...' : 'Choose files to remember'}</strong>
      <span>The neural net chunks source, stores functional contracts, and makes it available for exact or morphed regeneration.</span>
    </label>
    <div className="result-list">
      {net.artifacts.map((artifact) => <div key={artifact.id}><b>{artifact.name}</b> · {artifact.chunks.length} chunks · {artifact.contract.capabilities.join(', ') || 'source preserved'}</div>)}
    </div>
  </div>;
}

function Terminal({ net, setNet }) {
  const [lines, setLines] = useState(['SynthAIPro Morph terminal online.', 'Type help.']);
  const [input, setInput] = useState('');
  const run = (event) => {
    event.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;
    if (cmd === 'clear') setLines([]);
    else if (cmd === 'help') setLines((old) => [...old, '> help', 'commands: help, status, apps, skills, artifacts, exact, morph, clear']);
    else if (cmd === 'status') setLines((old) => [...old, '> status', JSON.stringify(stats(net), null, 2)]);
    else if (cmd === 'apps') setLines((old) => [...old, '> apps', APPS.map((app) => `${app.icon} ${app.title}`).join('\n')]);
    else if (cmd === 'skills') setLines((old) => [...old, '> skills', net.skills.map((skill) => `${skill.name}: ${skill.strength}`).join('\n')]);
    else if (cmd === 'artifacts') setLines((old) => [...old, '> artifacts', net.artifacts.map((artifact) => `${artifact.name}: ${artifact.chunks.length} chunks`).join('\n') || 'No artifacts uploaded yet.']);
    else if (cmd === 'exact' || cmd === 'morph') {
      const next = { ...net, artifacts: [...net.artifacts], memories: [...net.memories], skills: [...net.skills], events: [...net.events] };
      const output = morphArtifact(next, next.artifacts[0]?.id, cmd === 'exact' ? 'exact' : 'morph_runtime');
      setNet({ ...next });
      setLines((old) => [...old, `> ${cmd}`, JSON.stringify({ confidence: output.confidence, integrity: output.integrity, isExact: output.isExact, missing: output.missing }, null, 2)]);
    } else setLines((old) => [...old, `> ${cmd}`, `Unknown command: ${cmd}`]);
    setInput('');
  };
  return <div className="terminal"><div className="terminal-output">{lines.join('\n')}</div><form onSubmit={run} className="terminal-input"><span>λ</span><input value={input} onChange={(e) => setInput(e.target.value)} autoFocus /></form></div>;
}

function AppWindow({ app, onClose, net, setNet }) {
  return <section className="window">
    <header className="window-header"><span>{app.icon}</span><strong>{app.title}</strong><button onClick={onClose}>×</button></header>
    <div className="window-body">
      {app.id === 'neural' && <NeuralCore net={net} setNet={setNet} />}
      {app.id === 'upload' && <UploadIntake net={net} setNet={setNet} />}
      {app.id === 'terminal' && <Terminal net={net} setNet={setNet} />}
      {!['neural', 'upload', 'terminal'].includes(app.id) && <><p className="eyebrow">{app.subtitle}</p><p>{app.id === 'body' ? 'The OS is the body/interface for the Morph neural net. It should never replace the computational learner underneath.' : 'This module is ready to become one of the OS organs imported from your standalone prototypes.'}</p><div className="module-card"><strong>Next integration point</strong><span>Bring in the matching uploaded prototype as a module without removing upload, learning, source memory, or morph behavior.</span></div></>}
    </div>
  </section>;
}

function SynthAIProOS() {
  const [net, setNet] = useState(() => loadMorphNet());
  const [openApp, setOpenApp] = useState(APPS[0]);
  const [phase, setPhase] = useState('resonant');
  const phaseText = useMemo(() => phase.toUpperCase(), [phase]);
  useEffect(() => saveMorphNet(net), [net]);

  return <main className={`os-shell ${phase}`}>
    <div className="grid-glow" />
    <header className="status-bar">
      <div className={`pulse ${phase}`} />
      <strong>SynthAIPro Morph Neural Net</strong>
      <span className="phase">{phaseText}</span>
      <select value={phase} onChange={(e) => setPhase(e.target.value)}>
        <option value="dormant">Dormant</option>
        <option value="active">Active</option>
        <option value="dreaming">Dreaming</option>
        <option value="growing">Growing</option>
        <option value="resonant">Resonant</option>
      </select>
      <span className="spacer" />
      <span>{stats(net).artifacts} ARTIFACTS</span>
      <span>WEB READY</span>
      <Clock />
    </header>

    <section className="desktop">
      {!openApp && <div className="wallpaper"><div className="glyph">◈ ⬡ ◈</div><h1>Morph Neural Net</h1><p>The OS is the interface. The learner is the engine.</p></div>}
      {openApp && <AppWindow app={openApp} onClose={() => setOpenApp(null)} net={net} setNet={setNet} />}
    </section>

    <nav className="dock" aria-label="App dock">
      {APPS.map((app) => <button key={app.id} className={openApp?.id === app.id ? 'active' : ''} onClick={() => setOpenApp(app)} title={app.title}><span>{app.icon}</span><small>{app.title}</small></button>)}
    </nav>
  </main>;
}

createRoot(document.getElementById('root')).render(<SynthAIProOS />);
