import {SubDivision, SubjectEntry, FluidFunc, PropTypes, React, FluidForm} from "../../imports";

import {FLUID_SUBJECT_FIELDS_ON_CLICK, ADD_SUBJECT, REMOVE_SUBJECT} from "./constants";
import {PAGE_NAME} from '../../constants';
import {SubjectEntries} from "./SubjectEntries";

export class SubjectFields extends React.Component {
  constructor(props) {
    super(props);
    this.getValue = this._getValue.bind(this);
    this.addSubject = this._addSubject.bind(this);
    this.removeSubject = this._removeSubject.bind(this);
    this.createDefaultSubject = this._createDefaultSubject.bind(this);
    this.setValue = this._setValue.bind(this);
    this.getSubjects = this._getSubjects.bind(this);
    FluidFunc.create(FLUID_SUBJECT_FIELDS_ON_CLICK)
      .onStart(({command, index, entryName}) => {
        switch (command()) {
          case ADD_SUBJECT:
            this.addSubject();
            break;
          case REMOVE_SUBJECT:
            this.removeSubject(index(), entryName());
            break;
        }
      })
      .spec("command", {require: true});
  }

  componentDidUpdate(prevProps) {
    if (!this.props.readOnly && this.props.formValue.touched) {
      const values = this.getSubjects(prevProps.formValue);
      values.forEach((entry, _index) => {
        Object.keys(entry).forEach((field) => {
          const preValue = FluidForm.getValue(prevProps.formValue, `${_index}_${field}`);
          const value = FluidForm.getValue(this.props.formValue, `${_index}_${field}`);
          if ((preValue !== value) && (value !== this.getValue(field, _index))) {
            this.setValue(field, value, _index);
          }
        });
      });
    }
  }

  _setValue(field, value, fieldIndex) {
    const values = this.getSubjects(this.props.formValue);
    const subject = [...values];
    let entry;
    if (subject.length <= fieldIndex) {
      entry = this.createDefaultSubject();
      subject.push(entry);
    } else {
      entry = {...subject[fieldIndex]};
    }
    entry[field] = value;
    subject[fieldIndex] = entry;
    FluidForm.set(PAGE_NAME, this.props.field.name, subject);
  }

  _getValue(field, fieldIndex) {
    const value = FluidForm.getValue(
      this.props.formValue,
      this.props.field.name
    );
    if (value && value instanceof Array) {
      const entry = value[fieldIndex];
      return entry[field];
    }
    return '';
  }

  _getSubjects(formValue) {
    if (FluidForm.getValue(formValue, this.props.field.name).length === 0) {
      return [this.createDefaultSubject()];
    }
    return FluidForm.getValue(formValue, this.props.field.name);
  }

  _addSubject() {
    const values = [...this.getSubjects(this.props.formValue)];
    values.push(this.createDefaultSubject());
    this.setValues(values);
  }

  _removeSubject(index) {
    const values = [...this.getSubjects(this.props.formValue)];
    values.splice(index, 1);
    this.setValues(values);
  }

  _createDefaultSubject() {
    const entryName = `${this.props.field.name}_entry`;
    const entryType = `${this.props.field.name}_type`;
    const subDivision0Name = `${this.props.field.name}_subdivision_0`;
    const subDivision1Name = `${this.props.field.name}_subdivision_1`;
    const subDivision2Name = `${this.props.field.name}_subdivision_2`;
    const subDivision0Type = `${this.props.field.name}_subdivision_type_0`;
    const subDivision1Type = `${this.props.field.name}_subdivision_type_1`;
    const subDivision2Type = `${this.props.field.name}_subdivision_type_2`;
    const newSubject = {};
    newSubject[entryName] = '';
    newSubject[entryType] = SubjectEntry.TOPICAL;
    newSubject[subDivision0Name] = '';
    newSubject[subDivision1Name] = '';
    newSubject[subDivision2Name] = '';
    newSubject[subDivision0Type] = SubDivision.GENERAL;
    newSubject[subDivision1Type] = SubDivision.GENERAL;
    newSubject[subDivision2Type] = SubDivision.GENERAL;
    return newSubject;
  }

  setValues(values = [this.createDefaultSubject()]) {
    FluidForm.set(PAGE_NAME, this.props.field.name, values);
  }

  render() {
    return (
      <SubjectEntries readOnly={this.props.readOnly} values={this.getSubjects(this.props.formValue)}
                      name={this.props.field.name}/>
    );
  }
}

SubjectFields
  .propTypes = {
  readOnly: PropTypes.bool,
  formValue: PropTypes.object,
  field: PropTypes.object.isRequired
};
