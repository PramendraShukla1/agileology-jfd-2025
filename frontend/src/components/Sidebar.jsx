import { useEffect, useState } from "react";
import { useChat } from "../context/ChatContext";
import {
  Plus,
  MessageSquare,
  Trash2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";

function formatDate(dateStr) {
  const d = new Date(dateStr);
  const now = new Date();
  const diff = now - d;
  if (diff < 86400000) return "Today";
  if (diff < 172800000) return "Yesterday";
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export default function Sidebar() {
  const {
    sessions,
    currentSessionId,
    sessionsLoading,
    fetchSessions,
    loadSession,
    startNewChat,
    deleteSession,
  } = useChat();

  const [collapsed, setCollapsed] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    fetchSessions();
  }, [fetchSessions]);

  // Group sessions by date
  const grouped = (Array.isArray(sessions) ? sessions : []).reduce((acc, s) => {
    const label = formatDate(s.updatedAt);
    if (!acc[label]) acc[label] = [];
    acc[label].push(s);
    return acc;
  }, {});

  return (
    <aside
      className={`flex flex-col h-full bg-surface-900 border-r border-white/5 transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-white/5">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-gem-blue to-gem-teal flex items-center justify-center">
              <Sparkles size={14} className="text-white" />
            </div>
            <span className="font-semibold text-sm text-white">GeminiChat</span>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors ml-auto"
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      {/* New Chat Button */}
      <div className="p-3">
        <button
          onClick={startNewChat}
          className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all text-sm font-medium border border-white/5 hover:border-white/10 ${
            collapsed ? "justify-center" : ""
          }`}
        >
          <Plus size={16} className="shrink-0" />
          {!collapsed && <span>New Chat</span>}
        </button>
      </div>

      {/* Sessions */}
      <div className="flex-1 overflow-y-auto px-2 pb-4">
        {!collapsed && (
          <>
            {sessionsLoading ? (
              <div className="flex items-center justify-center py-8">
                <div className="flex gap-1">
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                </div>
              </div>
            ) : sessions.length === 0 ? (
              <p className="text-center text-gray-600 text-xs py-8 px-4">
                No conversations yet.
                <br />
                Start a new chat!
              </p>
            ) : (
              Object.entries(grouped).map(([label, group]) => (
                <div key={label} className="mb-3">
                  <p className="text-[10px] font-semibold text-gray-600 uppercase tracking-wider px-2 mb-1">
                    {label}
                  </p>
                  {group.map((session) => (
                    <div
                      key={session.sessionId}
                      className={`group relative flex items-center rounded-lg cursor-pointer transition-all mb-0.5 ${
                        currentSessionId === session.sessionId
                          ? "bg-white/10 text-white"
                          : "text-gray-400 hover:bg-white/5 hover:text-gray-200"
                      }`}
                      onMouseEnter={() => setHoveredId(session.sessionId)}
                      onMouseLeave={() => setHoveredId(null)}
                      onClick={() => loadSession(session.sessionId)}
                    >
                      <div className="flex items-center gap-2 px-2.5 py-2 flex-1 min-w-0">
                        <MessageSquare size={13} className="shrink-0 opacity-60" />
                        <span className="text-xs truncate">{session.title}</span>
                      </div>
                      {hoveredId === session.sessionId && (
                        <button
                          className="absolute right-1.5 p-1 rounded-md text-gray-500 hover:text-red-400 hover:bg-red-400/10 transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteSession(session.sessionId);
                          }}
                        >
                          <Trash2 size={12} />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              ))
            )}
          </>
        )}
      </div>

      {/* Footer */}
      {!collapsed && (
        <div className="p-3 border-t border-white/5">
          <p className="text-[10px] text-gray-600 text-center">
            Powered by Google Gemini API
          </p>
        </div>
      )}
    </aside>
  );
}
