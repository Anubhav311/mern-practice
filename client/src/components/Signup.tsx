import React, { MouseEventHandler, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
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
import { Link, Router } from "react-router-dom";
import { Checkbox } from "./ui/checkbox";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

type LoginPageProps = {};

const SignUpPage: React.FC<LoginPageProps> = () => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignup = async (e: MouseEventHandler<HTMLButtonElement>) => {
    try {
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!newUser) return;
      navigate("/");
    } catch (error: any) {
      alert(error.message);
    }
    console.log(inputs);
  };
  console.log(inputs);
  return (
    <div>
      <Navbar />
      <Card className="w-1/4 m-auto mt-40">
        <CardHeader>
          <CardTitle className="mb-2">Create Account</CardTitle>
          <CardDescription>
            Start your journey of becomeing a Pro Coder
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Label>Email</Label>
          <Input className="mb-5" onChange={handleChangeInput} name="email" />
          <Label>Password</Label>
          <Input
            className="mb-5"
            onChange={handleChangeInput}
            name="password"
          />
          <div className="flex items-center space-x-2 mb-3">
            <Checkbox id="terms" />
            <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Accept Terms and Conditions
            </Label>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link to="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Button onClick={handleSignup}>Sign Up</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUpPage;
