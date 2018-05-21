import { Cutter, FluidApi, PropTypes, React } from "../../../imports";

import { PAGE_CUTTER } from "../../../constants";

export class CardCutter extends React.Component {
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
    FluidApi.execute("getListData", { pageName: PAGE_CUTTER })
      .then(({ getListData }) => {
        const value = getListData("data")(PAGE_CUTTER).filter(
          cutter => cutter[Cutter.ID] === this.props.value
        )[0];
        this.setState({ value: value ? value[Cutter.VALUE] : "" });
      });
  }
  render() {
    return <div className="card-cutter">{this.state.value}</div>;
  }
}

CardCutter.propTypes = {
  value: PropTypes.string
};
