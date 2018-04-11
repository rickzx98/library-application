import * as actions from './actions/CatalogingHeadersActions';
import { React, PropTypes, bindActionCreators, connect } from './imports';
import { CatalogingHeadersBody } from './contents/CatalogingHeadersBody';

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
