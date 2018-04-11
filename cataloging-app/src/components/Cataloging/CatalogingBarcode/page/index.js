import { CreatePage, CreateReduxPage } from '../imports';
import * as actions from '../actions/';
import instance from './instance';
import mapStateToProps from './mapStateToProps';
import propTypes from './propTypes';
import routes from './routes';

export const CatalogingBarcodePage = CreateReduxPage(CreatePage(instance, propTypes, routes), mapStateToProps, { actions });
