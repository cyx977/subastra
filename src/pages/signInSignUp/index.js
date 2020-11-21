import React from "react";
import "./signInSignUp.styles.scss";
import SignIn from "../../component/signIn";
import SignUp from "../../component/signUp";

function SignInAndSignUpPage(props) {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn></SignIn>
      <SignUp></SignUp>
    </div>
  );
}

export default SignInAndSignUpPage;
