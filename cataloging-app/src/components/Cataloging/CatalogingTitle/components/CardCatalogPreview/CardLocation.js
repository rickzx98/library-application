import { React, PropTypes, FluidApi, Library } from "../../imports";
import { PAGE_LIBRARY } from "../../constants";

export class CardLocation extends React.Component {
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
    FluidApi.storage(PAGE_LIBRARY).then(({ data }) => {
      const value = data().filter(
        library => library[Library.ID] === this.props.value
      )[0];
      this.setState({ value: value ? value[Library.NAME] : "" });
    });
  }
  render() {
    return <div className="card-location">{this.state.value}</div>;
  }
}

CardLocation.propTypes = {
  value: PropTypes.string
};
