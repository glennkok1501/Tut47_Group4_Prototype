import React, { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import allConnections from "../../data/connections.json";
import "./ConnectionsPage.css";

const FALLBACK_PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";

const ConnectionsPage = () => {
  const { state } = useLocation();

  // If we navigated with state, find that person’s index; else 0
  const initialIndex = useMemo(() => {
    if (state?.connection?.id) {
      const idx = allConnections.findIndex((c) => c.id === state.connection.id);
      return idx >= 0 ? idx : 0;
    }
    return 0;
  }, [state]);

  const [activeTab, setActiveTab] = useState("discover");
  const [index, setIndex] = useState(initialIndex);

  const list = allConnections; // keep rename for clarity
  const connection = list[index] || state?.connection || {};

  const handleNext = () => {
    if (list.length === 0) return;
    setIndex((prev) => (prev + 1) % list.length);
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
                src={connection.photo || FALLBACK_PHOTO}
                alt={connection.name || "Profile photo"}
                onError={(e) => (e.currentTarget.src = FALLBACK_PHOTO)}
              />
              {typeof connection.score === "number" && (
                <div className="cp-badge">
                  <span>✨</span> {connection.score}% Match
                </div>
              )}
            </div>

            <div className="cp-body">
              <h2 className="cp-name">{connection.name || "Unknown"}</h2>
              {connection.location && (
                <p className="cp-location">📍 {connection.location}</p>
              )}
              {connection.about && <p className="cp-about">{connection.about}</p>}

              {(connection.major || connection.year) && (
                <section className="cp-section">
                  <h4 className="cp-section-title">🎓 Major</h4>
                  <p className="cp-major">
                    {connection.major || "—"} • Year {connection.year ?? "—"}
                  </p>
                </section>
              )}

              {Array.isArray(connection.courses) && connection.courses.length > 0 && (
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
              )}

              {Array.isArray(connection.interests) && connection.interests.length > 0 && (
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
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="cp-actions">
            <button className="cp-btn cp-btn--ghost" onClick={handleNext} aria-label="Pass">
              ✕
            </button>
            <button className="cp-btn cp-btn--connect" onClick={handleNext} aria-label="Connect">
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
