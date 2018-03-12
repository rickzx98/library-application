import MenuItem from 'react-bootstrap/lib/MenuItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import PropTypes from 'prop-types';
import React from 'react';
import { getLabel } from '../../../utils/';

export const CatalogingHeadersBody = ({ eventKey, actions }) => {
    return (<NavDropdown eventKey={eventKey} title={getLabel('LABEL_CATALOGING')} id="catalogingDropDown">
        <MenuItem onClick={actions.goToCollection} eventKey={eventKey + 0.1}>{getLabel('LABEL_COLLECTION')}</MenuItem>
        <MenuItem onClick={actions.goToTitles} eventKey={eventKey + 0.2}>{getLabel('LABEL_TITLES')}</MenuItem>
    </NavDropdown>);
};


CatalogingHeadersBody.propTypes = {
    eventKey: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired
};
