import { FieldView, FluidApi, FluidForm, PropTypes, React, ResourceType, getLabel, readOnlyWrapper } from '../imports';

import { PAGE_NAME } from '../constants';
import { viewTransformer } from './transformer/ResourceTypeTransformer';

export class DropdownResourceType extends React.Component {
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
    return viewTransformer(this.state.data, value);
  }

  render() {
    return readOnlyWrapper(
      <FieldView>{FluidForm.getValue(this.props.formValue, this.props.field.name, this.transformer)}</FieldView>, (
        <select
          className="form-control"
          name={this.props.field.name}
          value={FluidForm.getValue(this.props.formValue, this.props.field.name)}>
          <option value="">{getLabel('LABEL_SELECT_OPTIONS')}</option>
          {this.state.data && this.state.data.map(
            data => (
              <option key={data[ResourceType.ID]} value={data[ResourceType.ID]}>{data[ResourceType.VALUE]}</option>)
          )}
        </select>), this.props.readOnly);
  }
}

DropdownResourceType.propTypes = {
  formValue: PropTypes.object,
  field: PropTypes.object.isRequired,
  readOnly: PropTypes.bool
};
