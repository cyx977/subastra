import React, { Component } from "react";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I Already have an account!</h2>
        <span>Sign In with Email and Password</span>
        <form>
          <input
            name="email"
            type="text"
            value={this.state.email}
            onChange={(e) =>
              this.setState({ ...this.state, email: e.target.value })
            }
          ></input>
        </form>
      </div>
    );
  }
}

export default SignIn;
