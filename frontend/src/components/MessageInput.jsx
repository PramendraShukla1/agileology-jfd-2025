import { useState, useRef, useEffect } from "react";
import { Send, Square } from "lucide-react";

export default function MessageInput({ onSend, disabled }) {
  const [input, setInput] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        Math.min(textareaRef.current.scrollHeight, 200) + "px";
    }
  }, [input]);

  const handleSend = () => {
    const text = input.trim();
    if (!text || disabled) return;
    onSend(text);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="relative flex items-end gap-3 bg-surface-800 border border-white/10 rounded-2xl px-4 py-3 shadow-lg focus-within:border-white/20 transition-colors">
      <textarea
        ref={textareaRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask Gemini anything..."
        disabled={disabled}
        rows={1}
        className="flex-1 bg-transparent text-gray-200 placeholder-gray-600 resize-none outline-none text-sm leading-relaxed max-h-[200px] disabled:opacity-50"
      />
      <button
        onClick={handleSend}
        disabled={!input.trim() || disabled}
        className={`shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
          input.trim() && !disabled
            ? "bg-gem-blue text-white hover:bg-blue-500 shadow-md shadow-blue-500/20"
            : "bg-white/5 text-gray-600 cursor-not-allowed"
        }`}
      >
        {disabled ? <Square size={15} /> : <Send size={15} />}
      </button>
    </div>
  );
}
