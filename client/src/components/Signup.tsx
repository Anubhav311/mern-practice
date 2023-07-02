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
import { Checkbox } from "./ui/checkbox";

type LoginPageProps = {};

const SignUpPage: React.FC<LoginPageProps> = () => {
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
          <Input className="mb-5" />
          <Label>Password</Label>
          <Input className="mb-5" />
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
          <Button>Sign Up</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUpPage;
