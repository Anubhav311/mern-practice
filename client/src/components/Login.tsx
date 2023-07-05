import React, { useState, MouseEventHandler } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import Navbar from "./Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { auth } from "..//firebase/firebase";
import { useNavigate } from "react-router-dom";

type LoginPageProps = {};

const AuthPage: React.FC<LoginPageProps> = () => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleClick = async (e: MouseEventHandler<HTMLButtonElement>) => {
    if (!inputs.email || !inputs.password)
      return alert("Please fill all fields");
    try {
      const user = await signInWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!user) return;
      navigate("/");
    } catch (error: any) {
      alert(error.message);
    }
  };
  console.log(user);
  return (
    <div>
      <Navbar />
      <Card className="w-1/4 m-auto mt-40">
        <CardHeader>
          <CardTitle className="mb-2">Welcome Back</CardTitle>
          <CardDescription>Continue the grind. Go Pro Coder.</CardDescription>
        </CardHeader>
        <CardContent>
          <Label>Email</Label>
          <Input className="mb-5" onChange={handleInputChange} name="email" />
          <Label>Password</Label>
          <Input
            className="mb-5"
            onChange={handleInputChange}
            name="password"
          />

          <div className="flex justify-end">
            <Link to="/change-password">
              <p>Forgot Password</p>
            </Link>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link to="/signup">
            <Button variant="outline">Sign Up</Button>
          </Link>
          <Button onClick={handleClick}>
            {loading ? "Logging in..." : "Login"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AuthPage;
