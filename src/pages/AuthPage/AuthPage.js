import React, { useState } from "react";

import SignUp from "./SignUp";
import Signin from "./Signin";

import "./auth.css";

const AuthPage = ({ setUserData }) => {
  const [showAuth, setShowAuth] = useState("in");

  return (
    <div className="auth-page">
      {showAuth === "in" ? (
        <Signin setShowAuth={setShowAuth} setUserData={setUserData} />
      ) : (
        <SignUp setShowAuth={setShowAuth} setUserData={setUserData} />
      )}
    </div>
  );
};

export default AuthPage;
