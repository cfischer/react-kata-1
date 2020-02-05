import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import Home from './containers/Home';
import Find from './containers/Isbn';
import Isbn from './containers/Isbn';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/sorted">
            <Home sorted />
          </Route>
          <Route path="/isbn/:id" children={<Isbn />} />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
