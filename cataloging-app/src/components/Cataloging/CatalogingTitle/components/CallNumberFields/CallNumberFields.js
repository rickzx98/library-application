import {React, PropTypes, FluidForm, CallNumber} from '../../imports';
import {CallNumberField} from "./CallNumberField";
import {PAGE_NAME} from '../../constants';

export class CallNumberFields extends React.Component {
  constructor(props) {
    super(props);
    this.getValue = this._getValue.bind(this);
    this.setValue = this._setValue.bind(this);
    this.createDefaultCallNumber = this._createDefaultCallNumber.bind(this);
    this.getCallNumber = this._getCallNumber.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (!this.props.readOnly && this.props.formValue.touched) {
      const entry = this.getCallNumber(prevProps.formValue);
      Object.keys(entry).forEach((field) => {
        const prevValue = FluidForm.getValue(prevProps.formValue, `${this.props.field.name}_${field}`);
        const value = FluidForm.getValue(this.props.formValue, `${this.props.field.name}_${field}`);
        if ((prevValue !== value) && (value !== this.getValue(field))) {
          this.setValue(field, value);
        }
      });
    }
  }

  _getValue(field) {
    const value = this.getCallNumber(this.props.formValue);
    if (value) {
      return value[field];
    }
  }

  _setValue(field, value) {
    const savedValue = this.getCallNumber(this.props.formValue);
    const newValue = {...savedValue};
    newValue[field] = value;
    FluidForm.set(PAGE_NAME, this.props.field.name, newValue);
  }

  _getCallNumber(formValue) {
    const callNumber = FluidForm.getValue(formValue, this.props.field.name);
    if (!callNumber || callNumber === "") {
      return this.createDefaultCallNumber();
    }
    return callNumber;
  }

  _createDefaultCallNumber() {
    const _newCallNumber = {};
    _newCallNumber[CallNumber.PREFIX] = "";
    _newCallNumber[CallNumber.MAIN] = "";
    _newCallNumber[CallNumber.CUTTER] = "";
    _newCallNumber[CallNumber.SUFFIX] = "";
    return _newCallNumber;
  }

  render() {
    return (<CallNumberField name={this.props.field.name}
                             readOnly={this.props.readOnly}
                             value={this.getCallNumber(this.props.formValue)}/>);
  }

}

CallNumberFields.propTypes = {
  field: PropTypes.object.isRequired,
  formValue: PropTypes.object.isRequired,
  readOnly: PropTypes.bool
};
