'use client';
 
import { useChat } from 'ai/react';
import { clsx } from 'clsx';
 
export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <section className="h-screen flex flex-col w-full max-w-2xl mx-auto my-8 stretch rounded shadow-xl bg-slate-50">
      {messages.map(m => (
        <div key={m.id} className={clsx('whitespace-pre-wrap p-2 shadow-xl', m.role === 'user' ? 'bg-slate-100' : 'bg-slate-200')}>
          <span className='font-bold'>{m.role === 'user' ? 'User: ' : 'AI: '}</span>
          {m.content}
        </div>
      ))}
 
      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 w-full max-w-2xl p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </section>
  );
}