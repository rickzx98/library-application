import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

import { CatalogingCollectionPage } from '../CatalogingCollection/';
import { HomePage } from '../Home/';
import { Pages } from '../../types/';
import PropTypes from 'prop-types';

export default class RouteBlocker extends PureComponent {
  render() {
    return (<Switch>
      <Route exact path={Pages.home} component={HomePage} />
      <Route exact path={Pages.collection} component={CatalogingCollectionPage} />
      <Route exact path={Pages.newCollection} component={CatalogingCollectionPage} />
      <Route exact path={Pages.viewCollection + ':id'} component={CatalogingCollectionPage} />
    </Switch>);
  }
}

RouteBlocker.propTypes = {
  routing: PropTypes.object.isRequired
};
