import { ChatProvider } from "./context/ChatContext";
import Sidebar from "./components/Sidebar";
import ChatPage from "./pages/ChatPage";
import axios from "axios";

export default function App() {

  return (
    <ChatProvider>
      <div className="flex h-screen overflow-hidden bg-surface-950">
        <Sidebar />
        <main className="flex-1 overflow-hidden">
          <ChatPage />
        </main>
      </div>
    </ChatProvider>
  );
}
