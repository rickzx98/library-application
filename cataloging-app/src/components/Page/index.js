import * as actions from './actions/';

import { FluidPage } from './FluidPage';
import React from 'react';

export function CreatePage(lifeCycle, propTypes, pages) {
  const Page = (props) => {
    return <FluidPage pages={pages} lifeCycle={lifeCycle} {...props} />;
  };
  Page.propTypes = propTypes;
  return Page;
}

export { CreateReduxPage } from './ReduxPage';
export const PageActions = actions;
export { PageForm } from './PageForm/PageForm';
export { PageList } from './PageList/PageList';
export { PageHeaders } from './PageHeaders/PageHeaders';
export { PageAPI, CrudPage, CrudPageReducer } from './CrudPage/';
export { PageSubModules } from './PageSubModules/PageSubModules';
