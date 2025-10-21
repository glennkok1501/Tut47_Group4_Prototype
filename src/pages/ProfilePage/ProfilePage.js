import React from "react";
import profile from "../../data/profile.json";
import "./ProfilePage.css";

const AVATAR_FALLBACK =
  "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=512&auto=format&fit=crop";

export default function ProfilePage() {
  return (
    <div className="profile page-with-bottom-nav">
      {/* Header Card */}
      <section className="card profile__header">
        <img
          className="profile__avatar"
          src={profile.avatar}
          alt={profile.name}
          onError={(e) => (e.currentTarget.src = AVATAR_FALLBACK)}
        />
        <h2 className="profile__name">{profile.name}</h2>
        <div className="profile__location">📍 {profile.location}</div>

        <div to="/profile/edit" className="profile__edit">
          ✏️ Edit Profile
        </div>
      </section>

      {/* About Me */}
      <section className="card">
        <h3 className="card__title">About Me</h3>
        <p className="card__body">{profile.about}</p>
      </section>

      {/* Academics */}
      <section className="card">
        <h3 className="card__title">🎓 Academic Information</h3>
        <p className="card__body">
          {profile.academics.major} • Year {profile.academics.year}
        </p>

        <h4 className="card__subtitle">📚 Current Courses</h4>
        <div className="chip-row">
          {profile.courses.map((c) => (
            <span key={c} className="chip chip--blue">
              {c}
            </span>
          ))}
        </div>

        <h4 className="card__subtitle">🤍 Interests</h4>
        <div className="chip-row">
          {profile.interests.map((i) => (
            <span key={i} className="chip chip--purple">
              {i}
            </span>
          ))}
        </div>
      </section>

      {/* Settings */}
      <section className="card">
        <h3 className="card__title">Settings</h3>
        <ul className="settings">
          <li>
            <div to="/settings/account">
              <span>⚙️</span> Account Settings
            </div>
          </li>
          <li>
            <div to="/settings/notifications">
              <span>🔔</span> Notifications
            </div>
          </li>
          <li>
            <div to="/settings/privacy">
              <span>🛡️</span> Privacy & Safety
            </div>
          </li>
          <li className="settings__danger">
            <button type="button" onClick={() => alert('Logged out!')}>
              <span>↪️</span> Log Out
            </button>
          </li>
        </ul>
      </section>

      {/* Stats */}
      <section className="card">
        <h3 className="card__title">My Stats</h3>
        <div className="stats">
          <div className="stat">
            <div className="stat__num">{profile.stats.buddies}</div>
            <div className="stat__label">Buddies</div>
          </div>
          <div className="stat">
            <div className="stat__num">{profile.stats.groups}</div>
            <div className="stat__label">Groups</div>
          </div>
          <div className="stat">
            <div className="stat__num">{profile.stats.events}</div>
            <div className="stat__label">Events</div>
          </div>
        </div>
      </section>

      <div style={{ height: "16px" }} />
    </div>
  );
}
