import { FluidApi, FluidForm, getLabel, Fund, React, PropTypes } from '../imports';
import { PAGE_NAME } from '../constants';

export class DropdownFund extends React.Component {
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
    }

    render() {
        return (<select
            className="form-control"
            name={this.props.field.name}
            value={FluidForm.getValue(this.props.formValue, this.props.field.name)}>
            <option value="">{getLabel('LABEL_SELECT_OPTIONS')}</option>
            {this.state.data && this.state.data.map(
                data => (<option key={data[Fund.ID]} value={data[Fund.ID]}>{data[Fund.NAME]}</option>)
            )}
        </select>);
    }
}

DropdownFund.propTypes = {
    formValue: PropTypes.object,
    field: PropTypes.object.isRequired
};
