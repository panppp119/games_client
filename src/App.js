import React from "react";
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import {
  Home,
  Q10,
  ADayWithPeePo,
  CyberShoot,
  CyberAdventure,
  Provider,
} from 'pages'

export default () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/q10' component={Q10} />
      <Route path='/cyber_shoot' component={CyberShoot} />
      <Route path='/a_day_with_peepo' component={ADayWithPeePo} />
      <Route path='/cyber_adventure' component={CyberAdventure} />
      <Route path='/provider' component={Provider} />
    </Switch>
  </Router>
)
