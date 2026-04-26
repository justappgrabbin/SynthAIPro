import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const APPS = [
  {
    id: 'neural',
    icon: '🧠',
    title: 'Neural Core',
    subtitle: 'Memory, reflection, reconstruction',
    body: 'The neural layer is the place for source memory, MIR contracts, regeneration modes, and brutal honesty checks. This is where the old TypeScript engine belongs.'
  },
  {
    id: 'appcenter',
    icon: '⬡',
    title: 'App Center',
    subtitle: 'Install, launch, organize',
    body: 'The App Center becomes the launcher for imported HTML tools, internal modules, and future packaged apps.'
  },
  {
    id: 'terminal',
    icon: '⌁',
    title: 'Terminal',
    subtitle: 'Command surface',
    body: 'Try commands: help, status, apps, clear. This browser OS is static right now, but it is wired as a shell for real commands later.'
  },
  {
    id: 'agent',
    icon: '✦',
    title: 'Syntia Agent',
    subtitle: 'Companion process',
    body: 'Agent presence panel for project tracking, reminders, synthesis, and OS-level guidance. Currently local UI, future API-ready.'
  },
  {
    id: 'body',
    icon: '◈',
    title: 'Body OS',
    subtitle: 'Autopoietic shell',
    body: 'This is the canonical shell: status bar, living desktop, dock, windows, vitality states, and launchable modules.'
  }
];

function Clock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return <span>{now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>;
}

function Terminal() {
  const [lines, setLines] = useState(['SynthAIPro OS terminal online.', 'Type help.']);
  const [input, setInput] = useState('');
  const run = (event) => {
    event.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;
    if (cmd === 'clear') setLines([]);
    else if (cmd === 'help') setLines((old) => [...old, '> help', 'commands: help, status, apps, clear']);
    else if (cmd === 'status') setLines((old) => [...old, '> status', 'phase: deployable browser shell | mode: static OS | repo: SynthAIPro']);
    else if (cmd === 'apps') setLines((old) => [...old, '> apps', APPS.map((app) => `${app.icon} ${app.title}`).join('\n')]);
    else setLines((old) => [...old, `> ${cmd}`, `Unknown command: ${cmd}`]);
    setInput('');
  };
  return <div className="terminal"><div className="terminal-output">{lines.join('\n')}</div><form onSubmit={run} className="terminal-input"><span>λ</span><input value={input} onChange={(e) => setInput(e.target.value)} autoFocus /></form></div>;
}

function AppWindow({ app, onClose }) {
  return <section className="window">
    <header className="window-header"><span>{app.icon}</span><strong>{app.title}</strong><button onClick={onClose}>×</button></header>
    <div className="window-body">
      {app.id === 'terminal' ? <Terminal /> : <><p className="eyebrow">{app.subtitle}</p><p>{app.body}</p><div className="module-card"><strong>Next integration point</strong><span>Import the best parts of your standalone HTML prototypes into this module.</span></div></>}
    </div>
  </section>;
}

function SynthAIProOS() {
  const [openApp, setOpenApp] = useState(APPS[4]);
  const [phase, setPhase] = useState('resonant');
  const phaseText = useMemo(() => phase.toUpperCase(), [phase]);

  return <main className={`os-shell ${phase}`}>
    <div className="grid-glow" />
    <header className="status-bar">
      <div className={`pulse ${phase}`} />
      <strong>SynthAIPro OS</strong>
      <span className="phase">{phaseText}</span>
      <select value={phase} onChange={(e) => setPhase(e.target.value)}>
        <option value="dormant">Dormant</option>
        <option value="active">Active</option>
        <option value="dreaming">Dreaming</option>
        <option value="growing">Growing</option>
        <option value="resonant">Resonant</option>
      </select>
      <span className="spacer" />
      <span>WEB READY</span>
      <Clock />
    </header>

    <section className="desktop">
      {!openApp && <div className="wallpaper"><div className="glyph">◈ ⬡ ◈</div><h1>Resonance Body OS</h1><p>Browser-native shell. Deployable. Not three zips in a trench coat anymore.</p></div>}
      {openApp && <AppWindow app={openApp} onClose={() => setOpenApp(null)} />}
    </section>

    <nav className="dock" aria-label="App dock">
      {APPS.map((app) => <button key={app.id} className={openApp?.id === app.id ? 'active' : ''} onClick={() => setOpenApp(app)} title={app.title}><span>{app.icon}</span><small>{app.title}</small></button>)}
    </nav>
  </main>;
}

createRoot(document.getElementById('root')).render(<SynthAIProOS />);
