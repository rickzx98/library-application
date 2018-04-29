import { getLabel, PropTypes, React, SubjectEntry } from "../../imports";

export const SubjectEntriesDropdown = ({ className, name, value }) => (
  <select name={name} className={className} value={value}>
    <option value={SubjectEntry.CORPORATE}>
      {getLabel("LABEL_CORPORATE")}
    </option>
    <option value={SubjectEntry.CHRONOLOGICAL}>
      {getLabel("LABEL_CHRONOLOGICAL")}
    </option>
    <option value={SubjectEntry.GEOGRAPHIC}>
      {getLabel("LABEL_GEOGRAPHIC")}
    </option>
    <option value={SubjectEntry.MEETING}>{getLabel("LABEL_MEETING")}</option>
    <option value={SubjectEntry.NAMED_EVENT}>
      {getLabel("LABEL_NAMED_EVENT")}
    </option>
    <option value={SubjectEntry.PERSONAL}>{getLabel("LABEL_PERSONAL")}</option>
    <option value={SubjectEntry.TOPICAL}>{getLabel("LABEL_TOPICAL")}</option>
    <option value={SubjectEntry.UNIFORM}>{getLabel("LABEL_UNIFORM")}</option>
  </select>
);

SubjectEntriesDropdown.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};
