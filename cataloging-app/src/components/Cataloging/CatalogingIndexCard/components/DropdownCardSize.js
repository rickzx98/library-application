import {React, PropTypes, getLabel} from '../imports';


export const DropdownCardSize = ({field, getValue}) => {
  return (<select name={field.name} className="form-control" value={getValue()}>
    <option value="">{getLabel("LABEL_SELECT_OPTIONS")}</option>
    <option value="standard">{getLabel("LABEL_STANDARD")}</option>
    <option value="large">{getLabel("LABEL_LARGE")}</option>
  </select>);
};

DropdownCardSize.propTypes = {
  getValue: PropTypes.func.isRequired,
  field: PropTypes.object.isRequired
};
