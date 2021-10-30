import { Route, Switch } from "react-router";
import { useState, useEffect } from "react";
import Home from "../Pages/Home/index"
// import LoginPage from "../Pages/LoginPage/index"
// import SignUpPage from "../Pages/SignUpPage/index"
const Routes = () => {
  const [authenticated, setAuthenticated] = useState(false);

  // useEffect(() => {
  //   const token = localStorage.getItem("@BetterLife:token");
  //   token && setAuthenticated(true);
  // }, [authenticated]);

  return (
    <Switch>
      <Route exact path="/">
      <Home />
      </Route>

      <Route exact path="/login"></Route>

      <Route exact path="/signup"></Route>
    </Switch>
  );
};

export default Routes;
