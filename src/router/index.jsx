import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Error404 from '../pages/Error404'
const routes = [
  {
    path: "/",
    component: () => import('../pages/Home'),
  }
  // etc.
]
function index() {
    return (
        <Router>
          <Switch>
            <Route path="/home" component={Home} />
            <Route exact path="/404" component={Error404} />
            <Route exact path="/" component={Home} />
            {/* <Redirect to={"/404"} /> */}
            <Route component={Error404} />
          </Switch>
        </Router>
    )  
  }
  
  export default index