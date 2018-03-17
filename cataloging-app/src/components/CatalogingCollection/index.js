export { ConnectedCatalogingCollectionPage as CatalogingCollectionPage } from './CatalogingCollectionPage';

import ApiInterface from './api/ApiInterface';
import reducer from './reducer/CatalogingCollectionReducer';

export const CatalogingCollectionApi = ApiInterface;
export const CatalogingCollectionReducer = reducer;