export const ensembles = [
  { id: 'wind-symphony', name: 'Wind Symphony', role: 'Director', instrument: 'Conductor', members: 64, pieces: 18, color: '#6457ff' },
  { id: 'jazz-one', name: 'Jazz Ensemble I', role: 'Section Leader', instrument: 'Alto Saxophone', members: 21, pieces: 11, color: '#00a889' },
  { id: 'solo', name: 'Solo / Pro Library', role: 'Solo/pro', instrument: 'Clarinet', members: 1, pieces: 27, color: '#f59e0b' },
];

export const people = [
  { id: 'ava', name: 'Ava Chen', section: 'Flute', role: 'Section leader', instrument: 'Flute', minutes: 175, streak: 6 },
  { id: 'mateo', name: 'Mateo Brooks', section: 'Low brass', role: 'Member', instrument: 'Trombone', minutes: 142, streak: 4 },
  { id: 'noah', name: 'Noah Patel', section: 'Percussion', role: 'Drum major', instrument: 'Snare', minutes: 118, streak: 5 },
  { id: 'mia', name: 'Mia Torres', section: 'Woodwinds', role: 'Member', instrument: 'Clarinet', minutes: 96, streak: 3 },
];

export const pieces = [
  { id: 'holst-suite', title: 'First Suite in E-flat', composer: 'Gustav Holst', owner: 'Ensemble', progress: 78, key: 'E-flat', tempo: 112 },
  { id: 'blue-rondo', title: 'Blue Rondo à la Turk', composer: 'Dave Brubeck', owner: 'Jazz Ensemble I', progress: 54, key: 'C minor', tempo: 144 },
  { id: 'rose-etude', title: 'Rose 32 Etudes No. 9', composer: 'Cyrille Rose', owner: 'Personal', progress: 41, key: 'A minor', tempo: 84 },
];

export const announcements = [
  { id: 'a1', from: 'Director Rivera', scope: 'Entire ensemble', text: 'Concert black for Thursday rehearsal. Bring pencils and mutes.', time: '8:15 AM' },
  { id: 'a2', from: 'Drum Major Kai', scope: 'Section leaders', text: 'Leadership circle meets ten minutes before warmups.', time: 'Yesterday' },
  { id: 'a3', from: 'Flute SL Mia', scope: 'Woodwinds', text: 'Optional woodwind sectional in Room 214 after school.', time: 'Mon' },
];

export const channels = [
  { id: 'full', name: '# full-ensemble', scope: 'Everyone', unread: 5 },
  { id: 'clarinets', name: '# clarinets', scope: 'Clarinet section', unread: 2 },
  { id: 'leadership', name: '# leadership', scope: 'Directors, section leaders, drum majors', unread: 1 },
];

export const starterMessages = [
  { id: 'm1', channelId: 'full', author: 'Ava Chen', text: 'Can someone share the measure 72 fingering?', time: '8:32 AM' },
  { id: 'm2', channelId: 'full', author: 'Director Rivera', text: 'I pinned the alternate fingering in the music editor comments.', time: '8:33 AM' },
  { id: 'm3', channelId: 'clarinets', author: 'Mia Torres', text: 'Sectional recording is uploaded. Focus on the exposed entrance.', time: 'Yesterday' },
  { id: 'm4', channelId: 'leadership', author: 'Noah Patel', text: 'Drafting the pep tune setlist before Friday.', time: 'Mon' },
];

export const schedule = [
  { id: 's1', title: 'Woodwind sectional', time: 'Today · 4:00 PM', detail: 'Follow-line score practice and fingering review.' },
  { id: 's2', title: 'Full ensemble rehearsal', time: 'Thursday · 7:00 PM', detail: 'Director score edits, balance, and phrasing.' },
];

export const scoreElements = [
  { id: 'n1', type: 'note', symbol: '♩', label: 'Quarter note', x: 12, y: 35 },
  { id: 'n2', type: 'note', symbol: '♪', label: 'Eighth notes', x: 24, y: 29 },
  { id: 'n3', type: 'dynamic', symbol: 'mf', label: 'Mezzo-forte', x: 36, y: 62 },
  { id: 'n4', type: 'slur', symbol: '︵', label: 'Slur', x: 48, y: 24 },
  { id: 'n5', type: 'crescendo', symbol: '<', label: 'Crescendo', x: 60, y: 67 },
  { id: 'n6', type: 'lyric', symbol: 'Sing', label: 'Vocal text', x: 72, y: 76 },
];

export const toolPalette = [
  'Whole note', 'Half note', 'Quarter note', 'Eighth note', 'Sixteenth note', 'Rest', 'Sharp', 'Flat', 'Natural', 'Tie', 'Slur', 'Staccato', 'Accent', 'Crescendo', 'Decrescendo', 'Forte', 'Piano', 'Lyrics/Text', 'Chord symbol', 'Repeat bar', 'Time signature', 'Key signature'
];
