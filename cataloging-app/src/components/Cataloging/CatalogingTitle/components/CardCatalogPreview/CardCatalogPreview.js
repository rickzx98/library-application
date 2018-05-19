import { FluidFunc, PropTypes, React, printCatalog } from "../../imports";

import { COMMAND_PRINT_CATALOG } from "../../constants";
import { CardCatalogPreviewBody } from "./CardCatalogPreviewBody";
import { SET_NUMBER_TO_PRINT } from "./fluid.info";

export class CardCatalogPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isPrinting: false, printQuantity: 1 };
    this.printCatalog = this._printCatalog.bind(this);
    this.numberToPrint = this._setNumberToPrint.bind(this);
    FluidFunc.create(COMMAND_PRINT_CATALOG).onStart(this.printCatalog);
    FluidFunc.create(SET_NUMBER_TO_PRINT).onStart(this.numberToPrint).spec("printQuantity", { require: true });
  }

  componentWillMount() {
    this._printOff();
    this._printQuantity();
  }

  componentWillUnmount() {
    this._printOff();
    this._printQuantity();
  }
  _setNumberToPrint({ printQuantity }) {
    this._printQuantity(printQuantity());
  }
  _printCatalog() {
    this._printOn();
    printCatalog(
      "clearfix a4 portrait card-catalog-preview printing",
      this.state.printQuantity
    ).then(() => {
      this._printOff();
    });
  }

  _printOn() {
    this.setState({
      isPrinting: true
    });
  }

  _printOff() {
    this.setState({
      isPrinting: false
    });
  }

  _printQuantity(printQuantity = 1) {
    this.setState({
      printQuantity
    });
  }
  render() {
    return (<CardCatalogPreviewBody
      isPrinting={this.state.isPrinting}
      pageForm={this.props.instance.props.pageForm} />);
  }
}

CardCatalogPreview.propTypes = {
  instance: PropTypes.object.isRequired
};
