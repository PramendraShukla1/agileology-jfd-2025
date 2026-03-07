import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";
import { Copy, Check, User, Sparkles } from "lucide-react";

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1 px-2 py-1 text-[11px] rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
    >
      {copied ? <Check size={12} /> : <Copy size={12} />}
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

export default function MessageBubble({ message }) {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex gap-3 animate-slide-up ${
        isUser ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {/* Avatar */}
      <div
        className={`w-8 h-8 rounded-xl shrink-0 flex items-center justify-center text-sm font-bold mt-1 ${
          isUser
            ? "bg-gradient-to-br from-indigo-500 to-purple-600 text-white"
            : "bg-gradient-to-br from-gem-blue to-gem-teal text-white"
        }`}
      >
        {isUser ? <User size={15} /> : <Sparkles size={15} />}
      </div>

      {/* Bubble */}
      <div
        className={`max-w-[78%] rounded-2xl px-4 py-3 text-sm ${
          isUser
            ? "bg-indigo-600/30 text-gray-100 border border-indigo-500/20 rounded-tr-sm"
            : message.isError
            ? "bg-red-900/20 text-red-300 border border-red-700/30 rounded-tl-sm"
            : "bg-surface-800 text-gray-200 border border-white/5 rounded-tl-sm"
        }`}
      >
        {isUser ? (
          <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
        ) : (
          <div className="prose-chat">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  const codeText = String(children).replace(/\n$/, "");
                  if (!inline && match) {
                    return (
                      <div className="relative group my-2">
                        <div className="flex items-center justify-between bg-[#1e1e1e] px-4 py-1.5 rounded-t-xl border border-white/5 border-b-0">
                          <span className="text-[11px] text-gray-500 font-mono">
                            {match[1]}
                          </span>
                          <CopyButton text={codeText} />
                        </div>
                        <SyntaxHighlighter
                          style={vscDarkPlus}
                          language={match[1]}
                          PreTag="div"
                          customStyle={{
                            margin: 0,
                            borderRadius: "0 0 12px 12px",
                            border: "1px solid rgba(255,255,255,0.05)",
                            borderTop: "none",
                            fontSize: "0.82em",
                          }}
                          {...props}
                        >
                          {codeText}
                        </SyntaxHighlighter>
                      </div>
                    );
                  }
                  return (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {message.content}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}
