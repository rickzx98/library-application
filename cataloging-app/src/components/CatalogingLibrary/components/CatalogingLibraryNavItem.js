import { FontAwesome } from '../../common/';
import NavItem from 'react-bootstrap/lib/NavItem';
import { PAGE_NAME } from '../constants';
import PropTypes from 'prop-types';
import React from 'react';
import { getLabel } from '../../../utils/';
export const CatalogingLibraryNavItem = ({ eventKey }) => {
  return (<NavItem href={`/${PAGE_NAME}`} eventKey={eventKey} title={getLabel('LABEL_LIBRARY')} id="libraryDropdown">
    <FontAwesome name="book" fixedWidth size="lg" />&nbsp;{getLabel('LABEL_LIBRARY')}</NavItem>);
};

CatalogingLibraryNavItem.propTypes = {
  eventKey: PropTypes.number.isRequired
};
