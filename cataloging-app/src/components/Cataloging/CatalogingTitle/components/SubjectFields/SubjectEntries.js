import {
  PropTypes,
  React,
  ResponsiveButton,
  getLabel,
  FontAwesome
} from "../../imports";
import {FLUID_SUBJECT_FIELDS_ON_CLICK, ADD_SUBJECT} from "./constants";
import {SubjectEntry} from "./SubjectEntry";

export const SubjectEntries = ({values, readOnly, name}) => (
  <div className="subject-entries">
    <div className="subject-control clearfix">
      <div className="pull-right">
        {!readOnly && (<ResponsiveButton
          fluid={{
            name: FLUID_SUBJECT_FIELDS_ON_CLICK,
            data: {command: ADD_SUBJECT}
          }}
          icon={<FontAwesome name="plus" fixedWidth size="lg"/>}
          className="btn btn-sm btn-secondary"
          label={getLabel("LABEL_ADD_SUBJECT")}
        />)}
      </div>
    </div>
    {values &&
    values.map((subject, index) => (
      <SubjectEntry
        key={`${index}_${name}`}
        name={name}
        readOnly={readOnly}
        index={index}
        value={subject}
      />
    ))}
  </div>
);
SubjectEntries.propTypes = {
  values: PropTypes.array,
  readOnly: PropTypes.bool,
  name: PropTypes.string.isRequired
};
