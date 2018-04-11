import { FluidForm, FluidApi, getLabel, PropTypes, React , Librarian} from '../imports';
import { PAGE_NAME } from '../constants';

import { transformLibrarianEdit } from '../api/Transfomer';

export class DropdownLibrarian extends React.Component {
  state = {
    loading: false,
    data: []
  };
  componentWillMount() {
    this.refresh();
  }
  setData = (data) => {
    this.setState({ data });
  }
  loadingOn = () => {
    this.setState({ loading: true });
  }
  loadingOff = () => {
    this.setState({ loading: false });
  }
  error = (error) => {
    this.setState({ error });
  }
  refresh = () => {
    this.loadingOn();
    FluidApi.storage(PAGE_NAME)
      .then(({ data }) => {
        this.setData(data());
        this.loadingOff();
      })
      .catch(error => {
        this.error(error);
        this.loadingOff();
        this.setData([]);
      });
  };
  render = () => (<select
    className="form-control"
    name={this.props.field.name}
    value={FluidForm.getValue(this.props.formValue, this.props.field.name, transformLibrarianEdit)}>
    <option value="">{getLabel('LABEL_SELECT_OPTIONS')}</option>
    {this.state.data && this.state.data.filter(data => data[Librarian.ACTIVE] === true).map(
      data => (<option key={data[Librarian.ID]} value={data[Librarian.ID]}>{data[Librarian.NAME]}</option>)
    )}
  </select>);
}

DropdownLibrarian.propTypes = {
  formValue: PropTypes.object,
  field: PropTypes.object.isRequired
};
