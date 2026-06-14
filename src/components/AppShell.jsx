import { CalendarDays, Clock3, FileMusic, Home, MessageCircle, Music2, Settings, Upload } from 'lucide-react';

const nav = [
  [Home, 'Dashboard'],
  [FileMusic, 'Music'],
  [Clock3, 'Practice'],
  [MessageCircle, 'Chat'],
  [CalendarDays, 'Schedule'],
  [Settings, 'Settings'],
];

export function AppShell({ children }) {
  return <div className="app-shell"><Sidebar />{children}<MobileNav /></div>;
}

function Sidebar() {
  return <aside className="sidebar"><div className="brand"><Music2 /> Ensemble Pro</div><nav>{nav.map(([Icon, label]) => <a href={`#${label.toLowerCase()}`} key={label}><Icon size={18} />{label}</a>)}</nav><button><Upload size={18} /> Add piece</button></aside>;
}

function MobileNav() {
  return <nav className="mobile-nav">{nav.slice(0, 4).map(([Icon, label]) => <a href={`#${label.toLowerCase()}`} key={label}><Icon />{label}</a>)}</nav>;
}
