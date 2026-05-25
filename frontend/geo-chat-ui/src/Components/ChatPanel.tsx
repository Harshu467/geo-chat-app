import { type FormEvent, useState } from 'react'

type ChatMessage = {
  id: number
  role: 'user' | 'assistant'
  text: string
}

function ChatPanel() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 1, role: 'assistant', text: 'AI Assistant Ready' },
  ])

  const handleSend = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const trimmedMessage = message.trim()
    if (!trimmedMessage) return

    setMessages(prev => [
      ...prev,
      { id: prev.length + 1, role: 'user', text: trimmedMessage },
      {
        id: prev.length + 2,
        role: 'assistant',
        text: 'Thanks! I received your question and I am ready to help.',
      },
    ])
    setMessage('')
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-auto p-4 flex flex-col gap-3">
        {messages.map(message => (
          <div
            key={message.id}
            className={`max-w-[80%] rounded-xl p-3 ${
              message.role === 'assistant'
                ? 'bg-gray-100 text-black self-start'
                : 'bg-black text-white self-end'
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} className="border-t p-4 flex gap-2">
        <input
          value={message}
          onChange={e => setMessage(e.target.value)}
          className="flex-1 border rounded-xl px-4 py-2"
          placeholder="Ask about locations..."
        />

        <button type="submit" className="bg-black text-white px-5 rounded-xl">
          Send
        </button>
      </form>
    </div>
  )
}

export default ChatPanel