import { PropTypes, React } from "../../imports";

export class CollectionTitles extends React.Component {
    constructor(props) {
        super(props);
    }
    _addTitle() { }
    render() {
        return (<div className="collection-titles" />);
    }
}

CollectionTitles.propTypes = {
    getValue: PropTypes.func.isRequired,
    field: PropTypes.object.isRequired
};