import { Cutter, FieldView, FluidApi, PropTypes, React, getLabel, readOnlyWrapper } from '../../imports';

import { PAGE_NAME } from '../constants';

export class DropdownCallNumberCutter extends React.Component {

  static viewTransformer(values, value) {
    const filtered = values.filter(cutter => cutter[Cutter.ID] === value);
    return filtered && filtered[0] ? filtered[0][Cutter.VALUE] : "";
  }

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: []
    };
    this.transformer = this._viewTransformer.bind(this);
  }

  componentWillMount() {
    this.refresh();
  }

  setData(data) {
    this.setState({ data });
  }

  loadingOn() {
    this.setState({ loading: true });
  }

  loadingOff() {
    this.setState({ loading: false });
  }

  error(error) {
    this.setState({ error });
  }

  refresh() {
    this.loadingOn();
    FluidApi.execute("getListData", { pageName: PAGE_NAME })
      .then(({ getListData }) => {
        this.setData(getListData("data")(PAGE_NAME));
        this.loadingOff();
      })
      .catch(error => {
        this.error(error);
        this.loadingOff();
        this.setData([]);
      });
  }

  _viewTransformer(value) {
    return DropdownCallNumberCutter.viewTransformer(this.state.data, value);
  }

  render() {
    return readOnlyWrapper(
      <FieldView>{this.transformer(this.props.value)}</FieldView>, (
        <select
          className="form-control"
          name={this.props.name}
          value={this.props.value}>
          <option value="">{getLabel('LABEL_SELECT_OPTIONS')}</option>
          {this.state.data && this.state.data.map(
            data => (
              <option key={data[Cutter.ID]} value={data[Cutter.ID]}>{data[Cutter.VALUE]}</option>)
          )}
        </select>), this.props.readOnly);
  }
}

DropdownCallNumberCutter.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  readOnly: PropTypes.bool
};
