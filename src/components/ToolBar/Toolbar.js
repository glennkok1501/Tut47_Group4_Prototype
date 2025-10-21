import React from "react";  
import "./Toolbar.css";

const Toolbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-gradient fixed-top shadow-sm">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div>
            <div className="pb-0 fw-bold">
          BuddyUp
        </div>
        <div className="p-0">
            Connect. Explore. Make Friends.
        </div>
        </div>
        
        
        <div className="icon-container">🌍</div>
      </div>
    </nav>
  );
};

export default Toolbar;
