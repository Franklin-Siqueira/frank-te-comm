// Copyright (c) 2021 Franklin Siqueira
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
/** Imports (App) */
// import App from "./../views/App";
import LandingPage from "./../views/indexLP";
import UsersView from "./../views/users";
import ProductsView from "./../views/products";
import Error from "./../views/error";
/** training */
//
const Routes = () => (
  //
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route exact path='/users' component={UsersView} />
      <Route exact path='/products' component={ProductsView} />
      <Route path="*" component={Error} />
    </Switch>
  </BrowserRouter>
);
//
export default Routes;
