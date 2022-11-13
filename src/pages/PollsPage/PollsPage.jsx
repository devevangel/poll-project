import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import PollItem from "../../components/PollItem";

import "./polls.css";

const Polls = ({ setUserData, userData }) => {
  const [votesData, setVotesData] = useState({});
  const [loading, setLoading] = useState(false);
  const [voting, setVoting] = useState(false);
  const [voted, setVoted] = useState(localStorage.getItem("voted"));

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    axios
      .get(`https://polls-server.onrender.com/polls`, {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then((response) => {
        const votesInfo = response.data;

        setVotesData({
          opt_1: votesInfo.opt_1,
          opt_2: votesInfo.opt_2,
          opt_3: votesInfo.opt_3,
          opt_4: votesInfo.opt_4,
          total: votesInfo.total,
        });

        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);

        setLoading(false);
      });
  }, [userData]);

  const handleVote = (id, name) => {
    if (voted) return;

    const voteData = {
      userId: userData.id,
      candidateId: id,
      candidateName: name,
    };

    setVoting(true);
    axios
      .post(`https://polls-server.onrender.com/polls`, voteData, {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then((response) => {
        const newVoteData = response.data;
        setVotesData({
          opt_1: newVoteData.opt_1,
          opt_2: newVoteData.opt_2,
          opt_3: newVoteData.opt_3,
          opt_4: newVoteData.opt_4,
          total: newVoteData.total,
        });
        setVoted(true);
        localStorage.setItem("voted", true);
        setVoting(false);
      })
      .catch((error) => {
        console.log(error.message);
        setVoting(false);
      });
  };

  const handleLogOut = () => {
    setUserData({
      token: "",
      firstName: "",
      lastName: "",
      id: "",
    });

    localStorage.removeItem("token");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("id");

    navigate("/");
  };

  return (
    <section className="polls-section">
      <button onClick={handleLogOut} className="logout-button">
        Logout
      </button>
      {loading ? (
        "Loading..."
      ) : (
        <div className="polls-containers">
          <PollItem
            id={"opt_1"}
            name={"Option 1"}
            numOfVotes={votesData.opt_1}
            totalVotes={votesData.total}
            handleVote={handleVote}
            voting={voting}
          />
          <PollItem
            id={"opt_2"}
            name={"Option 2"}
            numOfVotes={votesData.opt_2}
            totalVotes={votesData.total}
            handleVote={handleVote}
            voting={voting}
          />
          <PollItem
            id={"opt_3"}
            name={"Option 3"}
            numOfVotes={votesData.opt_3}
            totalVotes={votesData.total}
            handleVote={handleVote}
            voting={voting}
          />
          <PollItem
            id={"opt_4"}
            name={"Option 4"}
            numOfVotes={votesData.opt_4}
            totalVotes={votesData.total}
            handleVote={handleVote}
            voting={voting}
          />
        </div>
      )}
    </section>
  );
};

export default Polls;
