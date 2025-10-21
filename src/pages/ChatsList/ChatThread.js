import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import seedThreads from "../../data/chats.json";
import "./Chat.css";

const FALLBACK_AVATAR =
  "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop";

function formatBubbleTime(iso) {
  const d = new Date(iso);
  return d.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

export default function ChatThread() {
  const { id } = useParams();            // v5 route: /chat/:id
  const thread = useMemo(
    () => seedThreads.find((t) => t.id === id) || seedThreads[0],
    [id]
  );

  const [messages, setMessages] = useState(thread.messages);
  const [input, setInput] = useState("");
  const scrollerRef = useRef(null);

  // auto-scroll to newest message
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    const now = new Date().toISOString();
    setMessages((m) => [
      ...m,
      { id: `m-${m.length + 1}`, from: "me", text, time: now },
    ]);
    setInput("");
  };

  const onEnter = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <div className="thread">
      {/* Header */}
      <header className="thread__header">
        <Link to="/chat" className="thread__back" aria-label="Back">←</Link>
        <img
          className="thread__avatar"
          src={thread.person.avatar}
          alt={thread.person.name}
          onError={(e) => (e.currentTarget.src = FALLBACK_AVATAR)}
        />
        <div className="thread__meta">
          <div className="thread__name">{thread.person.name}</div>
          <div className="thread__subtitle">{thread.person.subtitle}</div>
        </div>
      </header>

      {/* Messages */}
      <div className="thread__scroller" ref={scrollerRef}>
        {messages.map((m) => (
          <div
            key={m.id}
            className={`bubble ${m.from === "me" ? "bubble--me" : "bubble--them"}`}
          >
            <div className="bubble__text">{m.text}</div>
            <div className="bubble__time">{formatBubbleTime(m.time)}</div>
          </div>
        ))}
      </div>

      {/* Composer */}
      <form
        className="composer"
        onSubmit={(e) => {
          e.preventDefault();
          send();
        }}
      >
        <button type="button" className="composer__emoji" aria-label="emoji">
          🙂
        </button>
        <input
          className="composer__input"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onEnter}
        />
        <button type="submit" className="composer__send" aria-label="send">
          📨
        </button>
      </form>
    </div>
  );
}
