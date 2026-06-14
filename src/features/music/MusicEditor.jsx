import { Edit3, Eye, FileMusic, Music, Plus, Save, Type } from 'lucide-react';
import { useState } from 'react';
import { Panel } from '../../components/Panel';
import { pieces, scoreElements, toolPalette } from '../../data/mockData';

export function MusicEditor() {
  const [selectedPiece, setSelectedPiece] = useState(pieces[0]);
  const [elements, setElements] = useState(scoreElements);
  const [activeTool, setActiveTool] = useState('Quarter note');

  const addElement = () => {
    const newElement = {
      id: crypto.randomUUID(),
      type: activeTool.toLowerCase().includes('text') ? 'lyric' : 'note',
      symbol: symbolFor(activeTool),
      label: activeTool,
      x: 15 + Math.random() * 70,
      y: 25 + Math.random() * 55,
    };
    setElements((current) => [...current, newElement]);
  };

  return <Panel title="Full music editor" icon={<FileMusic />} action="Save score" wide>
    <div className="editor-shell">
      <aside className="score-browser">
        <strong>Score library</strong>
        {pieces.map((piece) => <button className={piece.id === selectedPiece.id ? 'active' : ''} onClick={() => setSelectedPiece(piece)} key={piece.id}><span>{piece.title}</span><small>{piece.composer} · {piece.key} · ♩={piece.tempo}</small></button>)}
        <div className="editor-actions"><button><Eye size={16} /> Follow line</button><button><Save size={16} /> Version history</button></div>
      </aside>
      <section className="notation-workbench">
        <div className="editor-toolbar">
          <div><strong>{selectedPiece.title}</strong><span>{selectedPiece.owner} score editing</span></div>
          <button onClick={addElement}><Plus size={16} /> Add {activeTool}</button>
        </div>
        <div className="tool-palette" aria-label="Notation tools">
          {toolPalette.map((tool) => <button className={tool === activeTool ? 'selected' : ''} onClick={() => setActiveTool(tool)} key={tool}>{tool}</button>)}
        </div>
        <div className="score-canvas" role="img" aria-label="Editable music notation canvas">
          {[0, 1, 2, 3].map((staff) => <div className="staff" style={{ top: `${18 + staff * 20}%` }} key={staff}>{[0, 1, 2, 3, 4].map((line) => <span style={{ top: `${line * 8}px` }} key={line} />)}</div>)}
          {elements.map((element) => <button className={`score-element ${element.type}`} style={{ left: `${element.x}%`, top: `${element.y}%` }} title={element.label} key={element.id}>{element.symbol}</button>)}
          <div className="playhead" />
        </div>
      </section>
      <aside className="inspector">
        <strong><Edit3 size={16} /> Inspector</strong>
        <label>Selected tool<input value={activeTool} onChange={(event) => setActiveTool(event.target.value)} /></label>
        <label>Lyric / text<input placeholder="Add vocal text, rehearsal notes, or cues" /></label>
        <label>Expression<select><option>Slur</option><option>Crescendo</option><option>Decrescendo</option><option>Accent</option><option>Tenuto</option></select></label>
        <div className="inspector-note"><Type size={16} /> Supports notes, rests, accidentals, articulations, lyrics, dynamics, slurs, crescendos, rehearsal text, and follow-line practice mode.</div>
      </aside>
    </div>
  </Panel>;
}

function symbolFor(tool) {
  const map = { 'Whole note': '𝅝', 'Half note': '𝅗𝅥', 'Quarter note': '♩', 'Eighth note': '♪', 'Sixteenth note': '♬', Rest: '𝄽', Sharp: '♯', Flat: '♭', Natural: '♮', Tie: '‿', Slur: '︵', Staccato: '·', Accent: '>', Crescendo: '<', Decrescendo: '>', Forte: 'f', Piano: 'p', 'Lyrics/Text': 'Text', 'Chord symbol': 'Cmaj7', 'Repeat bar': '𝄆', 'Time signature': '4/4', 'Key signature': '♭♭' };
  return map[tool] || '♩';
}
