import { CreatePage, CreateReduxPage } from '../../Page/';

import instance from './instance';
import mapStateToProps from './mapStateToProps';
import propTypes from './propTypes';
import routes from './routes';
export const CatalogingBarcodePage = CreateReduxPage(CreatePage(instance, propTypes, routes), mapStateToProps, {});
