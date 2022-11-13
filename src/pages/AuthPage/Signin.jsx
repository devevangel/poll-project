import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./auth.css";

const Signin = ({ setShowAuth, setUserData }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    setLoading(true);

    const userData = {
      userEmail: email,
      userPassword: password,
    };

    axios
      .post(`https://polls-server.onrender.com/users/signin`, userData, {
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        const userData = response.data;
        setUserData({
          token: userData.token,
          firstName: userData.user.firstName,
          lastName: userData.user.lastName,
          id: userData._id,
        });
        localStorage.setItem("token", userData.token);
        localStorage.setItem("firstName", userData.user.firstName);
        localStorage.setItem("lastName", userData.user.lastName);
        localStorage.setItem("id", userData.user._id);
        setLoading(false);
        navigate("/polls");
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });

    setEmail("");
    setPassword("");
  };

  return (
    <div style={{ height: "300px" }} className="auth-actions-container">
      <h3 className="auth-action-title">Sign In</h3>
      <div className="form-controller">
        <input
          className="auth-input"
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-controller">
        <input
          className="auth-input"
          type="password"
          required
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button className="submit-button" onClick={handleSubmit}>
          {loading ? "...loading" : "Submit"}
        </button>
      </div>
      <div>
        <p>
          Don't have an account yet?
          <span className="link-to-signup" onClick={() => setShowAuth("up")}>
            {" "}
            SignUp
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signin;
