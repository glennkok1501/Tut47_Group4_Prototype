// ConnectionsList.js
import React from "react";
import { Link } from "react-router-dom";
import connections from "../../data/connections.json";
import "./ConnectionsList.css";

const ConnectionsList = () => (
  <section className="connections">
    <header className="connections__header">
      <div className="connections__title">
        <span style={{ color: "#ff6a00", fontSize: 18 }}>✦</span>
        <h3>New Connections for You</h3>
      </div>
      <Link to="/Tut47_Group4_Prototype/connections" className="connections__viewall-link">
        View All
      </Link>
    </header>

    <ul className="connections__list">
      {connections.map((c) => (
        <li key={c.id} className="connection-card">
          <Link
            to={{
              pathname: "/Tut47_Group4_Prototype/connections",
              state: { connection: c },
            }}
            className="connection-card__left"
          >
            <img src={c.avatar} alt={c.name} className="connection-card__avatar" />
            <div className="connection-card__info">
              <div className="connection-card__row">
                <span className="connection-card__name">{c.name}</span>
                <span className="connection-card__pill">{c.score}% match</span>
              </div>
              <div className="connection-card__sub">
                {c.major} • Year {c.year}
              </div>
            </div>
          </Link>
          <span className="connection-card__trend" aria-hidden>📈</span>
        </li>
      ))}
    </ul>
  </section>
);

export default ConnectionsList;
