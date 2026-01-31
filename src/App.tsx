import { AppLayout } from "./components/layout/AppLayout"
import { ChatPanel } from "./components/chat/ChatPanel"
import { Sidebar } from "./components/sidebar/Sidebar"

export default function App() {
  return <AppLayout sidebar={<Sidebar />} main={<ChatPanel />} />
}
