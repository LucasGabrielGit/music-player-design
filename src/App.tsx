import { SidebarMenu } from "./components/sidebar"
import { Suggestions } from "./components/suggestions"

function App() {

  return (
    <div className="min-h-screen flex flex-col bg-zinc-100">
      <main className='flex flex-1'>
        <SidebarMenu />
        <Suggestions />
      </main>
    </div>
  )
}

export default App
