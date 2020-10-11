import React from 'react';
import { Switch, BrowserRouter, Route } from "react-router-dom";

import Home from './pages/Home';


function AppRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRoutes;
