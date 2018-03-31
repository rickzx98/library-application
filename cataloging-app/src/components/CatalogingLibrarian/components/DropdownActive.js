import { FluidForm } from 'fluid-commons';
import { Label } from '../../common/';
import PropTypes from 'prop-types';
import React from 'react';
export class DropdownActive extends React.Component {
  render() {
    return (<select value={FluidForm.getValue(this.props.formValue, this.props.field.name)}
      name={this.props.field.name} className="form-control">
      <option value={''}><Label label="LABEL_SELECT_OPTIONS" /></option>
      <option value={true}><Label label="LABEL_YES" /></option>
      <option value={false}><Label label="LABEL_NO" /></option>
    </select>);
  }
}

DropdownActive.propTypes = {
  formValue: PropTypes.object,
  field: PropTypes.object.isRequired
};
