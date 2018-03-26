import '../../../images/library-header.jpg';

import * as actions from '../actions/';

import { CreatePage, CreateReduxPage } from '../../Page/';

import instance from './instance';
import pages from './pages';
import propTypes from './propTypes';

export const ConnectedPage = CreateReduxPage(CreatePage(instance, propTypes, pages),
  ({ fluidForm: { catalogingLibrarian }, librarian, routing, ajaxStatus }) => ({
    catalogingLibrarian: catalogingLibrarian || { data: {} },
    librarian,
    routing,
    ajax: ajaxStatus
  }), { actions });
