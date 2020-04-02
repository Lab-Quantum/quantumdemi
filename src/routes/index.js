import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from '../components/navBar'
import Home from '../pages/home'
import Mapa from '../pages/mapa'

const Routes = () => (
    <BrowserRouter>
        <NavBar />
        <Switch>
            <Route path="/"exact component={Home} />
            <Route path="/mapa" component={Mapa} />
        </Switch>
    </BrowserRouter>
);

export default Routes;