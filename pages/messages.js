// pages/messages.js
import { useState } from 'react';
import Head from 'next/head';

const threadsData = [
  {
    id: '1',
    name: 'Jane Doe',
    preview: 'Hey Eric, excited about ForgeTomorrow!',
    messages: [
      { type: 'received', text: 'Hey Eric! Excited about ForgeTomorrow?', time: '10:15 AM' },
      { type: 'sent', text: 'Absolutely! Can’t wait to get started.', time: '10:17 AM' },
    ],
  },
  {
    id: '2',
    name: 'John Smith',
    preview: "Let's schedule a call.",
    messages: [
      { type: 'received', text: "Let's schedule a call.", time: 'Yesterday 2:00 PM' },
      { type: 'sent', text: 'Sure, how about tomorrow?', time: 'Yesterday 2:05 PM' },
    ],
  },
  {
    id: '3',
    name: 'Samantha Lee',
    preview: 'Thanks for the update.',
    messages: [
      { type: 'received', text: 'Thanks for the update.', time: 'Monday 9:30 AM' },
      { type: 'sent', text: 'You’re welcome!', time: 'Monday 9:35 AM' },
    ],
  },
];

export default function Messages() {
  const [activeThreadId, setActiveThreadId] = useState('1');
  const [threads, setThreads] = useState(threadsData);
  const [newMessage, setNewMessage] = useState('');

  const activeThread = threads.find((thread) => thread.id === activeThreadId);

  const selectThread = (id) => {
    setActiveThreadId(id);
  };

  const sendMessage = () => {
    const text = newMessage.trim();
    if (!text) return;

    const updatedThreads = threads.map((thread) => {
      if (thread.id === activeThreadId) {
        return {
          ...thread,
          messages: [...thread.messages, { type: 'sent', text, time: 'Now' }],
          preview: text,
        };
      }
      return thread;
    });

    setThreads(updatedThreads);
    setNewMessage('');
  };

  return (
    <>
      <Head>
        <title>ForgeTomorrow - Messages</title>
      </Head>

      <main
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          flexGrow: 1,
          display: 'flex',
          background: '#222',
          borderRadius: '8px',
          overflow: 'hidden',
          height: 'calc(100vh - 160px)',
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          color: '#f5f5f5',
          flexDirection: 'row',
        }}
      >
        <div
          style={{
            width: '300px',
            background: '#1a1a1a',
            borderRight: '1px solid #444',
            overflowY: 'auto',
          }}
        >
          {threads.map((thread) => (
            <div
              key={thread.id}
              onClick={() => selectThread(thread.id)}
              style={{
                padding: '1rem',
                borderBottom: '1px solid #333',
                cursor: 'pointer',
                color: thread.id === activeThreadId ? 'white' : '#ccc',
                backgroundColor: thread.id === activeThreadId ? '#ff4500' : 'transparent',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem',
              }}
            >
              <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>{thread.name}</div>
              <div
                style={{
                  fontSize: '0.85rem',
                  color: '#999',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {thread.preview}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#666', alignSelf: 'flex-end' }}>
                {thread.messages.length > 0
                  ? thread.messages[thread.messages.length - 1].time
                  : ''}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            padding: '1rem',
            color: '#eee',
          }}
        >
          <div
            style={{
              flexGrow: 1,
              overflowY: 'auto',
              marginBottom: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}
          >
            {activeThread.messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  maxWidth: '70%',
                  padding: '0.75rem 1rem',
                  borderRadius: '15px',
                  lineHeight: 1.3,
                  backgroundColor: msg.type === 'sent' ? '#ff4500' : '#333',
                  color: msg.type === 'sent' ? 'white' : '#ddd',
                  alignSelf: msg.type === 'sent' ? 'flex-end' : 'flex-start',
                  borderBottomRightRadius: msg.type === 'sent' ? 0 : undefined,
                  borderBottomLeftRadius: msg.type === 'received' ? 0 : undefined,
                }}
              >
                {msg.text}
                <div style={{ fontSize: '0.65rem', color: '#bbb', marginTop: '0.25rem', textAlign: 'right' }}>
                  {msg.time}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <textarea
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              style={{
                flexGrow: 1,
                resize: 'none',
                borderRadius: '5px',
                border: 'none',
                padding: '0.75rem 1rem',
                fontSize: '1rem',
                background: '#333',
                color: 'white',
                height: '60px',
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              }}
            />
            <button
              onClick={sendMessage}
              style={{
                background: '#ff4500',
                border: 'none',
                color: 'white',
                padding: '0 1.5rem',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'background 0.3s',
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = '#e03d00')}
              onMouseOut={(e) => (e.currentTarget.style.background = '#ff4500')}
            >
              Send
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
