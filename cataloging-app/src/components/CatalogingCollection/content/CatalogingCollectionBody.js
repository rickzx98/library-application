import CollectionColumns from '../api/CollectionColumns';
import { FluidTable } from 'fluid-commons';
import { Page } from '../../common/';
import PropTypes from 'prop-types';
import React from 'react';
import { getLabel } from '../../../utils/';

export const CatalogingCollectionBody = ({ collections }) => {
    return (<Page icon="book" label={getLabel('LABEL_COLLECTION')} banner="/subject-header.jpg">
        <FluidTable name="collectionTable"
            className="table table-condensed table-hover"
            columns={CollectionColumns} value={collections} />
    </Page>);
};

CatalogingCollectionBody.propTypes = {
    collections: PropTypes.array.isRequired
};
