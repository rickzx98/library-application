import { React, PropTypes, FluidForm, FluidApi, FieldView, Subject } from '../imports';
export class ParentFormField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.refresh();
  }

  setValue(value) {
    this.setState({value});
  }

  refresh() {
    if (FluidForm.getValue(this.props.formValue, this.props.field.name)) {
      const id = FluidForm.getValue(this.props.formValue, this.props.field.name);
      FluidApi.execute('getSubjectById', {id})
        .then(({getSubjectById})=> {
          this.setValue(getSubjectById('data')(Subject.NAME));
        });
    }
  }

  render() {
    return (<FieldView>{this.state.value}</FieldView>);
  }
}

ParentFormField.propTypes = {
  formValue: PropTypes.object.isRequired,
  field: PropTypes.object.isRequired
};
