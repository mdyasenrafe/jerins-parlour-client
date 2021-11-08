import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/HomePage/Home/Home";
import NotMatch from "./Pages/NotMatchPage/NotMatch";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <NotMatch></NotMatch>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
