import { React, PropTypes, FluidApi, Prefix } from "../../../imports";
import { PAGE_PREFIX } from "../../../constants";

export class CardPrefix extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.refresh = this._refresh.bind(this);
  }
  componentWillMount() {
    this.refresh();
  }
  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      this.refresh();
    }
  }
  _refresh() {
    FluidApi.storage(PAGE_PREFIX).then(({ data }) => {
      const value = data().filter(
        prefix => prefix[Prefix.ID] === this.props.value
      )[0];
      this.setState({ value: value ? value[Prefix.VALUE] : "" });
    });
  }
  render() {
    return <div className="card-prefix">{this.state.value}</div>;
  }
}

CardPrefix.propTypes = {
  value: PropTypes.string
};
