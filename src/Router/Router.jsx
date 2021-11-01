import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TestPage from '../Pages/TestPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" component={} /> */}
        <Route path="/test" component={TestPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
