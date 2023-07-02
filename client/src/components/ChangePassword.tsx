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

type LoginPageProps = {};

const ChangePassword: React.FC<LoginPageProps> = () => {
  return (
    <div>
      <Navbar />
      <Card className="w-1/4 m-auto mt-40">
        <CardHeader>
          <CardTitle className="mb-2">Change Password</CardTitle>
          <CardDescription>
            You'll receive an email for changing password
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Label>Email</Label>
          <Input className="mb-5" />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link to="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Button>Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ChangePassword;
