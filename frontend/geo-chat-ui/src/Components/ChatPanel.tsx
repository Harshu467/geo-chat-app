import { useState } from 'react'

function ChatPanel() {
  const [message, setMessage] = useState('')

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-auto p-4">
        <div className="bg-gray-100 rounded-xl p-3">
          AI Assistant Ready
        </div>
      </div>

      <div className="border-t p-4 flex gap-2">
        <input
          value={message}
          onChange={e => setMessage(e.target.value)}
          className="flex-1 border rounded-xl px-4 py-2"
          placeholder="Ask about locations..."
        />

        <button className="bg-black text-white px-5 rounded-xl">
          Send
        </button>
      </div>
    </div>
  )
}

export default ChatPanel