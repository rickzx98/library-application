import {FluidForm, FluidFunc, React, PropTypes} from '../../imports';
import {ADD_AUTHOR, FLUID_AUTHOR_FIELDS_ON_CLICK, REMOVE_AUTHOR} from './constants';
import {Authors} from './Authors';

import {PAGE_NAME} from '../../constants';

export class AuthorFields extends React.Component {
  constructor(props) {
    super(props);
    this.createDefaultAuthor = this._createDefaultAuthors.bind(this);
    this.getAuthors = this._getAuthors.bind(this);
    this.setValue = this._setValue.bind(this);
    this.addAuthor = this._addAuthor.bind(this);
    this.removeAuthor = this._removeAuthor.bind(this);
    this.getValue = this._getValue.bind(this);

    FluidFunc.create(FLUID_AUTHOR_FIELDS_ON_CLICK)
      .onStart(({command, index}) => {
        switch (command()) {
          case ADD_AUTHOR:
            this.addAuthor();
            break;
          case REMOVE_AUTHOR:
            this.removeAuthor(index());
            break;
        }
      })
      .spec("command", {require: true});
  }

  componentDidUpdate(prevProps) {
    if (!this.props.readOnly && this.props.formValue.touched) {
      const values = this.getAuthors(prevProps.formValue);
      values.forEach((entry, _index) => {
        Object.keys(entry).forEach((field) => {
          const value = FluidForm.getValue(this.props.formValue, `${_index}_${field}`);
          if (value && value !== this.getValue(field, _index)) {
            this.setValue(field, value, _index);
          }
        });
      });
    }
  }

  _createDefaultAuthors() {
    const _newAuthor = {};
    _newAuthor[this.props.field.name] = '';
    return _newAuthor;
  }

  _getAuthors(formValue) {
    if (FluidForm.getValue(formValue, this.props.field.name).length === 0) {
      return [this.createDefaultAuthor()];
    }
    return FluidForm.getValue(formValue, this.props.field.name);
  }

  _setValue(field, value, fieldIndex) {
    const values = this.getAuthors(this.props.formValue);
    const authors = [...values];
    let author;
    if (authors.length <= fieldIndex) {
      author = this.createDefaultAuthor();
      authors.push(author);
    } else {
      author = {...authors[fieldIndex]};
    }
    author[field] = value;
    authors[fieldIndex] = author;
    FluidForm.set(PAGE_NAME, this.props.field.name, authors);
  }

  _getValue(field, fieldIndex) {
    const value = FluidForm.getValue(
      this.props.formValue,
      this.props.field.name
    );
    if (value && value instanceof Array) {
      return value[fieldIndex][field];
    }
    return '';
  }

  _addAuthor() {
    const values = [...this.getAuthors(this.props.formValue)];
    values.push(this.createDefaultAuthor());
    this.setValues(values);
  }

  _removeAuthor(index) {
    const values = [...this.getAuthors(this.props.formValue)];
    values.splice(index, 1);
    this.setValues(values);
  }

  setValues(values = [this.createDefaultAuthor()]) {
    FluidForm.set(PAGE_NAME, this.props.field.name, values);
  }

  render() {
    return (<Authors values={this.getAuthors(this.props.formValue)} name={this.props.field.name}
                     readOnly={this.props.readOnly}/>);
  }
}

AuthorFields.propTypes = {
  field: PropTypes.object.isRequired,
  formValue: PropTypes.object.isRequired,
  readOnly: PropTypes.bool
};



