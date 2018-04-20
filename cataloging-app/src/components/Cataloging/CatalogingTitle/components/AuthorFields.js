import { PropTypes, React, getLabel } from '../imports';

const FIELD_LIMIT = 6;
export class AuthorFields extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this._onSubmit.bind(this);
    }
    _onSubmit(event) {
        event.preventDefault();
    }
    render() {
        return (<form noValidate={true} onSubmit={this.onSubmit} className="author-fields">
            <div className="form-group">
                <input name={this.props.field.name + '_0'} className="form-control" />
            </div>
        </form>);
    }
}

AuthorFields.propTypes = {
    field: PropTypes.object.isRequired,
    formValue: PropTypes.object
};