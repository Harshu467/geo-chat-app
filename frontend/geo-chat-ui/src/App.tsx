import ChatPanel from './Components/ChatPanel'
import MapView from './Components/MapView'

function App() {
  return (
    <div className="h-screen flex overflow-hidden">
      <div className="w-[35%] border-r border-gray-300">
        <ChatPanel />
      </div>

      <div className="flex-1">
        <MapView />
      </div>
    </div>
  )
}

export default App