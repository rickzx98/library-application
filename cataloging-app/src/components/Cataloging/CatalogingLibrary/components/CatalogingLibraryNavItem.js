import { FontAwesome, React, PropTypes, NavItem, getLabel } from '../imports';
import { PAGE_NAME } from '../constants';

export const CatalogingLibraryNavItem = ({ eventKey }) => {
  return (<NavItem href={`/${PAGE_NAME}`} eventKey={eventKey} title={getLabel('LABEL_LIBRARY')} id="libraryDropdown">
    <FontAwesome name="book" fixedWidth size="lg"/>&nbsp;{getLabel('LABEL_LIBRARY')}</NavItem>);
};

CatalogingLibraryNavItem.propTypes = {
  eventKey: PropTypes.number.isRequired
};
