import React from "react";

const PollItem = ({ id, name, numOfVotes, handleVote, total, voting }) => {
  return (
    <div className="poll-item">
      <div className="poll-item-border title">{name}</div>
      <div className="poll-item-votes votes-text">
        <span className="votes-number">{numOfVotes}</span> Votes
      </div>
      <button className="poll-vote-button" onClick={() => handleVote(id, name)}>
        {voting ? "Voting..." : "Vote"}
      </button>
    </div>
  );
};

export default PollItem;
