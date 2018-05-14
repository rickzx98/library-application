import {React, PropTypes, IndexCard} from "../../imports";

export class LayoutEditor extends React.Component {
  constructor(props) {
    super(props);
    this.getSize = this._getSize.bind(this);
    this.state = {
      size: "large"
    };
  }

  _getSize() {
    return this.props.formValue && this.props.formValue.data && this.props.formValue.data[IndexCard.CARD_SIZE];
  }

  render() {
    const style = {
      height: this.state.height,
      width: this.state.width
    };
    return (<div className="layout-editor">
      <div className="property-pane">
        <div>Text</div>
      </div>
      <div style={style} className="editor-container grids">
        <div className={`content-pane ${this.getSize() || 'large'}`}/>
      </div>
    </div>);
  }
}

LayoutEditor.propTypes = {
  setValue: PropTypes.func.isRequired,
  field: PropTypes.object,
  formValue: PropTypes.object
};
