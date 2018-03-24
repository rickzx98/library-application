import '../../../images/library-header.jpg';

import * as actions from '../actions/CatalogingLibraryActions';

import { CreatePage, CreateReduxPage } from '../../Page/';

import instance from './instance';
import pages from './pages';
import propTypes from './propTypes';

export const ConnectedCatalogingLibraryPage = CreateReduxPage(CreatePage(instance, propTypes, pages),
  ({ fluidForm: { catalogingLibrary },
    library, routing, ajaxStatus }) => ({
      catalogingLibrary: catalogingLibrary || { data: {} },
      library,
      routing,
      ajax: ajaxStatus
    }), { actions });
