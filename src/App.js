import "./App.css";
import HomePage from "./pages/homePage";
import { Link, Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop";
import Header from "./component/header";
import SignInAndSignUpPage from "./pages/signInSignUp";
import { auth } from "./firebase/firebase.utils";
import { Component } from "react";
import { createUserProfileDocument } from "./firebase/firebase.utils";
import { store } from "./redux/store";
import { setCurrentUser } from "./redux/user/userActions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      console.log("user is ", user);
      if (user != null) {
        try {
          const userRef = await createUserProfileDocument(user);
          userRef.onSnapshot((snapshot) => {
            // this.setState({
            //   currentUser: {
            //     id: snapshot.id,
            //     ...snapshot.data(),
            //   },
            // });
            store.dispatch(
              setCurrentUser({ id: snapshot.id, ...snapshot.data() })
            );
          });
        } catch (e) {
          console.log("error vayo");
        }
      }
      this.setState({ currentUser: user });
    });
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
    <h1>HATSPAGE {props.ttt}</h1>{" "}
    <Link
      to=""
      onClick={async () => {
        createUserProfileDocument();
      }}
    >
      Test
    </Link>
  </div>
);

export default App;
