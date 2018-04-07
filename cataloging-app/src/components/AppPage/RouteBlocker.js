import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

import { AdminUserPage } from '../AdminUser/';
import { CatalogingCollectionPage } from '../CatalogingCollection/';
import { CatalogingCurrencyPage } from '../CatalogingCurrency/';
import { CatalogingFundPage } from '../CatalogingFund/';
import { CatalogingLibrarianPage } from '../CatalogingLibrarian/';
import { CatalogingLibraryPage } from '../CatalogingLibrary/';
import { CatalogingTitlePage } from '../CatalogingTitle/';
import { CatalogingVendorPage } from '../CatalogingVendor/';
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
      <Route exact path={Pages.librarian} component={CatalogingLibrarianPage} />
      <Route exact path={Pages.newLibrarian} component={CatalogingLibrarianPage} />
      <Route exact path={Pages.viewLibrarian + ':id'} component={CatalogingLibrarianPage} />
      <Route exact path={Pages.collection} component={CatalogingCollectionPage} />
      <Route exact path={Pages.newCollection} component={CatalogingCollectionPage} />
      <Route exact path={Pages.viewCollection + ':id'} component={CatalogingCollectionPage} />
      <Route exact path={Pages.user} component={AdminUserPage} />
      <Route exact path={Pages.newUser} component={AdminUserPage} />
      <Route exact path={Pages.viewUser + ':id'} component={AdminUserPage} />
      <Route exact path={Pages.title} component={CatalogingTitlePage} />
      <Route exact path={Pages.newTitle} component={CatalogingTitlePage} />
      <Route exact path={Pages.viewTitle + ':id'} component={CatalogingTitlePage} />
      <Route exact path={Pages.currency} component={CatalogingCurrencyPage} />
      <Route exact path={Pages.newCurrency} component={CatalogingCurrencyPage} />
      <Route exact path={Pages.viewCurrency + ':id'} component={CatalogingCurrencyPage} />
      <Route exact path={Pages.vendor} component={CatalogingVendorPage} />
      <Route exact path={Pages.newVendor} component={CatalogingVendorPage} />
      <Route exact path={Pages.viewVendor + ':id'} component={CatalogingVendorPage} />
      <Route exact path={Pages.fund} component={CatalogingFundPage} />
      <Route exact path={Pages.newFund} component={CatalogingFundPage} />
      <Route exact path={Pages.viewFund + ':id'} component={CatalogingFundPage} />
    </Switch>);
  }
}


RouteBlocker.propTypes = {
  routing: PropTypes.object.isRequired
};
