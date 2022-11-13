import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./auth.css";

const SignUp = ({ setShowAuth, setUserData }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const userData = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    };

    axios
      .post(`https://polls-server.onrender.com/users/signup`, userData, {
        headers: {
          "content-type": "application/json",
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
        setLoading(false);
        console.log(error.message);
      });
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div style={{ height: "400px" }} className="auth-actions-container">
      <h3 className="auth-action-title">Sign Up</h3>
      <div className="form-controller">
        <input
          className="auth-input"
          type="text"
          required
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="form-controller">
        <input
          className="auth-input"
          type="text"
          required
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
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
        <button className="submit-button" onClick={(e) => handleSubmit(e)}>
          {loading ? "...loading" : "Submit"}
        </button>
      </div>
      <div>
        <p>
          Already have an account?
          <span className="link-to-signup" onClick={() => setShowAuth("in")}>
            {" "}
            SignIn
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
