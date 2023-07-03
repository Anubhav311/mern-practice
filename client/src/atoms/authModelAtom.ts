import { atom } from "recoil";

type AuthState = {
  type: "login" | "signup" | "forgotPassword";
};
