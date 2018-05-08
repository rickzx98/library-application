import { React, PropTypes, Title } from "../../imports";
import { Barcode } from "./Barcode";
export class Barcodes extends React.Component {
  render() {
    const { library, values } = this.props;
    return (
      <div className="barcodes clearfix paper a4 portrait paddin03in">
        {values &&
          values.map((value, index) => (
            <Barcode
              key={`barcode_${index}`}
              value={value[Title.BARCODE]}
              library={library}
            />
          ))}
      </div>
    );
  }
}
Barcodes.propTypes = {
  library: PropTypes.string,
  values: PropTypes.array.isRequired
};
