import * as actions from './actions/CatalogingHeadersActions';

import { CatalogingHeadersBody } from './contents/CatalogingHeadersBody';
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class CatalogingHeaders extends React.Component {
    render() {
        return (<CatalogingHeadersBody actions={this.props.actions} eventKey={this.props.eventKey} />);
    }
}

CatalogingHeaders.propTypes = {
    eventKey: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
};

export const ConnectedCatalogingHeaders = connect(undefined, mapDispatchToProps)(CatalogingHeaders);