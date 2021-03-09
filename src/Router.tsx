import { Switch, Route } from "react-router";
import React from "react";
import { ProductList } from "templates";
import { BrowserRouter } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"(/)?"} component={ProductList}></Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
