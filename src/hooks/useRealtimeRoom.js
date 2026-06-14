import { useEffect, useMemo, useRef, useState } from 'react';
import { starterMessages } from '../data/mockData';
import { useLocalStorage } from './useLocalStorage';

const BOT_REPLIES = [
  'New practice log synced from low brass.',
  'Director Rivera edited rehearsal mark B in the score.',
  'Smart tuner session finished for clarinets.',
  'A new announcement was targeted to section leaders.',
];

export function useRealtimeRoom(roomId) {
  const storageKey = `ensemble-pro:${roomId}:messages`;
  const [messages, setMessages] = useLocalStorage(storageKey, starterMessages);
  const [presence, setPresence] = useState(['Director Rivera', 'Ava Chen', 'Noah Patel']);
  const channelRef = useRef(null);

  useEffect(() => {
    const channel = new BroadcastChannel(`ensemble-pro:${roomId}`);
    channelRef.current = channel;
    channel.onmessage = (event) => {
      if (event.data?.type === 'message') setMessages((current) => [...current, event.data.payload]);
      if (event.data?.type === 'presence') setPresence(event.data.payload);
    };
    return () => channel.close();
  }, [roomId, setMessages]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      const reply = BOT_REPLIES[Math.floor(Math.random() * BOT_REPLIES.length)];
      const botMessage = {
        id: crypto.randomUUID(),
        channelId: 'full',
        author: 'Live sync bot',
        text: reply,
        time: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }),
      };
      setMessages((current) => [...current, botMessage].slice(-60));
    }, 18000);
    return () => window.clearInterval(timer);
  }, [setMessages]);

  const sendMessage = (channelId, text) => {
    const message = {
      id: crypto.randomUUID(),
      channelId,
      author: 'You',
      text,
      time: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }),
    };
    setMessages((current) => [...current, message]);
    channelRef.current?.postMessage({ type: 'message', payload: message });
  };

  return useMemo(() => ({ messages, presence, sendMessage }), [messages, presence]);
}
