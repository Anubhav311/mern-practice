import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AuthPage from "./components/Login";
import SignUpPage from "./components/Signup";
import ChangePassword from "./components/ChangePassword";
import { Link } from "react-router-dom";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import { Label } from "@radix-ui/react-label";
import ProblemsTable from "./components/ProblemsTable";
import WorkSpace from "./components/Workspace";
import ProtectedRoute from "./components/ProtectedRoute";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route
          path="/problems"
          element={
            <ProtectedRoute>
              <ProblemsTable />
            </ProtectedRoute>
          }
        />
        <Route
          path="/problems/:problemId"
          element={
            <ProtectedRoute>
              <WorkSpace />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

const Home = () => {
  console.log("its working hell");

  return (
    <div className="h-screen flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between sm:px-12 px-2 md:px-24">
          <Link to="/" className="flex items-center justify-center">
            <p className="text-lg font-bold h-10 flex items-center">ProCoder</p>
          </Link>
          <div className="flex items-center">
            <Link to="/login">
              <Label className="cursor-pointer">Login</Label>
            </Link>
          </div>
        </div>
        <Separator />
      </div>
      <div className="m-auto flex flex-col items-center">
        <p className="text-4xl mb-5 font-bold">Advanced JavaScript Problems</p>
        <p className="text-4xl font-bold">Designed for the Real World</p>
      </div>
      <div></div>
    </div>
  );
};
