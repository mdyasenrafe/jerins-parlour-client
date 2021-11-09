import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/HomePage/Home/Home";
import NotMatch from "./Pages/NotMatchPage/NotMatch";
import Services from "./Pages/HomePage/Services/Services";
import NavBar from "./Pages/SharedPage/NavBar/NavBar";
import PalaceOrder from "./Pages/PalaceOrder/PalaceOrder";

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
        <Route exact path="/services">
          <NavBar></NavBar>
          <Services></Services>
        </Route>
        <Route exact path="/:id/palace-order">
          <NavBar></NavBar>
          <PalaceOrder></PalaceOrder>
        </Route>
        <Route path="*">
          <NotMatch></NotMatch>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
