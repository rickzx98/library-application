import { React, PropTypes, getLabel, MenuItem, NavDropdown } from '../imports';

export const CatalogingHeadersBody = ({ eventKey, actions }) => {
  return (<NavDropdown eventKey={eventKey} title={getLabel('LABEL_CATALOGING')} id="catalogingDropDown">
    <MenuItem onClick={actions.goToLibrary} eventKey={eventKey + 0.1}>{getLabel('LABEL_LIBRARY')}</MenuItem>
    <MenuItem onClick={actions.goToLibrarian} eventKey={eventKey + 0.3}>{getLabel('LABEL_LIBRARIAN')}</MenuItem>
  </NavDropdown>);
};


CatalogingHeadersBody.propTypes = {
  eventKey: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};
