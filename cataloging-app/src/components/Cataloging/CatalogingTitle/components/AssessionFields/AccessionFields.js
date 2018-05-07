import {
  FluidForm,
  FluidFunc,
  React,
  PropTypes,
  Title,
  triggerCommands
} from "../../imports";
import { FLUID_ADD, FLUID_FIELDS_ON_CLICK, FLUID_REMOVE } from "./constants";
import { Accessions } from "./Accessions";

import { PAGE_NAME, COMMAND_GENERATE_BARCODES } from "../../constants";

export class AccessionFields extends React.Component {
  constructor(props) {
    super(props);
    this.createDefaultAccession = this._createDefaultAccessions.bind(this);
    this.getAccessions = this._getAccessions.bind(this);
    this.setValue = this._setValue.bind(this);
    this.addAccession = this._addAccession.bind(this);
    this.removeAccession = this._removeAccession.bind(this);
    this.getValue = this._getValue.bind(this);

    FluidFunc.create(FLUID_FIELDS_ON_CLICK)
      .onStart(({ command, index }) => {
        switch (command()) {
          case FLUID_ADD:
            this.addAccession();
            break;
          case FLUID_REMOVE:
            this.removeAccession(index());
            break;
        }
      })
      .spec("command", { require: true });
  }

  componentDidUpdate(prevProps) {
    if (!this.props.readOnly && this.props.formValue.touched) {
      const values = this.getAccessions(prevProps.formValue);
      values.forEach((entry, _index) => {
        Object.keys(entry).forEach(field => {
          const preValue = FluidForm.getValue(
            prevProps.formValue,
            `${_index}_${field}`
          );
          const value = FluidForm.getValue(
            this.props.formValue,
            `${_index}_${field}`
          );
          if (preValue !== value && value !== this.getValue(field, _index)) {
            this.setValue(field, value, _index);
          }
        });
      });
    }
  }

  _createDefaultAccessions() {
    const _newAccession = {};
    _newAccession[this.props.field.name] = "";
    return _newAccession;
  }

  _getAccessions(formValue) {
    if (FluidForm.getValue(formValue, this.props.field.name).length === 0) {
      return [this.createDefaultAccession()];
    }
    return FluidForm.getValue(formValue, this.props.field.name);
  }

  _setValue(field, value, fieldIndex) {
    const values = this.getAccessions(this.props.formValue);
    const accessions = [...values];
    let accession;
    if (accessions.length <= fieldIndex) {
      accession = this.createDefaultAccession();
      accessions.push(accession);
    } else {
      accession = { ...accessions[fieldIndex] };
    }
    accession[field] = value;
    accessions[fieldIndex] = accession;
    FluidForm.set(PAGE_NAME, this.props.field.name, accessions);
    FluidFunc.start(triggerCommands(PAGE_NAME), {
      command: COMMAND_GENERATE_BARCODES
    });
  }

  _getValue(field, fieldIndex) {
    const value = FluidForm.getValue(
      this.props.formValue,
      this.props.field.name
    );
    if (value && value instanceof Array) {
      return value[fieldIndex][field];
    }
    return "";
  }

  _addAccession() {
    const values = [...this.getAccessions(this.props.formValue)];
    values.push(this.createDefaultAccession());
    this.setValues(values);
  }

  _removeAccession(index) {
    const values = [...this.getAccessions(this.props.formValue)];
    values.splice(index, 1);
    this.setValues(values);
  }

  setValues(values = [this.createDefaultAccession()]) {
    FluidForm.set(PAGE_NAME, this.props.field.name, values);
    FluidForm.set(PAGE_NAME, Title.COPIES, values.length);
    FluidFunc.start(triggerCommands(PAGE_NAME), {
      command: COMMAND_GENERATE_BARCODES
    });
  }

  render() {
    return (
      <Accessions
        values={this.getAccessions(this.props.formValue)}
        name={this.props.field.name}
        readOnly={this.props.readOnly}
      />
    );
  }
}

AccessionFields.propTypes = {
  field: PropTypes.object.isRequired,
  formValue: PropTypes.object.isRequired,
  readOnly: PropTypes.bool
};
