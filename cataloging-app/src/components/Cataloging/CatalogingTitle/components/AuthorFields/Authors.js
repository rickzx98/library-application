import {FontAwesome, getLabel, PropTypes, React, ResponsiveButton} from '../../imports';
import {ADD_AUTHOR, FLUID_AUTHOR_FIELDS_ON_CLICK} from "./constants";
import {Author} from './Author';

export const Authors = ({values, readOnly, name}) => {
  return (<div className="author-field">
    <ResponsiveButton
      icon={<FontAwesome name="plus" size="lg" fixedWidth/>}
      className="add-button btn btn-secondary"
      label={getLabel("LABEL_ADD_AUTHOR")}
      fluid={{name: FLUID_AUTHOR_FIELDS_ON_CLICK, data: {command: ADD_AUTHOR, index}}}/>)}
    {values && values.map((value, index) => <Author index={index} name={name} value={alue} readOnly={readOnly}/>)}
  </div>);
};

AuthorField.propTypes = {
  value: PropTypes.object,
  index: PropTypes.number.isRequired,
  readOnly: PropTypes.bool,
  name: PropTypes.string.isRequired
};
