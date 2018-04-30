import {FontAwesome, getLabel, PropTypes, React, ResponsiveButton} from '../../imports';
import {ADD_AUTHOR, FLUID_AUTHOR_FIELDS_ON_CLICK} from "./constants";
import {Author} from './Author';

export const Authors = ({values, readOnly, name}) => {
  return (<div className="authors">
    <div className="clearfix">
      <div className="pull-right">
        {!readOnly && (<ResponsiveButton
          disabled={values.length > 6}
          icon={<FontAwesome name="plus" size="lg" fixedWidth/>}
          className="add-button btn btn-secondary"
          label={getLabel("LABEL_ADD_AUTHOR")}
          fluid={{name: FLUID_AUTHOR_FIELDS_ON_CLICK, data: {command: ADD_AUTHOR}}}/>)}
      </div>
    </div>
    {values && values.map((value, index) => (<Author key={index + '_' + name} index={index} name={name} value={value}
                                                     readOnly={readOnly}/>))}
  </div>);
};

Authors.propTypes = {
  values: PropTypes.array,
  readOnly: PropTypes.bool,
  name: PropTypes.string.isRequired
};
