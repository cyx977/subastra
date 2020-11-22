import "./App.css";
import HomePage from "./pages/homePage";
import { Link, Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop";
import Header from "./component/header";
import SignInAndSignUpPage from "./pages/signInSignUp";
import { auth } from "./firebase/firebase.utils";
import { Component } from "react";
import { createUserProfileDocument } from "./firebase/firebase.utils";
import { setUserAction } from "./redux1/user/userAction";
import { connect } from "react-redux";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(
      async (user) => {
        if (user == null) {
          this.props.setCurrentUser({
            currentUser: null,
          });
        } else {
          console.log("testXXXXX");
          try {
            const userRef = await createUserProfileDocument(user);
            // userRef.onSnapshot(
            //   (snapshot) => {
            //     this.props.setCurrentUser({
            //       currentUser: {
            //         id: snapshot.id,
            //         ...snapshot.data(),
            //       },
            //     });
            //     // store.dispatch(setUserAction(user));
            //   },
            //   (e) => console.log("error po vayo")
            // );
            const snapshot = await userRef.get();
            this.props.setCurrentUser({
              currentUser: {
                id: snapshot.id,
                ...snapshot.data(),
              },
            });
          } catch (e) {
            console.log("error vayo");
          }
        }
      },
      (e) => console.log("second param bata", e)
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Header></Header>
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
    <h1>HATSPAGE</h1>{" "}
    <Link to="" onClick={async () => {}}>
      Test
    </Link>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setUserAction(user)),
});

export default connect(null, mapDispatchToProps)(App);
