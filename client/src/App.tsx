import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AuthPage from "./components/Login";
import SignUpPage from "./components/Signup";
import ChangePassword from "./components/ChangePassword";

export const App = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<AuthPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/change-password" element={<ChangePassword />} />
      </Routes>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};
