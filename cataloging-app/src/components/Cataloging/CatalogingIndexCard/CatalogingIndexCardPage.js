import { CrudPage, TitleLinks, getLabel } from './imports';
import { FormSpecs, TableColumns } from './api/';

import { PAGE_NAME } from './constants';

export const CatalogingIndexCardPage = CrudPage({
    pageName: PAGE_NAME,
    FormSpecs,
    TableColumns,
    page: {
        banner: '/books-header.jpg',
        label: getLabel('LABEL_CARD_CATALOG'),
        icon: 'address-card'
    },
    formProps: {
        fieldClass: () => 'col-sm-6 col-sm-offset-right-6 col-md-4 col-md-offset-right-8'
    },
    links: new TitleLinks(PAGE_NAME).getLinks()
});
