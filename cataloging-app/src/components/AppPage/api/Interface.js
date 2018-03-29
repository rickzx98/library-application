import { CatalogingCollectionApi } from '../../CatalogingCollection/';
import { CatalogingLibraryAPI } from '../../CatalogingLibrary/';
import { PageAPI } from '../../Page/';
import { RecordHomeApi } from '../../RecordHome/';
import { RecordViewApi } from '../../RecordView/';
import { SearchResultApi } from '../../SearchResult/';
export default {
  ...RecordHomeApi, ...SearchResultApi, ...RecordViewApi,
  ...CatalogingCollectionApi, ...CatalogingLibraryAPI,
  ...PageAPI
};
