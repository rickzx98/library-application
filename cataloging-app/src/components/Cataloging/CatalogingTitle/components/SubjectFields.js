import {FieldView, FluidForm, getLabel, PropTypes, React, readOnlyWrapper} from "../imports";
import {SubjectEntries} from './SubjectEntries';


export class SubjectFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {values: []};
    this.getValue = this._getValue.bind(this);
  }

  _getValue(field) {
    const value = FluidForm.getValue(this.props.formValue, this.props.field.name);
    return value[field] || '';
  }

  renderSubjectEntry() {
    return readOnlyWrapper((<div className="form-group">
      <FieldView>{this.getValue(this.props.field.name + '_entry')}</FieldView>
    </div>), (<div className="form-group">
      <div className="input-form col-sm-7">
        <input placeholder={getLabel('LABEL_SUBJECT_ENTRY')} className="form-control"/>
      </div>
      <div className="button-form col-sm-5">
        <SubjectEntries className="form-control"/>
      </div>
    </div>), this.props.readOnly);
  }

  renderSubjectSubdivision() {

  }

  render() {
    return <div className="subject-fields">{this.renderSubjectEntry()}</div>;
  }
}

SubjectFields.propTypes = {
  readOnly: PropTypes.bool,
  formValue: PropTypes.object,
  field: PropTypes.object.isRequired
};
