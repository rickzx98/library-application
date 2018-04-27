import { Label, PropTypes, React, SubjectEntry } from "../../imports";

export const SubjectEntriesDropdown = ({ className, name, value = SubjectEntry.TOPICAL }) => (
  <select name={name} className={className} value={value}>
    <option value={SubjectEntry.CORPORATE}>
      <Label label="LABEL_CORPORATE" />
    </option>
    <option value={SubjectEntry.CHRONOLOGICAL}>
      <Label label="LABEL_CHRONOLOGICAL" />
    </option>
    <option value={SubjectEntry.GEOGRAPHIC}>
      <Label label="LABEL_GEOGRAPHIC" />
    </option>
    <option value={SubjectEntry.MEETING}>
      <Label label="LABEL_MEETING" />
    </option>
    <option value={SubjectEntry.NAMED_EVENT}>
      <Label label="LABEL_NAMED_EVENT" />
    </option>
    <option value={SubjectEntry.PERSONAL}>
      <Label label="LABEL_PERSONAL" />
    </option>
    <option value={SubjectEntry.TOPICAL}>
      <Label label="LABEL_TOPICAL" />
    </option>
    <option value={SubjectEntry.UNIFORM}>
      <Label label="LABEL_UNIFORM" />
    </option>
  </select>
);

SubjectEntriesDropdown.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};
