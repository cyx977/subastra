import "./App.css";
import HomePage from "./pages/homePage";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import ShopPage from "./pages/shop";
import Header from "./component/header";
import SignInAndSignUpPage from "./pages/signInSignUp";
import { auth } from "./firebase/firebase.utils";
import { Component } from "react";
import { createUserProfileDocument } from "./firebase/firebase.utils";
import { setUserAction } from "./redux/user/userAction";
import { connect } from "react-redux";
import { PageNotFound } from "./component/404";

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
          try {
            const userRef = await createUserProfileDocument(user);
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
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser?.currentUser == null ? (
                <SignInAndSignUpPage />
              ) : (
                <Redirect to="/"></Redirect>
              )
            }
          />
          <Route path="*" component={PageNotFound}></Route>
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

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setUserAction(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
