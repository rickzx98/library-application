import { PropTypes, React, FluidFunc, printA4 } from "../../imports";
import { CardCatalog } from "./CardCatalog";
import { COMMAND_PRINT_CATALOG } from "../../constants";
export class CardCatalogPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isPrinting: false };
    this.printCatalog = this._printCatalog.bind(this);
    FluidFunc.create(COMMAND_PRINT_CATALOG).onStart(this.printCatalog);
  }
  componentWillMount() {
    this.setState({
      isPrinting: false
    });
  }
  componentWillUnmount() {
    this.setState({
      isPrinting: false
    });
  }
  _printCatalog() {
    this.setState({
      isPrinting: true
    });
    printA4(
      "clearfix a4 portrait padding05cm card-catalog-preview printing"
    ).then(() => {
      this.setState({
        isPrinting: false
      });
    });
  }
  render() {
    return (
      <div
        className={`paper a4 portrait card-catalog-preview ${
          this.state.isPrinting ? "printing" : ""
        }`}
      >
        <CardCatalog formValue={this.props.instance.props.pageForm} />
        {this.state.isPrinting && <div className="card-border" />}
        {this.state.isPrinting && (
          <CardCatalog className="card-for-printing" formValue={this.props.instance.props.pageForm} />
        )}
      </div>
    );
  }
}

CardCatalogPreview.propTypes = {
  instance: PropTypes.object.isRequired
};
