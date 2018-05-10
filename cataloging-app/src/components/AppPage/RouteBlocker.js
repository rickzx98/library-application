import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

import { AdminUserPage } from '../Admin/AdminUser/';
import { CallNumberCutterPage } from '../Cataloging/CatalogingCallNumber/CallNumberCutter/';
import { CallNumberPrefixPage } from '../Cataloging/CatalogingCallNumber/CallNumberPrefix/';
import { CallNumberSuffixPage } from '../Cataloging/CatalogingCallNumber/CallNumberSuffix/';
import { CatalogingBarcodePage } from '../Cataloging/CatalogingBarcode/';
import { CatalogingCollectionPage } from '../Cataloging/CatalogingCollection/';
import { CatalogingCurrencyPage } from '../Cataloging/CatalogingCurrency/';
import { CatalogingFundPage } from '../Cataloging/CatalogingFund/';
import { CatalogingLibrarianPage } from '../Cataloging/CatalogingLibrarian/';
import { CatalogingLibraryPage } from '../Cataloging/CatalogingLibrary/';
import { CatalogingLoanTypePage } from '../Cataloging/CatalogingLoanType/';
import { CatalogingResourceTypePage } from '../Cataloging/CatalogingResourceType/';
import { CatalogingSubjectsPage } from '../Cataloging/CatalogingSubjects/';
import { CatalogingTitlePage } from '../Cataloging/CatalogingTitle/';
import { CatalogingVendorPage } from '../Cataloging/CatalogingVendor/';
import { HomePage } from '../System/Home/';
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
      <Route exact path={Pages.title + '/preview'} component={CatalogingTitlePage} />

      <Route exact path={Pages.currency} component={CatalogingCurrencyPage} />
      <Route exact path={Pages.newCurrency} component={CatalogingCurrencyPage} />
      <Route exact path={Pages.viewCurrency + ':id'} component={CatalogingCurrencyPage} />
      <Route exact path={Pages.vendor} component={CatalogingVendorPage} />
      <Route exact path={Pages.newVendor} component={CatalogingVendorPage} />
      <Route exact path={Pages.viewVendor + ':id'} component={CatalogingVendorPage} />
      <Route exact path={Pages.fund} component={CatalogingFundPage} />
      <Route exact path={Pages.newFund} component={CatalogingFundPage} />
      <Route exact path={Pages.viewFund + ':id'} component={CatalogingFundPage} />

      <Route exact path={Pages.prefix} component={CallNumberPrefixPage} />
      <Route exact path={Pages.newPrefix} component={CallNumberPrefixPage} />
      <Route exact path={Pages.viewPrefix + ':id'} component={CallNumberPrefixPage} />

      <Route exact path={Pages.cutter} component={CallNumberCutterPage} />
      <Route exact path={Pages.newCutter} component={CallNumberCutterPage} />
      <Route exact path={Pages.viewCutter + ':id'} component={CallNumberCutterPage} />

      <Route exact path={Pages.suffix} component={CallNumberSuffixPage} />
      <Route exact path={Pages.newSuffix} component={CallNumberSuffixPage} />
      <Route exact path={Pages.viewSuffix + ':id'} component={CallNumberSuffixPage} />

      <Route exact path={Pages.barcode} component={CatalogingBarcodePage} />
      <Route exact path={Pages.barcode + 's'} component={CatalogingBarcodePage} />


      <Route exact path={Pages.subject} component={CatalogingSubjectsPage} />
      <Route exact path={Pages.newSubject} component={CatalogingSubjectsPage} />
      <Route exact path={Pages.newSubject + '/:parent'} component={CatalogingSubjectsPage} />
      <Route exact path={Pages.viewSubject + ':id'} component={CatalogingSubjectsPage} />

      <Route exact path={Pages.loanType} component={CatalogingLoanTypePage} />
      <Route exact path={Pages.newLoanType} component={CatalogingLoanTypePage} />
      <Route exact path={Pages.viewLoanType + ':id'} component={CatalogingLoanTypePage} />


      <Route exact path={Pages.resourceType} component={CatalogingResourceTypePage} />
      <Route exact path={Pages.newResourceType} component={CatalogingResourceTypePage} />
      <Route exact path={Pages.viewResourceType + ':id'} component={CatalogingResourceTypePage} />

    </Switch>);
  }
}


RouteBlocker.propTypes = {
  routing: PropTypes.object.isRequired
};
