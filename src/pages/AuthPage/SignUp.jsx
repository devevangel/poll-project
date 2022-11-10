import React from "react";

import "./auth.css";

const SignUp = ({ setShowAuth }) => {
  return (
    <div style={{ height: "400px" }} className="auth-actions-container">
      <h3 className="auth-action-title">Sign Up</h3>
      <div className="form-controller">
        <input
          className="auth-input"
          type="text"
          required
          placeholder="First Name"
        />
      </div>
      <div className="form-controller">
        <input
          className="auth-input"
          type="text"
          required
          placeholder="Last Name"
        />
      </div>
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
