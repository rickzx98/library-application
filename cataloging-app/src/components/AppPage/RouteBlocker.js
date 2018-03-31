import { CatalogingLibraryModules, CatalogingLibraryPage } from '../CatalogingLibrary/';
import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

import { CatalogingLibrarianPage } from '../CatalogingLibrarian/';
import { HomePage } from '../Home/';
import { Pages } from '../../types/';
import PropTypes from 'prop-types';
import { RouteModules } from './RouteModules';

export default class RouteBlocker extends PureComponent {
  render() {
    return (<Switch>
      <Route exact path={Pages.home} component={HomePage} />
      <Route exact path={Pages.library} component={CatalogingLibraryPage} />
      <Route exact path={Pages.newLibrary} component={CatalogingLibraryPage} />
      <Route exact path={Pages.viewLibrary + ':id'} component={CatalogingLibraryPage} />
      <Route exact path={Pages.librarian} component={CatalogingLibrarianPage} />
      <Route exact path={Pages.newLibrarian} component={CatalogingLibrarianPage} />
      <Route exact path={Pages.viewLibrarian + ':id'} component={CatalogingLibrarianPage} />
      {RouteModules(CatalogingLibraryModules)()}
    </Switch>);
  }
}


RouteBlocker.propTypes = {
  routing: PropTypes.object.isRequired
};
