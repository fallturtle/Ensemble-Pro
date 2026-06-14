import { Bell, CalendarDays, Clock3, Gauge, Music2, SlidersHorizontal, TimerReset, Volume2 } from 'lucide-react';
import { Panel } from '../../components/Panel';
import { announcements, people, pieces, schedule } from '../../data/mockData';

export function PracticeHub() {
  return <>
    <Panel title="Recent pieces" icon={<Music2 />} action="Upload music">
      {pieces.map((piece) => <article className="piece-row" key={piece.id}><div><strong>{piece.title}</strong><span>{piece.composer} · {piece.owner}</span></div><div className="progress-wrap"><span style={{ width: `${piece.progress}%` }} /></div></article>)}
    </Panel>
    <Panel title="Announcements" icon={<Bell />} action="Compose">
      {announcements.map((item) => <article className="announcement" key={item.id}><div><strong>{item.from}</strong><span>{item.scope} · {item.time}</span></div><p>{item.text}</p></article>)}
    </Panel>
    <Panel title="Practice tools" icon={<TimerReset />} action="Open tools">
      <div className="tool-grid"><Tool icon={<Gauge />} title="Smart tuner" text="Instrument-aware guidance to adjust pitch." /><Tool icon={<Volume2 />} title="Metronome" text="Tempo presets synced to assigned music." /><Tool icon={<Music2 />} title="Fingering charts" text="Note lookup by instrument and skill level." /><Tool icon={<SlidersHorizontal />} title="Rhythm counter" text="Count, subdivide, and loop difficult passages." /></div>
    </Panel>
    <Panel title="Practice logging" icon={<Clock3 />} action="Log minutes">
      {people.map((log) => <article className="log-row" key={log.id}><span>{log.name}<small>{log.section} · {log.instrument}</small></span><strong>{log.minutes} min</strong><em>{log.streak} day streak</em></article>)}
    </Panel>
    <Panel title="Schedule" icon={<CalendarDays />} action="Add practice">
      {schedule.map((event) => <div className="schedule-card" key={event.id}><strong>{event.time}</strong><span>{event.title} · {event.detail}</span></div>)}
    </Panel>
  </>;
}

function Tool({ icon, title, text }) {
  return <article className="tool-card">{icon}<strong>{title}</strong><span>{text}</span></article>;
}
