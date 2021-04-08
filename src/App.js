
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import Home from './Components/Home/Home';
import Navigation from './Components/Navigation/Navigation';
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AddProduct from "./Components/AddProduct/AddProduct";
import Orders from "./Components/Orders/Orders";
import ManageProduct from "./Components/ManageProduct/ManageProduct";

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
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/addproduct"> 
        <AddProduct></AddProduct>
        </PrivateRoute>
        <PrivateRoute path="/manage">
          <ManageProduct></ManageProduct>
        </PrivateRoute>
        <PrivateRoute path="/checkout/:id"> 
        <Checkout></Checkout>
        </PrivateRoute>
        <PrivateRoute path="/orders"> 
        <Orders></Orders>
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
