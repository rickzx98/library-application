import { FluidFunc, PropTypes, React } from "../imports";

import { COMMAND_SEARCH_LIST } from "../constants";

export class LinkSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "" };
        this.onChange = this._onChange.bind(this);
    }
    _onChange(event) {
        this._setValue(event.target.value);
    }
    _setValue(value) {
        this.setState({ value });
        if (FluidFunc.exists(this.props.fluidLink)) {
            const { name, pageName, fetchAll = true } = this.props;
            FluidFunc.start(this.props.fluidLink, {
                command: COMMAND_SEARCH_LIST,
                pageName: pageName,
                search: {
                    value,
                    field: name,
                    fetchAll
                }
            });
        }
    }
    render() {
        const { label, name } = this.props;
        return (<div className="link-search clearfix adapt-link-theme">
            <label className="link-search-label">{label}</label>
            <input onChange={this.onChange}
                name={name}
                value={this.state.value}
                className="form-control" />
        </div>);
    }
}

LinkSearch.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    pageName: PropTypes.string.isRequired,
    fluidLink: PropTypes.string.isRequired,
    fetchAll: PropTypes.bool
};
