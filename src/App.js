import React from 'react';
import Sign from './Components/Sign/index';
import {Global} from './global';
import Cadastrar from './Components/SignUp';
import Enter from './Components/Enter';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Global />
      <Switch>
        <Route path="/enter" exact component={Enter} />
        <Route path="/" exact component={Sign} />
        <Route path="/cadastrar" exact component={Cadastrar} />
      </Switch>
    </Router>
  );
}

export default App;
