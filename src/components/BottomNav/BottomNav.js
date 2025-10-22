import React from "react";
import { NavLink } from "react-router-dom";
import "./BottomNav.css";

const TABS = [
  { key: "home", label: "Home", emoji: "🏠", url: "/Tut47_Group4_Prototype" },
  { key: "match", label: "Match", emoji: "👥", url: "/connections" },
  { key: "groups", label: "Groups", emoji: "🔳", url: "/groups" },
  { key: "chat", label: "Chat", emoji: "💬", url: "/chat" },
  { key: "profile", label: "Profile", emoji: "👤", url: "/profile" },
];

const BottomNav = () => {
  return (
    <nav className="bottom-nav" role="navigation" aria-label="Primary">
      {TABS.map(({ key, label, emoji, url }) => (
        <NavLink
          key={key}
          exact={url === "/"}         // exact match for home route
          to={url}
          className="bottom-nav__item"
          activeClassName="is-active" // <-- v5 way
        >
          <span className="bottom-nav__icon">{emoji}</span>
          <span className="bottom-nav__label">{label}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default BottomNav;
