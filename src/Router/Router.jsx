import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import JoinPage from '../Pages/Join/JoinPage';
import LeagueAddPage from '../Pages/LeagueAdd/LeagueAddPage';
import MainPage from '../Pages/Main/MainPage';
import MyPage from '../Pages/MyPage/MyPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/my" component={MyPage} />
        <Route path="/leagueAdd" component={LeagueAddPage} />
        <Route path="/join" component={JoinPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
