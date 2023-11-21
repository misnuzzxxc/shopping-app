import React from "react";
import { Login } from "../../store/action";
import DialogBox from "../DigalogBox";
const LoginSignup = () => {
  return (
    <div>
      <DialogBox method={() => Login()} />
    </div>
  );
};

export default LoginSignup;
