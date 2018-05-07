import {FieldView, FontAwesome, getLabel, PropTypes, React, readOnlyWrapper, ResponsiveButton} from '../../imports';
import {FLUID_REMOVE, FLUID_FIELDS_ON_CLICK} from "./constants";

export const Accession = ({value = {}, index, readOnly, name}) => {
  return (<div className="accession">
    {!readOnly && index > 0 && (<ResponsiveButton
      icon={<FontAwesome name="close" size="lg" fixedWidth/>}
      className="remove-button btn btn-xs btn-danger"
      label={getLabel("LABEL_REMOVE_ACCESSION")}
      fluid={{name: FLUID_FIELDS_ON_CLICK, data: {command: FLUID_REMOVE, index, accession: value[name]}}}/>)}
    <div className="form-group clearfix">
      {readOnlyWrapper((
        <FieldView>{value[name] || ''}</FieldView>
      ), (
        <input value={value[name] || ''} placeholder={`${getLabel("LABEL_ACCESSION_COPY")}${index + 1}`}
               className="form-control"
               name={`${index}_${name}`}/>), readOnly)}
    </div>
  </div>);
};

Accession.propTypes = {
  value: PropTypes.object,
  index: PropTypes.number.isRequired,
  readOnly: PropTypes.bool,
  name: PropTypes.string.isRequired
};
