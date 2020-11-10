import "./App.css";
import HomePage from "./pages/homePage";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export const HatsPage = () => (
  <div>
    <h1>HATSPAGE</h1>{" "}
  </div>
);

export default App;
