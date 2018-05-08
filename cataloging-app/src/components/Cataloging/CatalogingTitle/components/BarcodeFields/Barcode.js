import { React, PropTypes, Barcode as BarcodeComponent } from "../../imports";
export const Barcode = ({ value, library }) => (
  <div className="barcode">
    <div className="barcode-container">
      <div className="barcode-header">{library}</div>
      <div className="barcode-component">
        <BarcodeComponent height={34} fontSize={16} width={2} value={value} />
      </div>
    </div>
  </div>
);

Barcode.propTypes = {
  value: PropTypes.string,
  library: PropTypes.string
};
