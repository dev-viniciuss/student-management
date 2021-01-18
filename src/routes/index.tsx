import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import RegisterStudent from '../pages/RegisterStudent';
import RegisterCourse from '../pages/RegisterCourse';
import ShowStudent from '../pages/ShowStudent';
import ShowCourse from '../pages/ShowCourse';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/RegisterStudent" exact component={RegisterStudent} />
    <Route path="/RegisterCourse" exact component={RegisterCourse} />
    <Route path="/ShowStudent" exact component={ShowStudent} />
    <Route path="/ShowCourse" exact component={ShowCourse} />
  </Switch>
);

export default Routes;