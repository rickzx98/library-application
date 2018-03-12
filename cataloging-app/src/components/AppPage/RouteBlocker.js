import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage } from '../Home/';
import { Pages } from '../../types/';
import PropTypes from 'prop-types';

export default class RouteBlocker extends PureComponent {
  render() {
    return (<Switch>
      <Route exact path={Pages.home} component={HomePage} />
    </Switch>);
  }
}

RouteBlocker.propTypes = {
  routing: PropTypes.object.isRequired
};
