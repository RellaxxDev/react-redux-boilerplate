import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import PropTypes from "prop-types";

const Root = props => (
  <Provider store={props.store}>
    <Router>
      <ul>
        {props.routes.map(
          route => route.path && (<li key={route.path}><Link to={route.path}>Link {route.path}</Link></li>)
        )}
      </ul>
      <Switch>
        {props.routes.map(
          route => <Route key={route.path || 0} {...route} />
        )}
      </Switch>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired
};

export default Root;