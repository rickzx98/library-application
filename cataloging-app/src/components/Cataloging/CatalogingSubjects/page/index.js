import * as actions from '../actions/';

import { CreatePage, CreateReduxPage } from '../imports';

import instance from './instance';
import mapStateToProps from './mapStateToProps';
import propTypes from './propTypes';
import routes from './routes';

export const CatalogingSubjectsPage = CreateReduxPage(CreatePage(instance, propTypes, routes), mapStateToProps, { actions });
