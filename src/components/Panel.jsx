export function Panel({ title, icon, action, children, wide = false }) {
  return <section className={`panel ${wide ? 'wide-panel' : ''}`}><header><h2>{icon}{title}</h2>{action && <button>{action}</button>}</header>{children}</section>;
}
