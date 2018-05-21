import {
  FieldView,
  FluidApi,
  FluidForm,
  Librarian,
  PropTypes,
  React,
  getLabel,
  readOnlyWrapper
} from '../imports';

import { PAGE_NAME } from '../constants';
import { viewTransformer } from './LibrarianTransformer';

export class DropdownLibrarian extends React.Component {
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
              <option key={data[Librarian.ID]} value={data[Librarian.ID]}>{data[Librarian.NAME]}</option>)
          )}
        </select>), this.props.readOnly);
  }
}

DropdownLibrarian.propTypes = {
  formValue: PropTypes.object,
  field: PropTypes.object.isRequired,
  readOnly: PropTypes.bool
};
