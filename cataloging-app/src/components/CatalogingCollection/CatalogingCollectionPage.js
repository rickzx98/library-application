import '../../images/subject-header.jpg';

import * as actions from './actions/CatalogingCollectionActions';

import { CatalogingCollectionBody } from './content/CatalogingCollectionBody';
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class CatalogingCollectionPage extends React.Component {
    componentWillMount() {
        this.refresh();
    }
    refresh() {
        this.props.actions.loadCollections();
    }
    render() {
        return (<CatalogingCollectionBody collections={this.props.collections} />);
    }
}

const mapStateToProps = ({ collections }) => ({ collections });
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});
CatalogingCollectionPage.propTypes = {
    collections: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};
export const ConnectedCatalogingCollectionPage = connect(mapStateToProps, mapDispatchToProps)(CatalogingCollectionPage);