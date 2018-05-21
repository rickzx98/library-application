import {
  FluidApi,
  FluidForm,
  FluidFunc,
  Library,
  PropTypes,
  React,
  Title,
  printA4
} from "../../imports";

import { Barcodes } from "./Barcodes";
import { COMMAND_PRINT_BARCODES } from "../../constants";

export class BarcodeFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.printBarcodes = this._printBarcodes.bind(this);
    FluidFunc.create(COMMAND_PRINT_BARCODES).onStart(this.printBarcodes);
  }
  componentWillMount() {
    this.refresh();
  }
  componentDidUpdate(prevProps) {
    if (
      FluidForm.getValue(this.props.formValue, Title.LOCATION) !==
      FluidForm.getValue(prevProps.formValue, Title.LOCATION)
    ) {
      this.refresh();
    }
  }
  _printBarcodes() {
    printA4("barcodes clearfix a4 portrait paddin03in");
  }
  refresh() {
    FluidApi.execute("getListData", { pageName: "library" })
      .then(({ getListData }) => {
        const libraryId = FluidForm.getValue(
          this.props.formValue,
          Title.LOCATION
        );
        const library = getListData("data")("library").filter(
          library => library[Library.ID] === libraryId
        )[0];
        this.setLibrary(library ? library[Library.NAME] : "");
        this.loadingOff();
      })
      .catch(error => {
        this.error(error);
        this.loadingOff();
        this.setLibrary({});
      });
  }
  setLibrary(library) {
    this.setState({ library });
  }
  loadingOn() {
    this.setState({ loading: true });
  }

  loadingOff() {
    this.setState({ loading: false });
  }

  error(error) {
    this.setState({ error });
  }

  render() {
    const values = FluidForm.getValue(
      this.props.formValue,
      this.props.field.name
    );
    return (
      <Barcodes
        ref={el => (this.refBarcodes = el)}
        values={values}
        library={this.state.library}
      />
    );
  }
}

BarcodeFields.propTypes = {
  field: PropTypes.object,
  formValue: PropTypes.object
};
