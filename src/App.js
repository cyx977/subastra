import "./App.css";
import HomePage from "./pages/homePage";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop";
import Header from "./component/header";
import SignInAndSignUpPage from "./pages/signInSignUp";
import { auth } from "./firebase/firebase.utils";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      number: 9840095714,
    };
  }
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({ ...this.state, currentUser: user });
      console.log(this.state);
    });
  }
  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/shop/hats"
            render={(props) => <HatsPage {...props} ttt="123" />}
          />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export const HatsPage = (props) => (
  <div>
    <h1>HATSPAGE {props.ttt}</h1>{" "}
  </div>
);

export default App;
