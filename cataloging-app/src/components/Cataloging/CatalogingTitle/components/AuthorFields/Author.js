import {FieldView, FontAwesome, getLabel, PropTypes, React, readOnlyWrapper, ResponsiveButton} from '../../imports';
import {FLUID_AUTHOR_FIELDS_ON_CLICK, REMOVE_AUTHOR} from "./constants";

export const Author = ({value = {}, index, readOnly, name}) => {
  return (<div className="author">
    {!readOnly && index > 0 && (<ResponsiveButton
      icon={<FontAwesome name="close" size="lg" fixedWidth/>}
      className="remove-button btn btn-sm btn-danger"
      label={getLabel("LABEL_REMOVE_AUTHOR")}
      fluid={{name: FLUID_AUTHOR_FIELDS_ON_CLICK, data: {command: REMOVE_AUTHOR, index, author: value[name]}}}/>)}
    <div className="form-group clearfix">
      {readOnlyWrapper((
        <FieldView>{value[name] || ''}</FieldView>
      ), (
        <input value={value[name] || ''} placeholder={getLabel("LABEL_AUTHOR")} className="form-control"
               name={`${index}_${name}`}/>), readOnly)}
    </div>
  </div>);
};

Author.propTypes = {
  value: PropTypes.object,
  index: PropTypes.number.isRequired,
  readOnly: PropTypes.bool,
  name: PropTypes.string.isRequired
};
