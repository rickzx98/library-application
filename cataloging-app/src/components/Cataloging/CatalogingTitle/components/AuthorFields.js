import { FluidForm, FontAwesome, PropTypes, React, ResponsiveButton, getLabel } from '../imports';

import { PAGE_NAME } from '../constants';

const FIELD_LIMIT = 6;

export class AuthorFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = { values: [] };
    this.more = this._more.bind(this);
    this.remove = this._remove.bind(this);
  }
  componentDidUpdate(prevProps) {
    for (let i = 0; i < FIELD_LIMIT; i++) {
      const fieldName = this.props.field.name + '_' + i;
      if (FluidForm.getValue(this.props.formValue, fieldName) !== FluidForm.getValue(prevProps.formValue, fieldName)) {
        let value = FluidForm.getValue(this.props.formValue, this.props.field.name);
        if (!value) {
          value = {};
        }
        let newValue = { ...value };
        newValue[this.props.field.name + '_' + i] = FluidForm.getValue(this.props.formValue, fieldName);
        FluidForm.set(PAGE_NAME, this.props.field.name, newValue);
      }
    }
  }
  componentWillUnmount() {
    this.setValues([]);
  }
  _more() {
    const values = [...this.state.values];
    values.push({
      name: this.props.field.name + '_' + (values.length + 1)
    });
    this.setValues(values);
  }
  _remove(index) {
    const values = [...this.state.values];
    const fieldName = values[index].name;
    const value = { ...FluidForm.getValue(this.props.formValue, this.props.field.name) };
    value[fieldName] = undefined;
    values.splice(index, 1);
    this.setValues(values);
    FluidForm.set(PAGE_NAME, this.props.field.name, value);
  }
  setValues(values) {
    this.setState({ values });
  }
  render() {
    return (<div noValidate={true}
      className="author-fields">
      <div className="input-group">
        <input className="form-control"
          placeholder={getLabel('LABEL_NAME')}
          name={this.props.field.name + '_0'} />
        <div className="input-group-btn">
          <ResponsiveButton
            disabled={this.state.values.length === FIELD_LIMIT}
            onClick={this.more}
            title={getLabel('LABEL_MORE')}
            icon={<FontAwesome name="plus" size="lg" fixedWidth />}
            className="btn btn-success" />
        </div>
      </div>
      {this.state.values && this.state.values.map((authorField, index) => (
        <div key={authorField.name} className="input-group">
          <input className="form-control"
            placeholder={getLabel('LABEL_OTHER_NAME')}
            name={authorField.name}
            value={authorField.value || FluidForm.getValue(this.props.formValue, authorField.name)} />
          <div className="input-group-btn">
            <ResponsiveButton
              onClick={() => {
                this.remove(index);
              }}
              icon={<FontAwesome name="trash" size="lg" fixedWidth />}
              className="btn btn-danger"
              title={getLabel('LABEL_REMOVE')} />
          </div>
        </div>
      ))}
    </div>);
  }
}

AuthorFields.propTypes = {
  field: PropTypes.object.isRequired,
  formValue: PropTypes.object
};
