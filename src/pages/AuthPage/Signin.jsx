import React from "react";

import "./auth.css";

const Signin = ({ setShowAuth }) => {
  return (
    <div style={{ height: "300px" }} className="auth-actions-container">
      <h3 className="auth-action-title">Sign In</h3>
      <div className="form-controller">
        <input
          className="auth-input"
          type="email"
          required
          placeholder="Email"
        />
      </div>
      <div className="form-controller">
        <input
          className="auth-input"
          type="password"
          required
          placeholder="password"
        />
      </div>
      <div>
        <button className="submit-button" type="submit">
          Submit
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
