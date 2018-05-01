import {getLabel, FluidApi, PropTypes, React, Prefix} from '../../imports';
import {PAGE_NAME} from '../constants';

export class DropdownCallNumberPrefix extends React.Component {
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

  render() {
    return (<select
      className="form-control"
      name={this.props.name}
      value={this.props.value}>
      <option value="">{getLabel('LABEL_SELECT_OPTIONS')}</option>
      {this.state.data && this.state.data.map(
        data => (<option key={data[Prefix.ID]} value={data[Prefix.ID]}>{data[Prefix.VALUE]}</option>)
      )}
    </select>);
  }
}

DropdownCallNumberPrefix.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string.isRequired
};
