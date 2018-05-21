import { FieldView, FluidApi, PropTypes, React, Suffix, getLabel, readOnlyWrapper } from '../../imports';

import { PAGE_NAME } from '../constants';

export class DropdownCallNumberSuffix extends React.Component {

  static viewTransformer(values, value) {
    const filtered = values.filter(suffix => suffix[Suffix.ID] === value);
    return filtered && filtered[0] ? filtered[0][Suffix.VALUE] : "";
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
    return DropdownCallNumberSuffix.viewTransformer(this.state.data, value);
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
              <option key={data[Suffix.ID]} value={data[Suffix.ID]}>{data[Suffix.VALUE]}</option>)
          )}
        </select>), this.props.readOnly);
  }
}

DropdownCallNumberSuffix.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  readOnly: PropTypes.bool
};
