import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Layout from "./Layout";
import ProductList from "./modules/productList";
import Details from "./modules/details";

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/items">
             <ProductList />
          </Route>
          <Route path="/item/:id">
            <Details />
          </Route>
          <Route exact path="/">
             <Layout />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;