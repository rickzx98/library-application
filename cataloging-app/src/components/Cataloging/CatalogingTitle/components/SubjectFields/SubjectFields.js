import { CreateFunc, FluidForm, PropTypes, React } from "../../imports";

import { FLUID_SUBJECT_FIELDS_ON_CLICK } from './constants';
import { SubjectEntries } from './SubjectEntries';

export class SubjectFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = { values: [] };
    this.getValue = this._getValue.bind(this);
    this.addSubject = this._addSubject.bind(this);
    CreateFunc(FLUID_SUBJECT_FIELDS_ON_CLICK).onStart(({ command }) => {
      switch (command()) {
        case 'add_subject':
          break;
      }
    }).spec('command', { require: true });
  }

  _getValue(field) {
    const value = FluidForm.getValue(this.props.formValue, this.props.field.name);
    return value[field] || '';
  }

  _addSubject() {

  }
  render() {
    return <SubjectEntries name={this.props.field.name} />;
  }
}

SubjectFields.propTypes = {
  readOnly: PropTypes.bool,
  formValue: PropTypes.object,
  field: PropTypes.object.isRequired
};
