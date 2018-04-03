import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

import { AdminUserPage } from '../AdminUser/';
import { CatalogingCollectionPage } from '../CatalogingCollection/';
import { CatalogingLibrarianPage } from '../CatalogingLibrarian/';
import { CatalogingLibraryPage } from '../CatalogingLibrary/';
import { HomePage } from '../Home/';
import { Pages } from '../../types/';
import PropTypes from 'prop-types';

export default class RouteBlocker extends PureComponent {
  render() {
    return (<Switch>
      <Route exact path={Pages.home} component={HomePage} />
      <Route exact path={Pages.library} component={CatalogingLibraryPage} />
      <Route exact path={Pages.newLibrary} component={CatalogingLibraryPage} />
      <Route exact path={Pages.viewLibrary + ':id'} component={CatalogingLibraryPage} />
      <Route exact path={Pages.collection} component={CatalogingCollectionPage} />
      <Route exact path={Pages.newCollection} component={CatalogingCollectionPage} />
      <Route exact path={Pages.viewCollection + ':id'} component={CatalogingCollectionPage} />
      <Route exact path={Pages.librarian} component={CatalogingLibrarianPage} />
      <Route exact path={Pages.newLibrarian} component={CatalogingLibrarianPage} />
      <Route exact path={Pages.viewLibrarian + ':id'} component={CatalogingLibrarianPage} />
      <Route exact path={Pages.user} component={AdminUserPage} />
      <Route exact path={Pages.newUser} component={AdminUserPage} />
      <Route exact path={Pages.viewUser + ':id'} component={AdminUserPage} />
    </Switch>);
  }
}

RouteBlocker.propTypes = {
  routing: PropTypes.object.isRequired
};
