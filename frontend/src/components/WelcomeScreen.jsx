import { Sparkles } from "lucide-react";

const SUGGESTIONS = [
  { icon: "💡", text: "Explain React hooks with examples" },
  { icon: "🔐", text: "How does JWT authentication work?" },
  { icon: "🗄️", text: "Write a MongoDB aggregation pipeline" },
  { icon: "⚡", text: "What's new in JavaScript ES2024?" },
  { icon: "🎨", text: "Design a REST API for a blog app" },
  { icon: "🤖", text: "Compare SQL vs NoSQL databases" },
];

export default function WelcomeScreen({ onSuggestion }) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6 py-12 animate-fade-in">
      {/* Logo */}
      <div className="relative mb-6">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gem-blue via-gem-teal to-gem-green flex items-center justify-center shadow-xl shadow-blue-500/20">
          <Sparkles size={28} className="text-white" />
        </div>
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-gem-blue to-gem-green opacity-20 blur-lg" />
      </div>

      <h1 className="text-2xl font-semibold text-white mb-2">
        Hello, Developer 👋
      </h1>
      <p className="text-gray-500 text-sm mb-10 text-center max-w-sm">
        This is a MERN + Gemini API demo. Start chatting or pick a suggestion
        below.
      </p>

      {/* Suggestion chips */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full max-w-xl">
        {SUGGESTIONS.map((s) => (
          <button
            key={s.text}
            onClick={() => onSuggestion(s.text)}
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-surface-800 border border-white/5 text-left text-sm text-gray-300 hover:text-white hover:border-white/15 hover:bg-white/5 transition-all group"
          >
            <span className="text-base shrink-0">{s.icon}</span>
            <span className="leading-snug group-hover:text-white transition-colors">
              {s.text}
            </span>
          </button>
        ))}
      </div>

      {/* Tech stack badges */}
      <div className="flex items-center gap-2 mt-10 flex-wrap justify-center">
        {["MongoDB", "Express.js", "React", "Node.js", "Gemini API", "Tailwind CSS"].map(
          (t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] text-gray-500 font-medium tracking-wide"
            >
              {t}
            </span>
          )
        )}
      </div>
    </div>
  );
}
