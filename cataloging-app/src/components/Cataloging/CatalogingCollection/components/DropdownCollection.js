import { Collection, FluidApi, FluidForm, PropTypes, React, getLabel } from '../imports';

import { PAGE_NAME } from '../constants';

export class DropdownCollection extends React.Component {
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

    render() {
        return (<select
            className="form-control"
            name={this.props.field.name}
            value={FluidForm.getValue(this.props.formValue, this.props.field.name)}>
            <option value="">{getLabel('LABEL_SELECT_OPTIONS')}</option>
            {this.state.data && this.state.data.map(
                data => (<option key={data[Collection.ID]} value={data[Collection.ID]}>{data[Collection.NAME]}</option>)
            )}
        </select>);
    }
}

DropdownCollection.propTypes = {
    formValue: PropTypes.object,
    field: PropTypes.object.isRequired
};
