import React, { Component } from "react";
import FormInput from "../formInput";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import CustomButton from "../customButton";
import "./signUp.styles.scss";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if(password !== confirmPassword){
      alert("passwords don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      let result = await createUserProfileDocument(user, {
        displayName,
      });
      console.log("firestore",result);
    } catch (e) {
      console.log(e);
    }

    this.setState({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };
  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I Don't have an account</h2>
        <span>Sign Up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            label="displayName"
            name="displayName"
            type="text"
            value={this.state.displayName}
            handleChange={this.handleChange}
          ></FormInput>
          <FormInput
            label="email"
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
          ></FormInput>
          <FormInput
            label="password"
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
          ></FormInput>
          <FormInput
            label="confirmPassword"
            name="confirmPassword"
            type="confirmPassword"
            value={this.state.confirmPassword}
            handleChange={this.handleChange}
          ></FormInput>
          <CustomButton>SignUp</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
