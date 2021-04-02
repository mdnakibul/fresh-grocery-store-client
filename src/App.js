
import React, { createContext, useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import Home from './Components/Home/Home';
import Navigation from './Components/Navigation/Navigation';
import AdminPanel from "./Components/AdminPanel/AdminPanel";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Navigation></Navigation>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/admin">
          <AdminPanel></AdminPanel>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/checkout"> 
        <Checkout></Checkout>
        </PrivateRoute>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
