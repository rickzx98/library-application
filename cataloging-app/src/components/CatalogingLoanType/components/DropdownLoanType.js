import { FluidApi, FluidForm } from 'fluid-commons';

import { LoanType } from '../../../types/';
import { PAGE_NAME } from '../constants';
import PropTypes from 'prop-types';
import React from 'react';
import { getLabel } from '../../../utils/';

export class DropdownLoanType extends React.Component {
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
                data => (<option key={data[LoanType.ID]} value={data[LoanType.ID]}>{data[LoanType.NAME]}</option>)
            )}
        </select>);
    }
}

DropdownLoanType.propTypes = {
    formValue: PropTypes.object,
    field: PropTypes.object.isRequired
};
