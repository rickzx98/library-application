import {FieldView, FluidApi, getLabel, PropTypes, React, readOnlyWrapper, Prefix} from '../../imports';
import {PAGE_NAME} from '../constants';

export class DropdownCallNumberPrefix extends React.Component {

  static viewTransformer(values, value) {
    const filtered = values.filter(prefix => prefix[Prefix.ID] === value);
    return filtered && filtered[0] ? filtered[0][Prefix.VALUE] : "";
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
    this.setState({data});
  }

  loadingOn() {
    this.setState({loading: true});
  }

  loadingOff() {
    this.setState({loading: false});
  }

  error(error) {
    this.setState({error});
  }

  refresh() {
    this.loadingOn();
    FluidApi.storage(PAGE_NAME)
      .then(({data}) => {
        this.setData(data());
        this.loadingOff();
      })
      .catch(error => {
        this.error(error);
        this.loadingOff();
        this.setData([]);
      });
  }

  _viewTransformer(value) {
    return DropdownCallNumberPrefix.viewTransformer(this.state.data, value);
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
              <option key={data[Prefix.ID]} value={data[Prefix.ID]}>{data[Prefix.VALUE]}</option>)
          )}
        </select>), this.props.readOnly);
  }
}

DropdownCallNumberPrefix.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  readOnly: PropTypes.bool
};
