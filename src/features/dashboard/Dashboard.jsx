import { Bell, ChevronDown, Clock3, Library, Users } from 'lucide-react';
import { announcements, ensembles } from '../../data/mockData';

export function Dashboard({ current, selectedEnsembleId, setSelectedEnsembleId }) {
  return <>
    <header className="hero-card" style={{ '--ensemble-color': current.color }}>
      <div>
        <p className="eyebrow">Current ensemble</p>
        <label className="ensemble-picker">
          <select value={selectedEnsembleId} onChange={(event) => setSelectedEnsembleId(event.target.value)}>
            {ensembles.map((ensemble) => <option key={ensemble.id} value={ensemble.id}>{ensemble.name}</option>)}
          </select>
          <ChevronDown size={18} />
        </label>
        <h1>Practice, communicate, edit scores, and perform from one live workspace.</h1>
        <p className="hero-copy">Built for directors, section leaders, drum majors, student members, and solo/pro players with role-aware tools and real-time collaboration patterns.</p>
      </div>
      <div className="profile-card"><span className="avatar">ER</span><div><strong>{current.role}</strong><span>{current.instrument}</span></div></div>
    </header>
    <section className="stats-grid" aria-label="Ensemble summary">
      <Stat icon={<Users />} label="Members" value={current.members} detail="Role-aware permissions" />
      <Stat icon={<Library />} label="Pieces" value={current.pieces} detail="Personal + ensemble libraries" />
      <Stat icon={<Clock3 />} label="Practice time" value="152h" detail="Director-visible logs" />
      <Stat icon={<Bell />} label="Announcements" value={announcements.length} detail="Targeted by role or section" />
    </section>
  </>;
}

function Stat({ icon, label, value, detail }) {
  return <article className="stat-card"><div>{icon}</div><span>{label}</span><strong>{value}</strong><small>{detail}</small></article>;
}
