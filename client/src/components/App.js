import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Shope from "../pages/Shope";
import Product from "./Product";
import Signup from "./Signup";
import Signin from "./Signin";
import AdminDashboard from "./AdminDashboard";
import AdminEditProduct from "./AdminEditProduct";
import AdminRoute from "./AdminRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route exact path="/Shope" component={Shope} />

          <Route exact path="/product/:productId" component={Product} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
          {/* <UserRoute exact path="/user/dashboard" component={UserDashboard} /> */}
          <AdminRoute
            exact
            path="/admin/dashboard"
            component={AdminDashboard}
          />
          <AdminRoute
            exact
            path="/admin/edit/product/:productId"
            component={AdminEditProduct}
          />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
