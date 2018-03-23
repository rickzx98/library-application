import '../../images/library-header.jpg';

import { CatalogingLibraryForm } from './contents/CatalogingLibraryForm';
import { Pages } from '../../types/';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class CatalogingLibraryPage extends React.Component {
  router(list, create, view) {
    const { pathname } = this.props.location;
    const { params } = this.props.match;
    switch (pathname) {
      case Pages.viewLibrary + (params ? params.id : ''):
        list({ params, pathname });
        break;
      case Pages.newLibrary:
        create({ params, pathname });
        break;
      default:
        view({ params, pathname });
        break;
    }
  }
  render() {
    return (<CatalogingLibraryForm catalogingLibrary={this.props.catalogingLibrary} />);
  }
}
CatalogingLibraryPage.propTypes = {
  catalogingLibrary: PropTypes.object.isRequired
};

const mapStateToProps = ({ fluidForm: { catalogingLibrary } }) => ({
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  catalogingLibrary: catalogingLibrary
});

export const ConnectedCatalogingLibraryPage = connect(mapStateToProps)(CatalogingLibraryPage);
