import { Sparkles } from "lucide-react";

export default function TypingIndicator() {
  return (
    <div className="flex gap-3 animate-fade-in">
      <div className="w-8 h-8 rounded-xl shrink-0 flex items-center justify-center bg-gradient-to-br from-gem-blue to-gem-teal text-white mt-1">
        <Sparkles size={15} />
      </div>
      <div className="bg-surface-800 border border-white/5 rounded-2xl rounded-tl-sm px-4 py-3.5 flex items-center gap-1.5">
        <span className="typing-dot" />
        <span className="typing-dot" />
        <span className="typing-dot" />
      </div>
    </div>
  );
}
