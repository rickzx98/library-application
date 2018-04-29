import { getLabel, PropTypes, React, SubDivision } from "../../imports";

export const SubjectSubdivisionDropdown = ({ className, name, value }) => (
  <select name={name} className={className} value={value}>
    <option value={SubDivision.GENERAL}> {getLabel("LABEL_GENERAL")}</option>
    <option value={SubDivision.FORM}>{getLabel("LABEL_FORM")}</option>
    <option value={SubDivision.CHRONOLOGICAL}>
      {getLabel("LABEL_CHRONOLOGICAL")}
    </option>
    <option value={SubDivision.GEOGRAPHIC}>
      {getLabel("LABEL_GEOGRAPHIC")}
    </option>
  </select>
);

SubjectSubdivisionDropdown.propTypes = {
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  name: PropTypes.string
};
