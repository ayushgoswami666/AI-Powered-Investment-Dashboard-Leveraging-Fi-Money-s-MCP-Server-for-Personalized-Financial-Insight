// SignInPage.jsx
import React from "react";
import { SignIn } from "@clerk/clerk-react";

const Login = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow">
        <SignIn />
      </div>
    </div>
  );
};

export default Login;
