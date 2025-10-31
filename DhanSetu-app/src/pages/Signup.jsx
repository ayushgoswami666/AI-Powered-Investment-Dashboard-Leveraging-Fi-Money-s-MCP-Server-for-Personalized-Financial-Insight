// SignUpPage.jsx
import React from "react";
import { SignUp } from "@clerk/clerk-react";

const Signup = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow">
        <SignUp />
      </div>
    </div>
  );
};

export default Signup;
