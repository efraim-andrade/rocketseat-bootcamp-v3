import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../pages/main';
import Footer from '../components/footer';

const Routes = () => (
  <BrowserRouter>
    <React.Fragment>
      <Switch>
        <Route path="/" component={Main} exact />
      </Switch>

      <Footer />
    </React.Fragment>
  </BrowserRouter>
);

export default Routes;
