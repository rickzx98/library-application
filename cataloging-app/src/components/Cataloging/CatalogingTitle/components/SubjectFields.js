import {
  React,
  PropTypes,
  readOnlyWrapper,
  FieldView,
  FluidForm
} from "../imports";
const FIELD_LIMIT = 3;
export class SubjectFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = { values: [] };
  }
  renderSubjectEntry() {
    return readOnlyWrapper(<div className="form-group"></div>);
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
