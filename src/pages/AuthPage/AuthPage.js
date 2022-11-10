import React, { useState } from "react";

import SignUp from "./SignUp";
import Signin from "./Signin";

import "./auth.css";

const AuthPage = () => {
  const [showAuth, setShowAuth] = useState("in");

  return (
    <div className="auth-page">
      {showAuth === "in" ? (
        <Signin setShowAuth={setShowAuth} />
      ) : (
        <SignUp setShowAuth={setShowAuth} />
      )}
    </div>
  );
};

export default AuthPage;
