import React from "react";
import { Link } from "react-router-dom";
import threads from "../../data/chats.json";
import "./Chat.css";

const FALLBACK_AVATAR =
  "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop";

function formatListTime(iso) {
  const d = new Date(iso);
  const now = new Date();
  const sameDay = d.toDateString() === now.toDateString();
  if (sameDay) {
    return d.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  }
  const yday = new Date(now);
  yday.setDate(now.getDate() - 1);
  if (d.toDateString() === yday.toDateString()) return "Yesterday";
  return d.toLocaleDateString();
}

export default function ChatsList() {
  // sort newest first
  const items = [...threads].sort(
    (a, b) => new Date(b.lastTime) - new Date(a.lastTime)
  );

  return (
    <div className="chat-page">
      <h2 className="chat-title">Messages</h2>

      <div className="chat-list">
        {items.map((t) => {
          const last = t.messages[t.messages.length - 1];
          return (
            <Link key={t.id} to={`/chat/${t.id}`} className="chat-item">
              <img
                className="chat-item__avatar"
                src={t.person.avatar}
                alt={t.person.name}
                onError={(e) => (e.currentTarget.src = FALLBACK_AVATAR)}
              />
              <div className="chat-item__content">
                <div className="chat-item__row">
                  <span className="chat-item__name">{t.person.name}</span>
                  <span className="chat-item__time">
                    {formatListTime(t.lastTime)}
                  </span>
                </div>
                <div className="chat-item__row">
                  <span className="chat-item__preview">{last?.text}</span>
                  {t.unread > 0 && (
                    <span className="chat-item__badge">{t.unread}</span>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
