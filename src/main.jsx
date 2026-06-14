import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { AppShell } from './components/AppShell';
import { ensembles } from './data/mockData';
import { LiveChat } from './features/chat/LiveChat';
import { Dashboard } from './features/dashboard/Dashboard';
import { MusicEditor } from './features/music/MusicEditor';
import { PracticeHub } from './features/practice/PracticeHub';
import { SettingsPanel } from './features/settings/SettingsPanel';
import { useRealtimeRoom } from './hooks/useRealtimeRoom';
import './styles.css';

function App() {
  const [selectedEnsembleId, setSelectedEnsembleId] = useState(ensembles[0].id);
  const current = useMemo(() => ensembles.find((ensemble) => ensemble.id === selectedEnsembleId), [selectedEnsembleId]);
  const realtime = useRealtimeRoom(selectedEnsembleId);

  return <AppShell>
    <main className="main-content">
      <Dashboard current={current} selectedEnsembleId={selectedEnsembleId} setSelectedEnsembleId={setSelectedEnsembleId} />
      <section className="content-grid">
        <MusicEditor />
        <LiveChat realtime={realtime} />
        <PracticeHub />
        <SettingsPanel current={current} />
      </section>
    </main>
  </AppShell>;
}

createRoot(document.getElementById('root')).render(<App />);
