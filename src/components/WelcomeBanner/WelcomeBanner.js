import React from "react";
import "./WelcomeBanner.css";
import profile from "../../data/profile.json";

const WelcomeBanner = ({
  name = "You",
  connections = 3,
  unread = 2,
}) => {
  return (
    <section className="welcome-banner" role="status" aria-live="polite">
      <div className="wb-text">
        <h3 className="wb-title">
          Welcome back, {profile.name}! <span aria-hidden="true">👋</span>
        </h3>
        <p className="wb-subtitle">
          You have {connections} new buddy connections and {unread} unread message
          {unread === 1 ? "" : "s"}
        </p>
      </div>


    <div className="wb-avatar">
        <img src={profile.avatar} alt={`${name}'s profile`} />
    </div>
    </section>
  );
};

export default WelcomeBanner;
