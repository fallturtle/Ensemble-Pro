import { MessageCircle, Radio } from 'lucide-react';
import { useMemo, useState } from 'react';
import { channels } from '../../data/mockData';
import { Panel } from '../../components/Panel';

export function LiveChat({ realtime }) {
  const [activeChannel, setActiveChannel] = useState(channels[0].id);
  const [draft, setDraft] = useState('');
  const visibleMessages = useMemo(() => realtime.messages.filter((message) => message.channelId === activeChannel), [realtime.messages, activeChannel]);

  const submit = (event) => {
    event.preventDefault();
    if (!draft.trim()) return;
    realtime.sendMessage(activeChannel, draft.trim());
    setDraft('');
  };

  return <Panel title="Live chat" icon={<MessageCircle />} action="Channel rules" wide>
    <div className="chat-layout">
      <aside className="channel-list">
        <div className="live-indicator"><Radio size={16} /> Auto-updating room · {realtime.presence.length} online</div>
        {channels.map((channel) => <button className={channel.id === activeChannel ? 'active' : ''} onClick={() => setActiveChannel(channel.id)} key={channel.id}><strong>{channel.name}</strong><span>{channel.scope}</span><b>{channel.unread}</b></button>)}
      </aside>
      <section className="message-pane">
        <div className="messages">
          {visibleMessages.map((message) => <article className="message" key={message.id}><strong>{message.author}<span>{message.time}</span></strong><p>{message.text}</p></article>)}
        </div>
        <form className="chat-composer" onSubmit={submit}><input value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="Message this channel..." /><button>Send</button></form>
      </section>
    </div>
  </Panel>;
}
