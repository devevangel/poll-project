import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthPage from "./pages/AuthPage/AuthPage";
import PollsPage from "./pages/PollsPage/PollsPage";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<AuthPage />} />
        <Route exact path="/polls" element={<PollsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
