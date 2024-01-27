import { MusicPlayer } from "./components/player"
import { SidebarMenu } from "./components/sidebar"
import { Suggestions } from "./components/suggestions"
import { TrackList } from "./components/tracklist"

function App() {

  return (
    <div className="min-h-screen flex flex-col bg-zinc-100">
      <main className='flex flex-1'>
        <SidebarMenu />
        <Suggestions />
        <MusicPlayer />
        <TrackList />
      </main>
    </div>
  )
}

export default App
