// src/pages/GroupsPage.js
import React, { useEffect, useMemo, useState } from "react";
import groupsSeed from "../../data/groups.json";
import "./GroupsPage.css";


export default function GroupsPage() {
  const [tab, setTab] = useState("my");      // "my" | "discover"
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    setGroups(groupsSeed);                   // load centralized JSON
  }, []);

  const myGroups = useMemo(() => groups.filter(g => g.joined), [groups]);
  const discoverGroups = useMemo(() => groups.filter(g => !g.joined), [groups]);
  const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop"; // neutral campus/classroom

  const toggleJoin = (id) => {
    setGroups((prev) =>
      prev.map((g) =>
        g.id === id ? { ...g, joined: !g.joined, members: g.members + (g.joined ? -1 : 1) } : g
      )
    );
  };

  const shown = tab === "my" ? myGroups : discoverGroups;

  return (
    <div className="groups-page">
      <h2>Groups</h2>

      {/* segmented tabs */}
      <div className="groups-tabs">
        <button
          className={tab === "my" ? "active" : ""}
          onClick={() => setTab("my")}
        >
          My Groups ({myGroups.length})
        </button>
        <button
          className={tab === "discover" ? "active" : ""}
          onClick={() => setTab("discover")}
        >
          Discover
        </button>
      </div>

      {/* list */}
      <div className="groups-list">
        {shown.map((g) => (
          <article key={g.id} className="group-card">
            <div className="group-image">
              <img src={g.image} alt={g.name}
              onError={(e) => { e.currentTarget.src = FALLBACK_IMG; }}
               />
              <span className="group-tag">{g.category}</span>
            </div>

            <div className="group-info">
              <h3>{g.name}</h3>
              <p className="group-desc">{g.description}</p>

              <div className="group-meta">
                <span>👥 {g.members} members</span>

                {g.joined ? (
                  <button
                    className="joined-btn"
                    onClick={() => toggleJoin(g.id)}
                  >
                    ✓ Joined
                  </button>
                ) : (
                  <button
                    className="join-btn"
                    onClick={() => toggleJoin(g.id)}
                  >
                    Join Group
                  </button>
                )}
              </div>
            </div>
          </article>
        ))}

        {/* Empty states */}
        {shown.length === 0 && (
          <div className="groups-empty">
            {tab === "my"
              ? "You're not in any groups yet. Discover something interesting!"
              : "No groups to discover right now."}
          </div>
        )}
      </div>
    </div>
  );
}
