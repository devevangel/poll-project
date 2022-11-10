import React from "react";
import { useNavigate } from "react-router-dom";

import "./polls.css";

const Polls = () => {
  const navigate = useNavigate();

  return (
    <section className="polls-section">
      <button onClick={() => navigate("/")} className="logout-button">
        Logout
      </button>
      <div className="polls-containers">
        <div className="poll-item">
          <div className="poll-item-border title">A</div>
          <div className="poll-item-votes votes-text">
            <span className="votes-number">50</span> Votes
          </div>
          <button className="poll-vote-button">Vote</button>
        </div>
        <div className="poll-item">
          <div className="poll-item-border title">B</div>
          <div className="poll-item-votes votes-text">
            <span className="votes-number">50</span> Votes
          </div>
          <button className="poll-vote-button">Vote</button>
        </div>
        <div className="poll-item">
          <div className="poll-item-border title">C</div>
          <div className="poll-item-votes votes-text">
            <span className="votes-number">50</span> Votes
          </div>
          <button className="poll-vote-button">Vote</button>
        </div>
        <div className="poll-item">
          <div className="poll-item-border title">D</div>
          <div className="poll-item-votes votes-text">
            <span className="votes-number">50</span> Votes
          </div>
          <button className="poll-vote-button">Vote</button>
        </div>
      </div>
    </section>
  );
};

export default Polls;
