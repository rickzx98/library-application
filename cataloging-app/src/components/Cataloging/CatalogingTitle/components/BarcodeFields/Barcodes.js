import { React, PropTypes, Title } from "../../imports";
import { Barcode } from "./Barcode";
export const Barcodes = ({ library, values }) => {
  return (
    <div className="barcodes">
      {values &&
        values.map((value, index) => <Barcode key={`barcode_${index}`} value={value[Title.BARCODE]} library={library} />)}
    </div>
  );
};
Barcodes.propTypes = {
  library: PropTypes.string,
  values: PropTypes.array.isRequired
};
