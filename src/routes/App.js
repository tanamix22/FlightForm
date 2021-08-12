import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/home/Home";
import Main from "../pages/main/Main";
import Layout from "../components/layout/Layout";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={Main} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
