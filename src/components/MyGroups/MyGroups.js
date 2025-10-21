import React from "react";
import { Link } from "react-router-dom";
import groups from "../../data/groups.json";      // centralized data
import "./MyGroups.css";

const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop"; // neutral campus/classroom

export default function MyGroups() {
  // joined only, limit to 4
  const myGroups = groups.filter(g => g.joined).slice(0, 4);

  return (
    <section className="mg">
      <header className="mg__header">
        <h3>My Groups</h3>
        <Link to="/groups" className="mg__viewall">View All</Link>
      </header>

      <div className="mg__grid">
        {myGroups.map(g => (
          <Link
            key={g.id}
            to={`/groups/${g.id}`}
            className="mg__card"
            aria-label={`${g.name}, ${g.members} members`}
          >
            <img
              src={g.image || FALLBACK_IMG}
              alt={g.name}
              className="mg__img"
              onError={(e) => { e.currentTarget.src = FALLBACK_IMG; }}
            />
            <div className="mg__overlay" />
            <div className="mg__text">
              <div className="mg__title">{g.name}</div>
              <div className="mg__meta">{g.members} members</div>
            </div>
          </Link>
        ))}

        {/* empty state if user hasn't joined any */}
        {myGroups.length === 0 && (
          <div className="mg__empty">
            You haven’t joined any groups yet. Explore the <Link to="/groups">Discover</Link> tab.
          </div>
        )}
      </div>
    </section>
  );
}
