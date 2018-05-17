import { React, PropTypes, CallNumber } from "../../../imports";
import { CardPrefix } from "./CardPrefix";
import { CardCutter } from "./CardCutter";
export const CardCallNumber = ({ callNumber = {}, className }) => (
  <div className={`card-call-number ${className || ""}`}>
    <div className="card-call-number-container">
      <CardPrefix value={callNumber[CallNumber.PREFIX]} />
      <div className="card-main">{callNumber[CallNumber.MAIN] || ""}</div>
      <CardCutter value={callNumber[CallNumber.CUTTER]} />
      <div className="card-suffix">{callNumber[CallNumber.SUFFIX] || ""}</div>
    </div>
  </div>
);

CardCallNumber.propTypes = {
  className: PropTypes.string,
  callNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};
