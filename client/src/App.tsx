import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AuthPage from "./components/Login";

export const App = () => {
  return (
    <div>
      <Navbar />
      <h1 className="ml-10 text-white">Hello World</h1>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </div>
  );
};
