import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthPage from "./pages/AuthPage/AuthPage";
import PollsPage from "./pages/PollsPage/PollsPage";

import "./App.css";

const App = () => {
  const [userData, setUserData] = useState({
    token: localStorage.getItem("token"),
    firstName: localStorage.getItem("firstName"),
    lastName: localStorage.getItem("lastName"),
    id: localStorage.getItem("id"),
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            userData.token ? (
              <PollsPage userData={userData} setUserData={setUserData} />
            ) : (
              <AuthPage setUserData={setUserData} />
            )
          }
        />
        <Route
          exact
          path="/polls"
          element={
            userData.token ? (
              <PollsPage userData={userData} setUserData={setUserData} />
            ) : (
              <AuthPage setUserData={setUserData} />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
