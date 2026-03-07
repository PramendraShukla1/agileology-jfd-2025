import { createContext, useContext, useState, useCallback } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const ChatContext = createContext(null);

export function ChatProvider({ children }) {
  const [sessions, setSessions] = useState([]);
  const [currentSessionId, setCurrentSessionId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sessionsLoading, setSessionsLoading] = useState(false);

    const API = axios.create({
    baseURL:"http://localhost:5009"
  })

  const fetchSessions = useCallback(async () => {
    setSessionsLoading(true);
    try {
      const { data } = await API.get("/api/chat/sessions");
      setSessions(data);
    } catch (err) {
      console.error("Failed to load sessions:", err);
    } finally {
      setSessionsLoading(false);
    }
  }, []);

  const loadSession = useCallback(async (sessionId) => {
    try {
      const { data } = await API.get(`/api/chat/history/${sessionId}`);
      setCurrentSessionId(sessionId);
      setMessages(data.messages);
    } catch (err) {
      console.error("Failed to load session:", err);
    }
  }, []);

  const startNewChat = useCallback(() => {
    setCurrentSessionId(null);
    setMessages([]);
  }, []);

  const sendMessage = useCallback(
    async (text) => {
      const userMsg = { role: "user", content: text, timestamp: new Date() };
      setMessages((prev) => [...prev, userMsg]);
      setLoading(true);

      try {
        const { data } = await API.post("/api/chat/send", {
          message: text,
          sessionId: currentSessionId,
        });

        setCurrentSessionId(data.sessionId);

        const aiMsg = {
          role: "model",
          content: data.response,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, aiMsg]);

        // Refresh session list
        fetchSessions();
      } catch (err) {
        const errMsg = {
          role: "model",
          content:
            "⚠️ Sorry, I couldn't connect to the server. Make sure the backend is running and your Gemini API key is configured.",
          timestamp: new Date(),
          isError: true,
        };
        setMessages((prev) => [...prev, errMsg]);
      } finally {
        setLoading(false);
      }
    },
    [currentSessionId, fetchSessions]
  );

  const deleteSession = useCallback(
    async (sessionId) => {
      try {
        await API.delete(`/api/chat/${sessionId}`);
        setSessions((prev) => prev.filter((s) => s.sessionId !== sessionId));
        if (currentSessionId === sessionId) {
          startNewChat();
        }
      } catch (err) {
        console.error("Failed to delete session:", err);
      }
    },
    [currentSessionId, startNewChat]
  );

  return (
    <ChatContext.Provider
      value={{
        sessions,
        currentSessionId,
        messages,
        loading,
        sessionsLoading,
        fetchSessions,
        loadSession,
        startNewChat,
        sendMessage,
        deleteSession,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export const useChat = () => useContext(ChatContext);
