import "./App.css";
import HomePage from "./pages/homePage";
import { Route, Switch } from "react-router-dom";
import ShopPage from './pages/shop';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/hats" render={(props)=>(<HatsPage {...props} ttt="123"/>)} />
        <Route exact path="/shop" component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export const HatsPage = (props) => (
  <div>
    <h1>HATSPAGE {props.ttt}</h1>{" "}
  </div>
);

export default App;
