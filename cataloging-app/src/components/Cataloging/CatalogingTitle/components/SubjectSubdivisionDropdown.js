import { React, PropTypes, SubDivision, Label } from "../imports";

export const SubjectSubdivisionDropdown = ({ className, name, value }) => (
  <select name={name} className={className} value={value}>
    <option value={SubDivision.GENERAL}>
      <Label label="LABEL_GENERAL" />
    </option>
    <option value={SubDivision.FORM}>
      <Label label="LABEL_FORM" />
    </option>
    <option value={SubDivision.CHRONOLOGICAL}>
      <Label label="LABEL_CHRONOLOGICAL" />
    </option>
    <option value={SubDivision.GEOGRAPHIC}>
      <Label label="LABEL_GEOGRAPHIC" />
    </option>
  </select>
);

SubjectSubdivisionDropdown.propTypes = {
  className: PropTypes.string,
  value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
  ]),
  name: PropTypes.string
};
