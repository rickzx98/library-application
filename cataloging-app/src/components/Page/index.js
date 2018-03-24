import * as actions from './actions';

import { FluidPage } from './FluidPage';
import React from 'react';

export function CreatePage(lifeCycle, propTypes, pages) {
  FluidPage.propTypes = { ...FluidPage.propTypes, ...propTypes };
  return function Page(props) { return <FluidPage pages={pages} lifeCycle={lifeCycle} {...props} />; };
}

export { CreateReduxPage } from './ReduxPage';
export const PageActions = actions;
