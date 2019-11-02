import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import {
  Home,
  Q10,
  ADayWithPeePo,
  CyberShoot,
  CyberAdventure,
  Provider
} from 'pages'

import Lesson1 from 'pages/study/Lesson1'
import Lesson2 from 'pages/study/Lesson2'
import Lesson3 from 'pages/study/Lesson3'
import Lesson4 from 'pages/study/Lesson4'

export default () => (
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/q10' component={Q10} />
        <Route path='/cyber_shoot' component={CyberShoot} />
        <Route path='/a_day_with_peepo' component={ADayWithPeePo} />
        <Route path='/cyber_adventure' component={CyberAdventure} />
        <Route path='/provider' component={Provider} />

        <Route path='/lesson_1' component={Lesson1} />
        <Route path='/lesson_2' component={Lesson2} />
        <Route path='/lesson_3' component={Lesson3} />
        <Route path='/lesson_4' component={Lesson4} />
      </Switch>
    </div>
  </Router>
)
