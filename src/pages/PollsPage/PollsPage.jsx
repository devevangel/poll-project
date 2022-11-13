import React from "react";
import { useNavigate } from "react-router-dom";

import PollItem from "../../components/PollItem";

import "./polls.css";

const Polls = () => {
  const navigate = useNavigate();

  const handleVote = () => {
    console.log("vote");
  };

  return (
    <section className="polls-section">
      <button onClick={() => navigate("/")} className="logout-button">
        Logout
      </button>
      <div className="polls-containers">
        <PollItem
          id={1}
          name={"Option 1"}
          numOfVotes={5000}
          handleVote={handleVote}
        />
        <PollItem
          id={2}
          name={"Option 2"}
          numOfVotes={1000}
          handleVote={handleVote}
        />
        <PollItem
          id={3}
          name={"Option 3"}
          numOfVotes={500}
          handleVote={handleVote}
        />
        <PollItem
          id={4}
          name={"Option 4"}
          numOfVotes={8000}
          handleVote={handleVote}
        />
      </div>
    </section>
  );
};

export default Polls;
