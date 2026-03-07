import { useEffect, useRef } from "react";
import { useChat } from "../context/ChatContext";
import MessageBubble from "../components/MessageBubble";
import MessageInput from "../components/MessageInput";
import TypingIndicator from "../components/TypingIndicator";
import WelcomeScreen from "../components/WelcomeScreen";
import { Trash2 } from "lucide-react";

export default function ChatPage() {
  const { messages, loading, sendMessage, currentSessionId, deleteSession } =
    useChat();
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className="flex flex-col h-full">
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 shrink-0">
        <div>
          <h2 className="text-sm font-semibold text-white">
            {messages.length === 0 ? "New Chat" : "Chat Session"}
          </h2>
          {messages.length > 0 && (
            <p className="text-[11px] text-gray-600">
              {messages.length} message{messages.length !== 1 ? "s" : ""}
            </p>
          )}
        </div>
        {currentSessionId && (
          <button
            onClick={() => deleteSession(currentSessionId)}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-gray-500 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all"
          >
            <Trash2 size={13} />
            <span>Clear</span>
          </button>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 md:px-8 lg:px-16 xl:px-24 py-6">
        {messages.length === 0 ? (
          <WelcomeScreen onSuggestion={sendMessage} />
        ) : (
          <div className="max-w-2xl mx-auto flex flex-col gap-5">
            {messages.map((msg, i) => (
              <MessageBubble key={i} message={msg} />
            ))}
            {loading && <TypingIndicator />}
            <div ref={bottomRef} />
          </div>
        )}
      </div>

      {/* Input */}
      <div className="px-4 md:px-8 lg:px-16 xl:px-24 py-4 shrink-0">
        <div className="max-w-2xl mx-auto">
          <MessageInput onSend={sendMessage} disabled={loading} />
          <p className="text-center text-[11px] text-gray-700 mt-2">
            Gemini can make mistakes. Verify important information.
          </p>
        </div>
      </div>
    </div>
  );
}
