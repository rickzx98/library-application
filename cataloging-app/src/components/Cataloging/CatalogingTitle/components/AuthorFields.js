import {
  FieldView,
  FluidForm,
  FontAwesome,
  getLabel,
  PropTypes,
  React,
  readOnlyWrapper,
  ResponsiveButton
} from '../imports';

import {PAGE_NAME} from '../constants';

const FIELD_LIMIT = 6;

export class AuthorFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {values: []};
    this.more = this._more.bind(this);
    this.remove = this._remove.bind(this);
    this.getValue = this._getValue.bind(this);
  }

  componentWillMount() {
    const formValues = {...FluidForm.getValue(this.props.formValue, this.props.field.name)};
    if (formValues[this.props.field.name + '_0']) {
      delete formValues[this.props.field.name + '_0'];
    }
    let values = [];
    for (let field in formValues) {
      if (formValues.hasOwnProperty(field)) {
        if (formValues[field]) {
          values.push({
            name: field
          });
        }
      }
    }
    this.setValues(values);
  }

  componentDidUpdate(prevProps) {
    if (!this.props.readOnly) {
      for (let i = 0; i < FIELD_LIMIT; i++) {
        const fieldName = this.props.field.name + '_' + i;
        if (FluidForm.getValue(this.props.formValue, fieldName) !== FluidForm.getValue(prevProps.formValue, fieldName)) {
          let value = FluidForm.getValue(this.props.formValue, this.props.field.name);
          if (!value) {
            value = {};
          }
          let newValue = {...value};
          newValue[this.props.field.name + '_' + i] = FluidForm.getValue(this.props.formValue, fieldName);
          FluidForm.set(PAGE_NAME, this.props.field.name, newValue);
        }
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
    const value = {...FluidForm.getValue(this.props.formValue, this.props.field.name)};
    value[fieldName] = undefined;
    values.splice(index, 1);
    this.setValues(values);
    FluidForm.set(PAGE_NAME, this.props.field.name, value);
  }

  setValues(values) {
    this.setState({values});
  }

  _getValue(field) {
    const value = FluidForm.getValue(this.props.formValue, this.props.field.name);
    return value[field] || '';
  }

  renderAuthor_0() {
    return readOnlyWrapper((<div className="form-group">
      <FieldView>{this.getValue(this.props.field.name + '_0')}</FieldView>
    </div>), (<div className="input-group">
      <input className="form-control"
             value={this.getValue(this.props.field.name + '_0')}
             placeholder={getLabel('LABEL_NAME')}
             name={this.props.field.name + '_0'}/>
      <div className="input-group-btn">
        <ResponsiveButton
          disabled={this.state.values.length === FIELD_LIMIT}
          onClick={this.more}
          title={getLabel('LABEL_MORE')}
          icon={<FontAwesome name="plus" size="lg" fixedWidth/>}
          className="btn btn-success"/>
      </div>
    </div>), this.props.readOnly);
  }

  renderOtherAuthors(authorField, index) {
    return readOnlyWrapper((<div key={authorField.name} className="form-group">
        <FieldView>{this.getValue(this.props.field.name + '_' + (index + 1))}</FieldView>
      </div>),
      (<div key={authorField.name}
            className={index === (this.state.values.length - 1) ? 'input-group' : 'author form-group'}>
          <input className="form-control"
                 placeholder={getLabel('LABEL_OTHER_NAME')}
                 name={authorField.name}
                 value={this.getValue(authorField.name)}/>
          {index === (this.state.values.length - 1) && (<div className="input-group-btn">
            <ResponsiveButton
              onClick={() => {
                this.remove(index);
              }}
              icon={<FontAwesome name="trash" size="lg" fixedWidth/>}
              className="btn btn-danger"
              title={getLabel('LABEL_REMOVE')}/>
          </div>)}
        </div>
      ), this.props.readOnly);
  }

  render() {
    return (<div noValidate={true}
                 className="author-fields">
      {this.renderAuthor_0()}
      {this.state.values && this.state.values.map((authorField, index) => this.renderOtherAuthors(authorField, index))}
    </div>);
  }
}

AuthorFields.propTypes = {
  field: PropTypes.object.isRequired,
  formValue: PropTypes.object,
  readOnly: PropTypes.bool
};

