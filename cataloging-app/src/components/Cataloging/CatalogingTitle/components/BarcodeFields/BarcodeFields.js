import {
  React,
  PropTypes,
  FluidForm,
  Title,
  FluidApi,
  Library
} from "../../imports";
import { Barcodes } from "./Barcodes";
export class BarcodeFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
  refresh() {
    FluidApi.storage("library")
      .then(({ data }) => {
        const libraryId = FluidForm.getValue(
          this.props.formValue,
          Title.LOCATION
        );
        const library = data().filter(
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
    return <Barcodes values={values} library={this.state.library} />;
  }
}

BarcodeFields.propTypes = {
  field: PropTypes.object,
  formValue: PropTypes.object
};
