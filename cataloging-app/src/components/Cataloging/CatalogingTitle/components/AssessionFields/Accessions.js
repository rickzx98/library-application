import {FontAwesome, getLabel, PropTypes, React, ResponsiveButton} from '../../imports';
import {FLUID_ADD, FLUID_FIELDS_ON_CLICK} from "./constants";
import {Accession} from './Accession';

export const Accessions = ({values, readOnly, name}) => {
  return (<div className="accessions">
    <div className="clearfix">
      <div className="pull-right">
        {!readOnly && (<ResponsiveButton
          icon={<FontAwesome name="plus" size="lg" fixedWidth/>}
          className="add-button btn btn-xs btn-secondary"
          label={getLabel("LABEL_ADD_ACCESSION")}
          fluid={{name: FLUID_FIELDS_ON_CLICK, data: {command: FLUID_ADD}}}/>)}
      </div>
    </div>
    {values && values.map((value, index) => (<Accession key={index + '_' + name} index={index} name={name} value={value}
                                                        readOnly={readOnly}/>))}
  </div>);
};

Accessions.propTypes = {
  values: PropTypes.array,
  readOnly: PropTypes.bool,
  name: PropTypes.string.isRequired
};
