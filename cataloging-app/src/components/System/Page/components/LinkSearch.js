import { FluidFunc, PropTypes, React } from "../imports";

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
            FluidFunc.start(this.props.fluidLink, {
                command: "SEARCH_LIST",
                searchValue: value
            });
        }
    }
    render() {
        const { label, name, pageName } = this.props;
        return (<div className="link-search clearfix adapt-link-theme">
            <label className="link-search-label">{label}</label>
            <input onChange={this.onChange}
                name={name}
                defaultValue={pageName}
                value={this.state.value}
                className="form-control" />
        </div>);
    }
}

LinkSearch.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    pageName: PropTypes.string.isRequired,
    fluidLink: PropTypes.string.isRequired
};
