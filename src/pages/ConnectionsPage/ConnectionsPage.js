import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import connections from "../../data/connections.json";
import "./ConnectionsPage.css";

const ConnectionsPage = () => {
  const { state } = useLocation();
  const [activeTab, setActiveTab] = useState("discover");
  const [index, setIndex] = useState(0);

  const connection = state?.connection || connections[index];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % connections.length); // loops to start
  };

  return (
    <div className="cp">
      {/* Tabs */}
      <div className="cp-tabs">
        <button
          className={`cp-tab ${activeTab === "discover" ? "is-active" : ""}`}
          onClick={() => setActiveTab("discover")}
        >
          Discover
        </button>
        <button
          className={`cp-tab ${activeTab === "matches" ? "is-active" : ""}`}
          onClick={() => setActiveTab("matches")}
        >
          Matches (0)
        </button>
      </div>

      {activeTab === "discover" ? (
        <>
          {/* Card */}
          <div className="cp-card">
            <div className="cp-photo-wrap">
              <img
                className="cp-photo"
                src={connection.photo}
                alt={connection.name}
              />
              <div className="cp-badge">
                <span>✨</span> {connection.score}% Match
              </div>
            </div>

            <div className="cp-body">
              <h2 className="cp-name">{connection.name}</h2>
              <p className="cp-location">📍 {connection.location}</p>
              <p className="cp-about">{connection.about}</p>

              <section className="cp-section">
                <h4 className="cp-section-title">🎓 Major</h4>
                <p className="cp-major">
                  {connection.major} • Year {connection.year}
                </p>
              </section>

              <section className="cp-section">
                <h4 className="cp-section-title">📚 Courses</h4>
                <div className="cp-chips">
                  {connection.courses.map((c) => (
                    <span key={c} className="cp-chip cp-chip--blue">
                      {c}
                    </span>
                  ))}
                </div>
              </section>

              <section className="cp-section">
                <h4 className="cp-section-title">🤍 Interests</h4>
                <div className="cp-chips">
                  {connection.interests.map((i) => (
                    <span key={i} className="cp-chip cp-chip--purple">
                      {i}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </div>

          {/* Buttons */}
          <div className="cp-actions">
            <button className="cp-btn cp-btn--ghost" onClick={handleNext}>
              ✕
            </button>
            <button className="cp-btn cp-btn--connect" onClick={handleNext}>
              👥
            </button>
          </div>
        </>
      ) : (
        <div className="cp-no-matches">
          <div className="cp-no-icon">🤍</div>
          <p className="cp-no-title">No matches yet</p>
          <p className="cp-no-text">Start swiping to find your buddies!</p>
        </div>
      )}
    </div>
  );
};

export default ConnectionsPage;
