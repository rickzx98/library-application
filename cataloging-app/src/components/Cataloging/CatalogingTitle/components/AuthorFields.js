import { FluidForm, Label, PropTypes, React } from '../imports';

import { PAGE_NAME } from '../constants';

const FIELD_LIMIT = 6;
const MARC_CODE = '100';
export class AuthorFields extends React.Component {
    constructor(props) {
        super(props);
        this.state = { values: [] }
        this.onSubmit = this._onSubmit.bind(this);
        this.onChange = this._onChange.bind(this);
        this.more = this._more.bind(this);
        this.remove = this._remove.bind(this);
    }
    _onSubmit(event) {
        event.preventDefault();
    }
    _onChange(event) {

    }
    _more() {
        const values = [...this.state.values];
        values.push({
            name: this.props.field.name + '_' + values.length + 1,
            value: ''
        });
        this.setValues(values);
    }
    _remove(index) {
        const values = [...this.state.values];
        values.splice(index, 1);
        this.setValues(values);
    }
    setValues(values) {
        this.setState({ values });
    }
    render() {
        return (<form noValidate={true}
            onChange={this.onChange}
            onSubmit={this.onSubmit} className="author-fields">
            <div className="form-group col-sm-9">
                <input name={this.props.field.name + '_0'} className="form-control" />
            </div>
            <div className="more-control col-sm-3 clearfix">
                {this.state.values.length < FIELD_LIMIT && <a onClick={this.more}><Label label="LABEL_MORE" />...</a>}
            </div>
            {this.state.values && this.state.values.map((authorField, index) => (
                <span key={authorField.name}>
                    <div className="form-group col-sm-9">
                        <input className="form-control" name={authorField.name} value={authorField.value} />
                    </div>
                    <div className="remove-control col-sm-3">
                        <a onClick={() => { this.remove(index); }}><Label label="LABEL_REMOVE" /></a>
                    </div>
                </span>
            ))}
        </form>);
    }
}

AuthorFields.propTypes = {
    field: PropTypes.object.isRequired,
    formValue: PropTypes.object
};