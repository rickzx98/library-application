import '../../../images/library-header.jpg';

import * as actions from '../actions/';

import { CreatePage, CreateReduxPage } from '../../Page/';

import instance from './instance';
import pages from './pages';
import propTypes from './propTypes';

export const CrudPage = ({ pageName, FormSpecs, TableColumns, formProps, types, page, listTransformer }) =>
  CreateReduxPage(CreatePage(instance({
      pageName,
      FormSpecs,
      TableColumns,
      page,
      formProps,
      listTransformer
    }), propTypes(types), pages(pageName)),
    ({ fluidForm, pageListData, routing, ajaxStatus }) => ({
      pageForm: fluidForm[pageName] || {data: {}},
      pageList: pageListData[pageName] || [],
      routing,
      ajax: ajaxStatus
    }), {actions});
