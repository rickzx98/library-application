import { FluidApi, Prefix, PropTypes, React } from "../../../imports";

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
    FluidApi.execute("getListData", { pageName: PAGE_PREFIX })
      .then(({ getListData }) => {
        const value = getListData("data")(PAGE_PREFIX).filter(
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
