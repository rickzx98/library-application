import {
  FieldView,
  PropTypes,
  React,
  getLabel,
  readOnlyWrapper,
  FontAwesome,
  ResponsiveButton,
  FormGroup,
  getValue
} from "../../imports";
import {entryTypeValueTransformer} from './SubjectValueTransformer';
import {SubjectEntriesDropdown} from "./SubjectEntriesDropdown";
import {SubjectSubdivision} from "./SubjectSubdivision";
import {REMOVE_SUBJECT, FLUID_SUBJECT_FIELDS_ON_CLICK} from './constants';

export const SubjectEntry = ({index, name, value = {}, readOnly}) => {
  const entryName = `${index}_${name}_entry`;
  const entryType = `${index}_${name}_type`;
  return (
    <div className="subject-entry">
      {index > 0 && !readOnly && (
        <ResponsiveButton
          icon={<FontAwesome name="close" size="lg" fixedWidth/>}
          className="remove-button btn btn-xs btn-danger"
          label={getLabel("LABEL_REMOVE_SUBJECT")}
          fluid={{name: FLUID_SUBJECT_FIELDS_ON_CLICK, data: {command: REMOVE_SUBJECT, index, entryName}}}/>)}

      <FormGroup label={getLabel("LABEL_SUBJECT_ENTRY")} className="clearfix">
        {readOnlyWrapper(
          <FieldView>{getValue(value, `${name}_entry`) + ' - ' + getValue(value, `${name}_type`, entryTypeValueTransformer)}</FieldView>,
          <div>
            <div className="input-form col-sm-7">
              <input
                name={entryName}
                placeholder={getLabel("LABEL_SUBJECT_ENTRY")}
                value={value[`${name}_entry`]}
                className="form-control"
              />
            </div>
            <div className="button-form col-sm-5">
              <SubjectEntriesDropdown
                name={entryType}
                value={value[`${name}_type`] || ''}
                className="form-control"
              />
            </div>
          </div>,
          readOnly
        )}
      </FormGroup>
      <SubjectSubdivision
        index={index}
        name={name}
        value={value}
        readOnly={readOnly}
      />
    </div>
  );
};

SubjectEntry.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  value: PropTypes.object,
  readOnly: PropTypes.bool
};
