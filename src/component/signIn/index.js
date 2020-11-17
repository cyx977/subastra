import React, { Component } from "react";
import FormInput from "../formInput";
import "./signIn.styles.scss";
import CustomButton from "../customButton";
import { signinWithGoogle, signinWithFacebook } from "../../firebase/firebase.utils";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
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
          <CustomButton type="submit">Submit</CustomButton>
          <CustomButton onClick={signinWithGoogle}>login with google</CustomButton>
          <CustomButton onClick={signinWithFacebook}>login with facebook</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
