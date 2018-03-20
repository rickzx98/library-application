import '../../images/library-header.jpg';

import { CatalogingLibraryForm } from './contents/CatalogingLibraryForm';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class CatalogingLibraryPage extends React.Component {
  render() {
    return (<CatalogingLibraryForm catalogingLibrary={this.props.catalogingLibrary.data} />);
  }
}

CatalogingLibraryPage.propTypes = {
  catalogingLibrary: PropTypes.object.isRequired
};

const mapStateToProps = ({ fluidForm: { catalogingLibrary } }) => ({
  catalogingLibrary: catalogingLibrary || { data: {} }
});

export const ConnectedCatalogingLibraryPage = connect(mapStateToProps)(CatalogingLibraryPage);
