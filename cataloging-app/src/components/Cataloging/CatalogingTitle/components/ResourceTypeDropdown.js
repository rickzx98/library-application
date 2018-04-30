import { getLabel, FluidApi, FluidForm, PropTypes, React, ResourceType } from '../imports';
import { RESOURCE_TYPE } from '../constants';

export class ResourceTypeDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: []
    };
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
    FluidApi.storage(RESOURCE_TYPE)
      .then(({ data }) => {
        this.setData(data());
        this.loadingOff();
      })
      .catch(error => {
        this.error(error);
        this.loadingOff();
        this.setData([]);
      });
  }

  render() {
    return (<select
      className="form-control"
      name={this.props.field.name}
      value={FluidForm.getValue(this.props.formValue, this.props.field.name)}>
      <option value="">{getLabel('LABEL_SELECT_OPTIONS')}</option>
      {this.state.data && this.state.data.map(
        data => (<option key={data[ResourceType.ID]} value={data[ResourceType.ID]}>{data[ResourceType.VALUE]}</option>)
      )}
    </select>);
  }
}

ResourceTypeDropdown.propTypes = {
  formValue: PropTypes.object,
  field: PropTypes.object.isRequired
};
