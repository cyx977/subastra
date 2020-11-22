import React, { Component } from "react";
import FormInput from "../formInput";
import "./signIn.styles.scss";
import CustomButton from "../customButton";
import {
  signinWithGoogle,
  // signinWithFacebook,
  auth,
} from "../../firebase/firebase.utils";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await auth.signInWithEmailAndPassword(
        this.state.email,
        this.state.password
      );
    } catch (e) {
      console.log(e);
    }
    this.setState({ email: "", password: "" });
  };

  onChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I Already have an account!</h2>
        <span>Sign In with Email and Password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="text"
            value={this.state.email}
            handleChange={this.onChange}
            label="Email"
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.onChange}
            label="Password"
          />
          <div className="buttons">
            <CustomButton type="submit">Submit</CustomButton>
            <CustomButton
              onClick={signinWithGoogle}
              signinWithGoogle={true}
              type="button"
            >
              signin with google
            </CustomButton>
            {
              //   <CustomButton onClick={signinWithFacebook} type="button">
              //   {" "}
              //   login with facebook
              // </CustomButton>
            }
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
