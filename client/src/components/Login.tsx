import React from "react";
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

type LoginPageProps = {};

const AuthPage: React.FC<LoginPageProps> = () => {
  const handleClick = () => {};
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
          <Input className="mb-5" />
          <Label>Password</Label>
          <Input className="mb-5" />

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
          <Button onClick={handleClick}>Login</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AuthPage;
