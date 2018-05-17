import { React, PropTypes, FluidApi, Cutter } from "../../../imports";
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
    FluidApi.storage(PAGE_CUTTER).then(({ data }) => {
      const value = data().filter(
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
